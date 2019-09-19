import React, { Component } from 'react'
import {Dimensions,TouchableOpacity,ScrollView,FlatList} from 'react-native'
import {  Button,Icon, Item,Card ,CardItem, Left,Right,Header,Body,Title } from 'native-base';

import { Actions } from 'react-native-router-flux';

const { width,height } = Dimensions.get('window')
const screenWidth = width-100
const contentWidth = width/2 -40

//Actions.replace('homePage')
class  FoodHeader extends Component {
  constructor (props) {
      super(props)
  }

  render () {
    return (
        <Header style={{ backgroundColor: "#ffffff", borderColor: '#ffffff', }}>
         <Left>
            <Button transparent>
             <Icon name="arrow-back" style={{fontSize: 20, color: '#34C47C'}} onPress={()=>{Actions.homePage()}}/>
           </Button>
         </Left>
         <Body style={{justifyContent: "center",alignItems: "center",marginRight:80}}>
           <Title style={{fontSize:15,color:'#34C47C'}}>{this.props.title}</Title>
         </Body>
       </Header>
    )
  }
}

export default  FoodHeader;