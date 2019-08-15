import React, { Component } from "react";
import { Image,  StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { Container,View, Header, Left, Body,Content, Right, Button, Icon,Text,Title, Grid ,Row,StyleProvider,Label } from 'native-base';
import { Actions } from 'react-native-router-flux';

import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import commonColor from '../../../native-base-theme/variables/commonColor';

import Assets from '../../../src/constants/assets';
import BR from '../../base_components/BR';

class RewardIndex extends Component {
    render(){
        return (
            <StyleProvider  style={getTheme(material)}>
            <Container>
                 <Header>
                    <Left>
                       <Text style={styles.layoutInCenter}>    </Text>
                    </Left>
                    <Body style={{ justifyContent: "center", alignItems: "center",}} >
                       <Title>         One Food</Title>
                    </Body>
                    <Right>
                      <Icon name="cart" style={{fontSize: 20, color: '#34C47C'}} onPress={() => Actions.cartScreen({id: ''})} />
                    </Right>
                 </Header>

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
                      <Button success style={styles.welcome}  onPress={() => { alert(11111); Actions.welcomeScreen();}}>
                          <Text onPress={() => { Actions.welcomeScreen();}}>  Redeem     </Text>
                      </Button>

                       <Button success style={styles.welcome}>
                           <Text>Scan To Earn</Text>
                       </Button>
                   </Row>
                 </Grid>
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
