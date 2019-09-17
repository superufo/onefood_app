import React, { Component } from 'react'
import {StyleSheet,Text,View,Image,Dimensions,TouchableOpacity,ScrollView,FlatList} from 'react-native'
import {  Button,Icon, Item,Card ,CardItem, Left,Right } from 'native-base';

import { Actions } from 'react-native-router-flux';
import BR from '../base_components/BR';

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
                  <View style={styles.topicText}>
                      <Text style={styles.topicTitle}>{item.ename}</Text>
                      <Text style={styles.topicPri}>{item.edescription}</Text>
                  </View>

                  <Text style={{justifyContent:'center',alignItems:'center',textAlign:'center',textAlignVertical:'center'}} >
                     <Text style={styles.topicPri}>price:{item.price}{item.unit}</Text>

                     <Text style={styles.topicPri}>point:{item.point}</Text>
                     <Icon style={{fontSize:15,color:'#FF2650'}}  name='plus' type="AntDesign" onPress={() => Actions.cartScreen({id:item.id})} />
                     <Icon style={{fontSize:15,color:'#FF2650'}}  name='cart' />
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
    },

});

export default  FoodList;