import React, { Component } from "react";
import { Image,  StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { Container,View, Header, Left, Body,Content, Right, Button, Icon,Text,Title, Grid ,Row,StyleProvider,Label,Badge } from 'native-base';

import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import commonColor from '../../../native-base-theme/variables/commonColor';

import Assets from '../../../src/constants/assets';
import BR from '../../base_components/BR';

import storage from 'redux-persist/lib/storage';
import { Actions } from 'react-native-router-flux';

class RewardIndex extends Component {
    render(){
         let  cart = {}
         if ( this.props.cartData.length != undefined &&  this.props.cartData.length>0){
             cart = (
               <Button hasText badge vertical transparent>
                 <Badge style={{marginLeft:20,marginBottom:-16,backgroundColor:'rgba(0,0,0,.3)',alignItems:'center',textAlign:'center',textAlignVertical:'center'}}>
                   <Text style={{fontSize:12}}>{this.props.cartData.length}</Text>
                 </Badge>
                 <Icon name="cart" style={{fontSize:25,color: '#34C47C'}} onPress={() => Actions.cartScreen({id: ''})} />
               </Button>
             )
           } else {
             cart = (<Button hasText transparent><Icon name="cart" style={{fontSize:25,color: '#34C47C'}} onPress={() => Actions.cartScreen({id: ''})} /></Button>)
        }


        return (
            <StyleProvider  style={getTheme(material)}>
            <Container>
                 <Header noleft transparent>
                    <Button  hasText transparent>
                      <Icon name="arrow-back" />
                    </Button>
                    <Body  transparent style={{justifyContent: "center", alignItems: "center", paddingLeft:60}}>
                       <Title>One Food</Title>
                    </Body>
                    <Right>
                      {cart}
                    </Right>
                 </Header>

                 <Content>
                     <Grid padder style={{ marginTop:60}} >
                       <Row size={3} style={styles.layoutInCenter}>
                            <Image source={Assets.Images.foodBg} style={{height: 200, width: 250,paddingTop:50}}/>
                       </Row>
                       <Row size={2} style={styles.layoutInCenter}>
                            <Label style={{flexWrap:'wrap',fontSize: 20,textAlign: "center",margin: 10,fontWeight:"bold",width:100}} >50 point</Label>
                              <BR size={50} />
                            <Label style={{flexWrap:'wrap',width:150}}>You are xx points away from the next reward.</Label>
                       </Row>
                       <Row size={2} style={styles.layoutInCenter}>
                          <Button success style={styles.welcome}  onPress={() => {  Actions.welcomeScreen();}}>
                              <Text onPress={() => { Actions.welcomeScreen();}}>  Redeem     </Text>
                          </Button>

                           <Button success style={styles.welcome}>
                               <Text  onPress={() =>{Actions.cameraScreen();}}>Scan To Earn</Text>
                           </Button>
                       </Row>
                     </Grid>
                 </Content>
             </Container>
          </StyleProvider>
          )
     }
}

//#F5FCFF  flex:1
const styles = StyleSheet.create({
  layoutInCenter:{
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  welcome: {
    fontSize: 15,
    textAlign: "center",
    margin: 10,
    height:35
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});


export default RewardIndex;
