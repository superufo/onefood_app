import React, { Component } from "react";
import { Image, Dimensions,  StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { Container,View, Header, Left, Body,Content, Right, Button, Icon,Text,Title, Grid ,Row,StyleProvider,Label } from 'native-base';
import { Actions } from 'react-native-router-flux';

import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
import commonColor from '../../native-base-theme/variables/commonColor';

import Assets from '../../src/constants/assets';
import BR from '../base_components/BR';

import UiAdapter from '../utils/UiAdapter';

class RewardWelcome extends Component {
    render(){
        return (
            <StyleProvider  style={getTheme(material)}>
            <Container padder>
                 <View style={{alignItems:'center',justifyContent:'center',heght:50}}>
                    <Title style={{paddingTop:15,fontSize:25,color:'#34C47C'}}>One Food</Title>
                 </View>

                 <Grid>
                    <Row size={1}>
                    </Row>

                    <Row size={3}>
                          <View style={styles.vbox}>

                           <View>
                                <Label style={{alignItems:'center',justifyContent:'center',flexWrap:'wrap',textAlign:"center",fontSize:30,fontWeight:"bold",color:'#2B2B2B'}}>
                                    Welcome to onefood
                                </Label>

                                <BR size={15} />

                                <Label style={{alignItems:'center',justifyContent:'center',flexWrap:'wrap',textAlign:"center",fontSize:15}}>
                                    want to enjoy a free food?
                                </Label>
                                <BR size={15} />
                           </View>

                          <View >
                                <Button block success onPress={() =>{Actions.loginScreen()}} >
                                      <Text>Sign In</Text>
                                </Button>

                                <Button block success transparent  onPress={() =>{Actions.signupScreen()}}>
                                   <Text>Sign Up</Text>
                                </Button>
                           </View>

                            <View>
                                <Label style={{fontSize:15,flexWrap:'wrap',width:150}}> or continu with </Label>

                                <View style={styles.box}>
                                     <View style={styles.list}>
                                       <Icon name="facebook-official"  type="FontAwesome" style={{fontSize:50, color: '#34C47C'}} onPress={() =>{Actions.signupScreen()}}/>
                                     </View>
                                     <View style={styles.list} >
                                       <Icon name="google-plus-square" type="FontAwesome" style={{fontSize:50, color: '#34C47C'}} onPress={() =>{Actions.signupScreen()}}/>
                                    </View>
                                </View>
                            </View>


                       </View>
                   </Row>

                 </Grid>
             </Container>
          </StyleProvider>
          )
     }
}

//#F5FCFF  flex:1
const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    flex: 1
  },
  buttonStyle:{
      width: UiAdapter.autoWidth(320),
      justifyContent: "center",
      alignItems: "center"
  },
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
  vbox : {
    flex: 1, flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'flex-start',marginBottom:40,backgroundColor: "#ffffff",
  },
  box: {
        flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start',marginBottom:40
  },
  list: {
        width: 60,
        height: 70,
        borderWidth:0,
        marginTop: 10,
        marginLeft:20
  },
});


export default RewardWelcome;
