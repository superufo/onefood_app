import React, { Component } from 'react'
import {StyleSheet,Text,View,Image,Dimensions,TouchableOpacity,ScrollView,FlatList} from 'react-native'
import {  Button,Icon, Item,Card ,CardItem, Left,Right } from 'native-base';

const { width,height } = Dimensions.get('window')
const screenWidth = width-100
const contentWidth = width/2 -40

import Assets from '../../../src/constants/assets';

//参考https://github.com/gingerJY/React-Native-Demo/blob/master/app/page/home/recommend.js
//https://www.cnblogs.com/MaiJiangDou/p/8351288.html
//https://reactnative.cn/docs/sample-application-movies/#flatlist

class  FeatureCoursel extends Component {
  constructor (props) {
      super(props)
      this.state = {
        FeatureList: [
          {
           gid:'2',
           title:'地瓜汤',
           description:'忆苦思甜',
           price:'12$',
           url:'http://pic16.nipic.com/20111006/6239936_092702973000_2.jpg',
          },{
           gid:'3',
           title:'鹿肉炒大蒜',
           description:'更轻松、更美好的大扫除攻略',
           price:'12$',
           url:'http://pic13.nipic.com/20110409/7119492_114440620000_2.jpg',
          },{
           gid:'4',
           title:'河鱼炖虾',
           description:'那些让你“红”运当头的好物',
           price:'12$',
           url:'http://pic68.nipic.com/file/20150601/8164280_104301508000_2.jpg'
          },{
           gid:'1',
           title:'test001',
           description:'testoo1',
           price:'12$',
           url:'http://pic16.nipic.com/20111006/6239936_092702973000_2.jpg',
          }
        ],
      }
  }

  renderFeatrueItem = ({item})=> {
      return (
          <TouchableOpacity style={styles.topicItem}>
              <Image source={{uri:item.url}} style={styles.topicImg} />
              <View style={styles.topicContainer}>
                  <View style={styles.topicText}>
                      <Text style={styles.topicTitle}>{item.title}</Text>
                      <Text style={styles.topicPri}>{item.price}</Text>
                  </View>
                  <Text style={{justifyContent:'center',alignItems:'center',textAlign:'center',textAlignVertical:'center'}} >
                     <Icon style={{fontSize:15,color:'#FF2650'}}  name='plus'  type="AntDesign"/>
                     <Icon style={{fontSize:15,color:'#FF2650'}}   name='cart' />
                  </Text>
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
    return (
        <View style={styles.topic}>
             <FlatList
                  data={this.state.FeatureList}
                  keyExtractor={(item, index) => item.gid}
                  renderItem={this.renderFeatrueItem}
                  horizontal={true}
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
        width: 240,
        height:290,
        marginLeft:10,
        marginRight:10,
    },
    topicImg: {
        width: 240,
        height: 240,
        borderWidth:0.5,
        borderColor:'#cdcdcd',
        borderRadius:2,
    },
    topicContainer:{
        width: 240,
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

export default  FeatureCoursel;