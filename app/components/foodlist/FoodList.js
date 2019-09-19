import React, { Component } from 'react'
import {StyleSheet,Text,View,Image,Dimensions,TouchableOpacity,ScrollView,FlatList} from 'react-native'
import {  Button,Icon, Item,Card ,CardItem, Left,Right } from 'native-base';

import { Actions } from 'react-native-router-flux';
import BR from '../../base_components/BR';

const { width,height } = Dimensions.get('window')
const screenWidth = width-100
const contentWidth = width/2 -40


//参考https://github.com/gingerJY/React-Native-Demo/blob/master/app/page/home/recommend.js
//https://www.cnblogs.com/MaiJiangDou/p/8351288.html
//https://reactnative.cn/docs/sample-application-movies/#flatlist

class  FoodList extends Component {
  constructor (props) {
      super(props)

      this.state = {
        FeatureList: this.props.goodsList,
      }
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

  readerHead= ()=>{
        return (
             <Button styles={{height:250,width:25,justifyContent: "center", alignItems: "center",backgroundColor:'rgba(0,0,0,.8)'}}>
                <Icon fontSize='30'  name='left'  type="AntDesign"/>
             </Button>
         )
  }

  readerEnd = ()=>{
        return (
           <Button styles={{height:250,width:25,justifyContent: "center", alignItems:'center',backgroundColor:'rgba(0,0,0,.8)'}}>
              <Icon fontSize='30'   name='right'  type="AntDesign"/>
           </Button>
        )
    }

  render () {
     //const {goodsList} =  this.props
     //console.log("FeatureCoursel goodsList:",goodsList)

    return (
        <View style={styles.topic}>
             <FlatList
                  data={this.state.FeatureList}
                  keyExtractor={(item, index) => item.id}
                  renderItem={this.renderFeatrueItem}
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
        width: width-10,
        height:68,
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