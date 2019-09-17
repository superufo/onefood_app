import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')
const screenWidth = width-100
const contentWidth = width/2 -40

import { Actions } from 'react-native-router-flux';
import Assets from '../../../src/constants/assets';

const styles = {
  wrapper: {
    backgroundColor:'rgba(0,0,0,.2)',
    height:170
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:'rgba(0,0,0,.2)'
  },
  image: {
    idth:width-20,
    flex: 6,
    backgroundColor:'rgba(0,0,0,.2)'
  },
  loadingView: {
    idth:width-20,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor:'rgba(0,0,0,.2)'
  },

  loadingImage: {
    width: 60,
    height: 60
  }
}

const Slide = props => {
  return (<View style={styles.slide}  onPress={() => Actions.cartScreen({id:props.item.id})} >
    <Image onLoad={props.loadHandle.bind(null, props.i)} style={styles.image} source={{uri:props.item.pic}} />
    {
      !props.loaded && <View style={styles.loadingView}>
        <Image  style={styles.loadingImage} source={Assets.Images.pizza} />
      </View>
    }
    <Text style={{flex: 1,flexWrap: 'wrap',width:width-20,}} >{props.item.title}{props.item.content}</Text>
  </View>)
}

class HotCoursel extends Component {
  constructor (props) {
    super(props)

    let loadQueueVal = []
    for(let i=0;i< this.props.advList.length; i++){
        loadQueueVal.push(0);
    }

    this.state = {
      imgList: this.props.advList,
      loadQueue: loadQueueVal
    }
    this.loadHandle = this.loadHandle.bind(this)
  }

  loadHandle (i) {
    let loadQueue = this.state.loadQueue
    loadQueue[i] = 1
    this.setState({
      loadQueue
    })
  }

  render () {
    const {advList} =  this.props

    return (
      <View style={{height:170,width:width-20,}}>
        <Swiper loadMinimal loadMinimalSize={1}  style={styles.wrapper}   loop={true}
                showsPagination={true}  autoplayTimeout={8}  autoplay={true} showsButtons={false} >
          {
            this.state.imgList.map((item, i) => <Slide
              loadHandle={this.loadHandle}
              loaded={!!this.state.loadQueue[i]}
              item={item}
              i={i}
              key={i} />)
          }
        </Swiper>
      </View>
    )
  }
}

export default HotCoursel;