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

import Assets from '../../../src/constants/assets';

const styles = {
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width:width-20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    width:contentWidth,
    flex: 1,
    backgroundColor: 'transparent',
    backgroundColor: 'rgba(0,0,0,.2)',
  },
  image: {
    width:contentWidth,
    flex: 4,
    backgroundColor: 'transparent',
  },
  loadingView: {
    width:contentWidth,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.2)'
  },

  loadingImage: {
    width: 60,
    height: 60
  }
}

const Slide = props => {
  return (<View style={styles.slide}>
    <Image onLoad={props.loadHandle.bind(null, props.i)} style={styles.image} source={{uri: props.uri}} />
    {
      !props.loaded && <View style={styles.loadingView}>
        <Image resizeMode='stretch'  style={styles.loadingImage} source={Assets.Images.pizza} />
      </View>
    }
    <Text style={{flex: 1,flexWrap: 'wrap',width:contentWidth}} >Current Loaded Images: 111111</Text>
  </View>)
}

class  FeatureCoursel extends Component {
  constructor (props) {
    super(props)
    this.state = {
      imgList: [
        'http://pic16.nipic.com/20111006/6239936_092702973000_2.jpg',
        'http://pic16.nipic.com/20111006/6239936_092702973000_21!!!.jpg',
        'http://pic13.nipic.com/20110409/7119492_114440620000_2.jpg',
        'http://pic68.nipic.com/file/20150601/8164280_104301508000_2.jpg'
      ],
      loadQueue: [0, 0, 0, 0]
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
    return (
      <View style={{flex:1,height:170,width:width-20,}}>
        <Swiper  buttonWrapperStyle={{paddingBottom:50}} style={styles.wrapper} loop={true} horizontal={true}
                showsPagination={false}  autoplayTimeout={8}  autoplay={true} showsButtons={true} >
          {
            this.state.imgList.map((item, i) => <Slide
              loadHandle={this.loadHandle}
              loaded={!!this.state.loadQueue[i]}
              uri={item}
              i={i}
              key={i} />)
          }
        </Swiper>
      </View>
    )
  }
}

export default  FeatureCoursel;