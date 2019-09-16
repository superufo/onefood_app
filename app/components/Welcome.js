import React, { Component } from "react";
import { Image, Dimensions,  StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { Toast,Container,View, Header, Left, Body,Content, Right, Button, Icon,Text,Title, Grid ,Row,StyleProvider,Label } from 'native-base';
import { Actions } from 'react-native-router-flux';

import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
import commonColor from '../../native-base-theme/variables/commonColor';

import Assets from '../../src/constants/assets';
import BR from '../base_components/BR';
import DeviceStorage from '../../src/utils/DeviceStorage';

import UiAdapter from '../utils/UiAdapter';
//1080dp/3 * 1920dp/3 = 360px*640px   1px = 9dp
const screenWidth = UiAdapter.autoWidth(360);
const tilteText = (<Title style={{flex:1,paddingTop:15,heght:50,width:screenWidth,flexDirection:'row',textAlign:'center',fontSize:25,color:'#34C47C'}}>One Food</Title>);

class RewardWelcome extends Component {
    render(){
        return (
            <StyleProvider  style={getTheme(material)}>
            <Container padder style={styles.container}>
                 <View style={{flex:1,alignItems: "center", justifyContent:'center'}}>
                   {tilteText}
                 </View>

                  <View style={styles.vbox}>
                       <View style={{flex:2,alignItems: "center",justifyContent:'center',width:screenWidth}}>
                            <Label style={{alignItems:'center',justifyContent:'center',flexWrap:'wrap',textAlign:"center",fontSize:30,fontWeight:"bold",color:'#2B2B2B'}}>
                                Welcome to onefood
                            </Label>

                            <BR size={20} />

                            <Label style={{alignItems:'center',justifyContent:'center',flexWrap:'wrap',textAlign:"center",fontSize:15}}>
                                want to enjoy a free food?
                            </Label>
                            <BR size={20} />

                            <Button block success onPress={() =>{
                                                               DeviceStorage.get("authToken").then( (val)=>{
                                                                    console.log("authToken",val)
                                                                    if (val==null){
                                                                        Actions.loginScreen()
                                                                    }else {
                                                                        Toast.show({text:"You have been login ok, plese login out to relogin",position:"top",textStyle:{ color: "#34C47C" }, buttonText: "Okay"})
                                                                        Actions.rewardScreen()
                                                                    }
                                                               });
                                                          }} >
                                  <Text>Sign In</Text>
                            </Button>

                            <Button block success transparent  onPress={() =>{Actions.signupScreen()}}>
                               <Text>Sign Up</Text>
                            </Button>
                       </View>

                       <View style={{flex:1,alignItems: "flex-start", justifyContent:'flex-start'}}>
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
             </Container>
          </StyleProvider>
          )
     }
}

//#F5FCFF  flex:1
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "baseline",
    backgroundColor: "#ffffff",
  },
  welcome: {
    fontSize: 15,
    textAlign: "center",
    margin: 10,
    height:35
  },
  vbox : {
      flex: 2,
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent:'center',
      marginBottom:40,
      backgroundColor: "#ffffff",
      width:screenWidth,
  },
  box: {
      flex: 1,
       flexDirection: 'row',
       flexWrap: 'wrap',
       justifyContent:'center',
       marginBottom:40,
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
