import React, { Component } from 'react'
import {ActivityIndicator,StyleSheet,Text,View,Image,Dimensions,TouchableOpacity,ScrollView,FlatList} from 'react-native'
import {  Button,Icon, Item,Card ,CardItem, Left,Right } from 'native-base';

import { Actions } from 'react-native-router-flux';
import BR from '../../base_components/BR';

import API from '../../../src/service/home';

const { width,height } = Dimensions.get('window')
const screenWidth = width-100
const contentWidth = width/2 -40

//参考https://github.com/gingerJY/React-Native-Demo/blob/master/app/page/home/recommend.js
//https://www.cnblogs.com/MaiJiangDou/p/8351288.html
//https://reactnative.cn/docs/sample-application-movies/#flatlist
// 参考 https://www.jianshu.com/p/4e7185fc9740

//ItemSeparatorComponent={this._separator}
let pageNo = 0;//当前第几页
let totalPage=3;//总的页数
let itemNo=0;//item的个数
class  FoodList extends Component {
      constructor (props) {
         super(props)

         this.state = {
              isLoading: true,
              //网络请求状态
              error: false,
              errorInfo: "",
              dataList: [],
              showFoot:0, // 控制foot， 0：隐藏footer  1：已加载完成,没有更多数据   2 ：显示加载中
              isRefreshing:false,//下拉控制
         }

        pageNo = 0
        totalPage=3
        itemNo=0
      }

      async fetchData(pageNo) {
         const  {catagrory,goodsName,isFeature,isHot,isNew,sort} = this.props

         let page = pageNo
         let size = 3
         try {
              const res =   await API.getGoodsList(catagrory,goodsName,isFeature,isHot,isNew,page,size,sort)

              if (res.data.status === 0) {
                 itemNo = res.data.data.totalElements;
                 totalPage =  Math.ceil(itemNo/size)

                 //alert(" itemNo"+itemNo+" pageNo:"+pageNo+" totalPage:"+totalPage)
                 let foot = 0;
                 if(pageNo>=totalPage){
                     foot = 1;//listView底部显示没有更多数据了
                 }

                 this.setState({
                    //复制数据源
                    dataList:this.state.dataList.concat(res.data.data.content),
                    isLoading: false,
                    showFoot:foot,
                    isRefreshing:false,
                 });
               } else {
                 this.setState({
                      error: true,
                      errorInfo: res.data.message,
                 })
               }
          } catch (e) {
             this.setState({
                  error: true,
                  errorInfo: e.data,
             })
         }
      }

      componentDidMount() {
          //alert(pageNo)
          //请求数据
          this.fetchData(pageNo);
      }

      //加载等待页
      renderLoadingView() {
          return (
              <View style={styles.container}>
                  <ActivityIndicator
                      animating={true}
                      color='green'
                      size="large"
                  />
              </View>
          );
      }

      //加载失败view
      renderErrorView() {
          return (
              <View style={styles.container}>
                  <Text>
                      Fetch Data  Fail
                  </Text>
              </View>
          );
      }

      renderFeatrueItem = ({item})=> {
          return (
              <TouchableOpacity style={styles.topicItem}>
                  <Image source={{uri:item.goodsPics[0]}} style={styles.topicImg} />
                  <View style={styles.topicContainer}>
                      <View style={{flex:2,marginTop:-3,}}>
                          <Text style={styles.topicTitle}>{item.ename}</Text>
                          <Text style={styles.topicDes}>{item.edescription}</Text>
                      </View>

                      <View style={{flex:1,marginTop:3,flexDirection:"column",alignItems:'flex-end',marginRight:10,}} >
                         <View style={{flex:1,flexDirection:"row",alignItems:"flex-end",justifyContent:'space-between',marginRight:10}}>
                             <Text style={styles.topicPri}>price:{item.price}{item.unit}</Text>
                             <Icon style={{fontSize:15,color:'#FF2650'}}  name='plus' type="AntDesign" onPress={() => Actions.cartScreen({id:item.id})} />
                             <Icon style={{fontSize:15,color:'#FF2650'}}  name='cart' />
                         </View>

                         <View style={{flex:1,flexDirection:"row",alignItems:"flex-end",marginTop:3,marginRight:10,justifyContent:'space-between', }}>
                            <Text style={styles.topicPri}>point:{item.point}</Text>
                            <Icon style={{fontSize:15,color:'#FF2650'}}  name='plus' type="AntDesign" onPress={() => Actions.cartScreen({id:item.id})} />
                            <Icon style={{fontSize:15,color:'#FF2650'}}  name='cart' />
                         </View>
                      </View>
                  </View>
              </TouchableOpacity>
          )
      }

