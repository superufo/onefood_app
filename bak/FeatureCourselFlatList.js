import React, { Component } from 'react'
import {StyleSheet,Text,View,Image,Dimensions,TouchableOpacity,ScrollView,FlatList} from 'react-native'
import {  Icon, Item } from 'native-base';

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
         gid:'1',
         title:'test001',
         description:'testoo1',
         price:'12$',
         url:'http://pic16.nipic.com/20111006/6239936_092702973000_2.jpg',
        },{
         gid:'2',
         title:'test001',
         description:'testoo1',
         price:'12$',
         url:'http://pic16.nipic.com/20111006/6239936_092702973000_2.jpg',
        },{
         gid:'3',
         title:'test001',
         description:'testoo1',
         price:'12$',
         url:'http://pic13.nipic.com/20110409/7119492_114440620000_2.jpg',
        },{
         gid:'4',
         title:'test001',
         description:'testoo1',
         price:'12$',
         url:'http://pic68.nipic.com/file/20150601/8164280_104301508000_2.jpg'
        }
      ],
      topic: [
          {
               gid:'1',
               title: '岁末清扫有它们，体验大不同',
               describe: '更轻松、更美好的大扫除攻略',
               price: '9.9元起',
               url:'http://pic16.nipic.com/20111006/6239936_092702973000_2.jpg',
           },
           {
                gid:'2',
                title: '新年一点红，幸运一整年',
                describe: '那些让你“红”运当头的好物',
                price: '9.9元起',
                url:'http://pic68.nipic.com/file/20150601/8164280_104301508000_2.jpg'
           },
      ]
    }
  }

  renderFeatrueItem = ({item})=> {
        return (
            <TouchableOpacity style={styles.topicItem}>
                <Image source={{uri:item.url}} style={styles.topicImg} />
                <View style={styles.topicContainer}>
                    <View style={styles.topicText}>
                        <Text style={styles.topicTitle}>{item.title}</Text>
                        <Text style={styles.topicDesc}>{item.describe}</Text>
                    </View>
                    <Text style={styles.topicPrice}>{item.price}</Text>
                </View>
            </TouchableOpacity>
        )
  }

 renderFeatrue() {
     return (
             <View style={styles.topic}>
                 <Text style={styles.topicHead}>专题精选</Text>
                 <FlatList
                     data={this.state.topic}
                     keyExtractor={(item, index) => item.gid}
                     renderItem={this.renderFeatrueItem}
                     horizontal={true}
                     showsHorizontalScrollIndicator={false}
                 />
             </View>
         )
 }

  render () {
    return (
      <View style={styles.container}>
        {this.renderFeatrue}
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
        width: width,
        alignItems:'center',
        backgroundColor: '#fff',
        paddingBottom:10,
        marginBottom:10,
    },
    topicHead:{
        fontSize:16,
        color:'#666',
        padding:15,
    },
    topicItem: {
        width: width*0.7,
        marginLeft:15,
    },
    topicImg: {
        width: width*0.7,
        height: width*0.4,
        borderWidth:0.5,
        borderColor:'#cdcdcd',
        borderRadius:2,
    },
    topicContainer:{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginTop:10,
    },
    topicTitle:{
        fontSize:16,
        color:'#666',
    },
    topicDesc:{
        fontSize:13,
        color:'#999',
        marginTop:3,
    },
    topicPrice:{
        fontSize:14,
        color:'#b4282d',
    },
});

export default  FeatureCoursel;