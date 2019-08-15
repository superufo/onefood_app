import React, { Component } from "react";
import {View,Container,Header,Title,Content,Button,Item,Label,Input,Body,Left,Right,Icon,Text,Form,StyleProvider,Toast} from "native-base";

import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import { Actions } from 'react-native-router-flux';

import {  StyleSheet } from "react-native";
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
import commonColor from '../../native-base-theme/variables/commonColor';


class SignupComponent extends Component {
  render() {
    const {
      loading, onSignupSubmit,
      onEmailChange, onPasswordChange,
      registerError, disableSignUp,
      registerMessage,
    } = this.props;

    if (registerMessage && registerMessage.success) {
      Actions.replace('loginScreen', {
        loginError: {
          message: 'Sign Up successful',
        },
      });
    }

    return (
           <StyleProvider  style={getTheme(material)}>
            <Container>
                <Header style={{ backgroundColor: "#ffffff" }}>
                  <Left>
                     <Button transparent>
                      <Icon name="arrow-back" style={{fontSize: 20, color: '#34C47C'}} onPress={()=>{Actions.pop()}}/>
                    </Button>
                  </Left>
                  <Body style={{justifyContent: "center",alignItems: "center"}}>
                    <Title style={{fontSize:15, color: '#34C47C'}}>          One Food</Title>
                  </Body>
                  <Right >
                      <Button transparent hasText  onPress={() =>{Actions.loginScreen()}}  >
                        <Text style={{fontSize:15, color: '#34C47C'}}>Sight In</Text>
                      </Button>
                  </Right>
                </Header>

                <Content padder>
                   {registerError && Toast.show({text:registerError.message,textStyle:{ color: "yellow" }, buttonText: "Okay"}) }
                   {registerMessage && Toast.show({text:JSON.stringify(registerMessage),textStyle:{ color: "#34C47C" }, buttonText: "Okay"})}

                  <Title style={{ justifyContent:'flex-start',marginBottom:30, marginTop:30,}}>Let is Create your foodies Account</Title>

                  <Form style={{ justifyContent:'flex-start',marginBottom:20 }}>
                    <Item>
                        <Input placeholder="Enter your Email"  onChangeText={debounce(onEmailChange, 500)}/>
                    </Item>
                    <Item >
                      <Input placeholder="Enter your Phone Number" />
                    </Item>
                    <Item >
                      <Input placeholder="Enter your Password"  secureTextEntry onChangeText={debounce(onPasswordChange, 500)} />
                    </Item>
                    <Item>
                      <Input  placeholder="Enter your Repeate Password"  secureTextEntry/>
                    </Item>
                    <Item >
                      <Input placeholder="Enter your First Name" />
                    </Item>
                    <Item  last>
                      <Input placeholder="Enter your Last Name" />
                    </Item>
                  </Form>

                   <View style={styles.box}>
                       <View style={styles.list}>
                         <Icon name="facebook-official"  type="FontAwesome" style={{fontSize:25, color: '#34C47C'}} onPress={() =>{Actions.pop()}}/>
                       </View>
                       <View style={styles.list} >
                         <Icon name="google-plus-square"   type="FontAwesome" style={{fontSize:25, color: '#34C47C'}} onPress={() =>{Actions.pop()}}/>
                      </View>
                  </View>

                  <Button block success style={{ marginTop: 10,marginBottom: 20 ,height:35}}
                        disabled={disableSignUp} loading={loading} onPress={onSignupSubmit} >
                    <Text>Sign In</Text>
                  </Button>
                </Content>
              </Container>
             </StyleProvider>
    );
  }
}

SignupComponent.defaultProps = {
  registerMessage: null,
  registerError: null,
};

SignupComponent.propTypes = {
  disableSignUp: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  registerMessage: PropTypes.object,
  registerError: PropTypes.object,
  onEmailChange: PropTypes.func.isRequired,
  //onPasswordChange: PropTypes.func.isRequired,
  //onSignupSubmit: PropTypes.func.isRequired,
};


const styles = StyleSheet.create({
  layoutInCenter:{
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center"
  },
  box: {
        flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start',marginBottom:10
    },
    list: {
        width: 40,
        height: 50,
        borderWidth:0,
        marginTop: 10,
        marginLeft:1,
        marginRight:1
   },
});

export default SignupComponent;

//secureTextEntry
//onChangeText={debounce(onPasswordChange, 500)}