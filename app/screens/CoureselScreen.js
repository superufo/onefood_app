import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions,TouchableOpacity } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const SCREEN_WIDTH = Dimensions.get('window').width
//https://snack.expo.io/@zizwar/react-native-snap-carousel-with-custom-dots
//https://github.com/archriss/react-native-snap-carousel/blob/master/doc/PROPS_METHODS_AND_GETTERS.md

const Screen = (props) => (
  <View style={{ width:SCREEN_WIDTH,height:180,backgroundColor:"#369"}}>
    <Text>{ props.text }</Text>
  </View>
);

class CoureselScreen extends Component {
  SCREENS = [
    <Screen text='first screen' />,
    <Screen text='second screen' />,
    <Screen text='third screen' />
  ]

  constructor(props) {
    super(props)
    this.state = {
      activeTab : 0
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Carousel
          autoplay={true}
          autoplayDelay={1000}
          autoplayInterval={1000}
          ref={ ref => this.carouselRef = ref }
          data={ this.SCREENS }
          renderItem={ ({ item }) => item }

          loop={true}
          onSnapToItem={ i => this.setState({ activeTab : i }) }
          sliderWidth={ SCREEN_WIDTH }
          itemWidth={ SCREEN_WIDTH }
          inactiveSlideOpacity={ 1 }
          inactiveSlideScale={ 1 }

        />

        <TouchableOpacity style={styles.tabBar}>
                <Pagination
                      dotContainerStyle = {{height:10}}
                      containerStyle={{height:10}}
                      dotsLength={3}
                      dotStyle={styles.ww}

                      inactiveDotStyle={{
                          backgroundColor: 'rgba(0, 0, 0,1)'
                      }}
                      inactiveDotOpacity={0.9}
                      inactiveDotScale={0.6}
                      activeDotIndex={ this.state.activeTab }
                />
          </TouchableOpacity>

      </View>

    )
  }
}

const styles = StyleSheet.create({
  ww:{
      width: 10,
      height: 10,
      borderRadius: 5,
      marginHorizontal: 8, backgroundColor: 'rgba(255, 255, 255, 0.92)'
  },
  container: {
    width:SCREEN_WIDTH,
    height:200,
    paddingTop: 40,
  },
  tabBar : {
    marginTop: -40,
    zIndex:999,
    right : 0,
    bottom : 0,
    left : 0,
  },
})

export default CoureselScreen;