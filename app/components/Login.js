/* eslint-disable react/forbid-prop-types */
import React, { Component } from "react";
import {View,Grid,Row,Container,Header,Title,Content,Button,Item,Label,Input,Body,Left,Right,Icon,Text,Form,StyleProvider,Toast} from "native-base";

import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import { Actions } from 'react-native-router-flux';

import { Dimensions, StyleSheet } from "react-native";
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
import commonColor from '../../native-base-theme/variables/commonColor';


class LoginComponent extends Component {
  onEmailBlur = (emailValue) => {
    console.log("emailValue::::",emailValue)
  }

  render() {
     const {
          loading, onLoginSubmit, onEmailChange, onPasswordChange, loginError, disableLogin,
    } = this.props;

    {loginError && console.log("login.js loginError:",loginError)}

    return (
      <StyleProvider  style={getTheme(material)}>
                  <Container>
                      {loginError && Toast.show({text:loginError.message,buttonText: "Okay",duration:3000,position:"top"}) }
                      <Header style={{ backgroundColor: "#ffffff" }}>
                        <Left>
                           <Button transparent>
                              <Icon name="arrow-back" style={{fontSize: 20, color: '#34C47C'}} onPress={() => {  Actions.Reward()}}/>
                              {/*<Title style={{fontSize:15, color: '#34C47C'}} onPress={() => {  Actions.Reward()}}>Redeem</Title>*/}
                          </Button>
                        </Left>
                        <Body style={{justifyContent: "center",alignItems: "center"}}>
                          <Title style={{fontSize:15, color: '#34C47C'}}>          One Food</Title>
                        </Body>
                        <Right >
                            <Button transparent hasText  onPress={() =>{Actions.signupScreen()}}  >
                              <Text style={{fontSize:15, color: '#34C47C'}}>Sight Up</Text>
                            </Button>
                        </Right>
                      </Header>

                      <Content padder>
                                <Title  style={{justifyContent:'flex-start',marginBottom:5 }}>Welcome Back ! </Title>
                                <Title  style={{justifyContent:'flex-start',marginBottom:50 }}>You are Been Missed</Title>

                                <Form style={{justifyContent:'flex-start',marginBottom:20 }}>
                                  <Item >
                                      <Input placeholder="Enter your email address/phone number" autoFocus onBlur={this.onEmailChange} onChangeText={debounce(onEmailChange, 1000)} />
                                  </Item>
                                  <Item >
                                    <Input placeholder="Enter your password" secureTextEntry  ref="password" onChangeText={debounce(onPasswordChange, 500)}/>
                                  </Item>
                                </Form>

                                <View>
                                    <Label style={{fontSize:15,flexWrap:'wrap',width:150,}}> or continu with </Label>
                                    <View style={styles.box}>
                                         <View style={styles.list}>
                                           <Icon name="facebook-official"  type="FontAwesome" style={{fontSize:50, color: '#34C47C'}} onPress={() =>{Actions.signupScreen()}}/>
                                         </View>
                                         <View style={styles.list} >
                                           <Icon name="google-plus-square" type="FontAwesome" style={{fontSize:50, color: '#34C47C'}} onPress={() =>{Actions.signupScreen()}}/>
                                        </View>
                                    </View>
                                </View>

                                <Button transparent  block success hasText  onPress={() =>{Actions.Menu()}}  >
                                  <Text style={{flexDirection:'row',justifyContent: 'center',fontSize:12,color:'#2B2B2B'}}>forget password?</Text>
                                </Button>
                                <Button block success style={{marginTop: 8,marginBottom: 20}}
                                      disabled={disableLogin} loading={loading} onPress={onLoginSubmit} >
                                  <Text>Sign In</Text>
                                </Button>

                      </Content>
                    </Container>
                   </StyleProvider>
    );
  }
}


LoginComponent.defaultProps = {
  loginError: null,
};

LoginComponent.propTypes = {
  disableLogin: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  loginError: PropTypes.object,
  onEmailChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onLoginSubmit: PropTypes.func.isRequired,
};


////获取屏幕宽度
//let screenWidth = Dimensions.get("window").width;
////设置左右间隔
//let space = 10;
////一行几个数量定义
//let numbers = 3;
////list实际宽度计算
//let list_width = screenWidth/numbers - space*2;

const styles = StyleSheet.create({
  layoutInCenter:{
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center"
  },
  box: {
      flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start',marginBottom:40
  },
  list: {
      width: 50,
      height: 70,
      borderWidth:0,
      marginTop: 10,
      marginLeft:20
 },
});


export default LoginComponent;