      renderData() {
          return (
             <View style={styles.topic}>
                 <FlatList
                      style={{flex: 1}}
                      data={this.state.dataList}
                      keyExtractor={(item, index) => item.id}
                      renderItem={this.renderFeatrueItem}
                      horizontal={false}

                      ListFooterComponent={this._renderFooter.bind(this)}
                      onEndReached={()=>{
                             // 等待页面布局完成以后，在让加载更多
                             if (this.isCanLoadMore){
                                 this.loadMore();
                                 this.isCanLoadMore = false // 加载更多时，不让再次的加载更多
                             }
                      }}
                      onEndReachedThreshold={0.01}
                      onContentSizeChange={() => {
                          this.isCanLoadMore = true // flatview内部组件布局完成以后会调用这个方法
                      }}
                 />
            </View>
          )
      }

     _separator(){
             return <View style={{height:1,backgroundColor:'#999999'}}/>;
      }

     _renderFooter(){
         if (this.state.showFoot === 1) {
             return (
                 <View style={{height:30,alignItems:'center',justifyContent:'flex-start',}}>
                     <Text style={{color:'#999999',fontSize:14,marginTop:5,marginBottom:5,}}>
                         No More Data
                     </Text>
                 </View>
             );
         } else if(this.state.showFoot === 2) {
             return (
                 <View style={styles.footer}>
                     <ActivityIndicator />
                     <Text>Loding More Data...</Text>
                 </View>
             );
         } else if(this.state.showFoot === 0){
             return (
                 <View style={styles.footer}>
                     <Text></Text>
                 </View>
             );
         }
     }

    loadMore(){
            //如果是正在加载中或没有更多数据了，则返回
            if(this.state.showFoot != 0 ){
                return ;
            }
            //如果当前页大于或等于总页数，那就是到最后一页了，返回
            if((pageNo!=1) && (pageNo>=totalPage)){
                return;
            } else {
                pageNo++;
            }
            //底部显示正在加载更多数据
            this.setState({showFoot:2});
            //获取数据
            this.fetchData(pageNo);
    }

    render () {
        //第一次加载等待的view
        if (this.state.isLoading && !this.state.error ) {
            return this.renderLoadingView();
        } else if (this.state.error) {
            //请求失败view
            return this.renderErrorView();
        }
        //加载数据
        return this.renderData();
    }

}

const styles = StyleSheet.create({
    container: {
          flex: 1,
          alignItems: 'center',
          backgroundColor: '#efefef',
    },
    topic: {
        height: '100%',
        width: width-10,
        alignItems:'center',
        backgroundColor: '#ffffff',
    },
    topicHead:{
        fontSize:16,
        color:'#666',
        padding:15,
    },
    topicItem: {
        width: width-10,
        height:268,
        marginLeft:10,
        marginRight:10,
        flexDirection:'row'
    },
    topicImg: {
        width: 44,
        height: 44,
        marginRight:10,
        borderWidth:0.5,
        borderColor:'#cdcdcd',
        borderRadius:2,
    },
    topicContainer:{
        width: width-10-44-10,
        height: 30,
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    topicTitle:{
        fontSize:16,
        color:'rgba(26,26,26,1)',
    },
    topicDes:{
       fontSize:13,
       color:'rgba(26,26,26,1)',
    },
    topicPri:{
        marginRight:10,
        fontSize:13,
        color:'rgba(26,26,26,1)',
    },

});

export default  FoodList;