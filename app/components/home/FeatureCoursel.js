import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions,TouchableOpacity } from 'react-native';

import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base'

import Carousel, { Pagination } from 'react-native-snap-carousel';

const SCREEN_WIDTH = Dimensions.get('window').width
//https://snack.expo.io/@zizwar/react-native-snap-carousel-with-custom-dots
//https://github.com/archriss/react-native-snap-carousel/blob/master/doc/PROPS_METHODS_AND_GETTERS.md

const Screen = (props) => (
   <Card>
      <CardItem>
        <Left>
          <Thumbnail source={{uri: 'Image URL'}} />
          <Body>
            <Text>NativeBase</Text>
            <Text note>GeekyAnts</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem cardBody>
        <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/>
      </CardItem>
      <CardItem>
        <Left>
          <Button transparent>
            <Icon active name="thumbs-up" />
            <Text>12 Likes</Text>
          </Button>
        </Left>
        <Body>
          <Button transparent>
            <Icon active name="chatbubbles" />
            <Text>4 Comments</Text>
          </Button>
        </Body>
        <Right>
          <Text>11h ago</Text>
        </Right>
      </CardItem>
    </Card>
);

class HotCoursel extends Component {
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
    height:300,
  }
})

export default HotCoursel;