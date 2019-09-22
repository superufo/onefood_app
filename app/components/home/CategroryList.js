import React, { Component } from 'react'
import {StyleSheet,Text,View,Image,Dimensions,TouchableOpacity,ScrollView,FlatList} from 'react-native'
import {  Button,Icon, Item,Card ,CardItem, Left,Right } from 'native-base';

import { Actions } from 'react-native-router-flux';
import Assets from '../../../src/constants/assets';

const { width,height } = Dimensions.get('window')
const screenWidth = width-100
const contentWidth = width/2 -40

//参考https://github.com/gingerJY/React-Native-Demo/blob/master/app/page/home/recommend.js
//https://www.cnblogs.com/MaiJiangDou/p/8351288.html
//https://reactnative.cn/docs/sample-application-movies/#flatlist

//测试数据
//data1: [
//           {
//            id:'2',
//            parent_id:'0',
//            ename:"Drinks",
//            url:'http://pic16.nipic.com/20111006/6239936_092702973000_2.jpg',
//           },{
//            id:'3',
//            parent_id:'0',
//            ename:"Colds Foods",
//            url:'http://pic13.nipic.com/20110409/7119492_114440620000_2.jpg',
//           },{
//            id:'4',
//            parent_id:'0',
//            ename:"Chuan Foods",
//            url:'http://pic16.nipic.com/20111006/6239936_092702973000_2.jpg',
//           },{
//            id:'1',
//            parent_id:'0',
//            ename:"Xiang Foods",
//            url:'http://pic16.nipic.com/20111006/6239936_092702973000_2.jpg',
//           }
//],

class  CategroryList extends Component {
  constructor (props) {
      super(props)
      this.state = {
        data: this.props.goodsCatagroryList
      }
  }

  catagroryAction = (catagroryId,catagroryEname)=>{
        let params = {catagrory:catagroryId,goodsName:null,isFeature:null,isHot:null,isNew:null,sort:'id,desc',title:catagroryEname}
        Actions.foodListScreen(params)
  }

  dataItem = ({item})=> {
      return (
          <TouchableOpacity style={styles.topicItem}  >
                <View style={styles.topicContainer} >
                    <View style={styles.topicText}>
                        <Text style={styles.topicTitle}>{item.ename}</Text>
                    </View>
                    <Text style={{justifyContent:'center',alignItems:'center',textAlign:'center',textAlignVertical:'center'}}  >
                       <Icon style={{fontSize:15,color:'#FF2650'}}   name='right'  type="AntDesign" onPress={this.catagroryAction(item.id,item.ename)}/>
                    </Text>
                </View>
          </TouchableOpacity>
      )
  }

  render () {
    return (
         <View style={styles.topic}>
             <FlatList
                  data={this.state.data}
                  keyExtractor={(item, index) => item.id}
                  renderItem={this.dataItem}
                  horizontal={false}
                  showsHorizontalScrollIndicator={false}
                  scrollEventThrottle={500}
                  scrollPercent={5}
             />
         </View>
    )
  }

}

const styles = StyleSheet.create({
        container: {
              flex: 1,
              alignItems: 'center',
              backgroundColor: '#efefef',
        },
        topic: {
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
            width: width-50,
            height:20,
            marginLeft:10,
            marginRight:10,
            marginBottom:20,
        },
        topicContainer:{
            width: width-50,
            height: 30,
            flexDirection: 'row',
            justifyContent:'space-between',
            marginTop:10,
        },
        topicTitle:{
            fontSize:16,
            color:'rgba(26,26,26,1)',
        },
        topicPri:{
            fontSize:13,
            color:'rgba(26,26,26,1)',
            marginTop:3,
        },
});

export default  CategroryList;