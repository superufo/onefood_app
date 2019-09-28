import React, { Component } from 'react';
import { Image, TouchableOpacity, ImageBackground,AsyncStorage} from "react-native";
import { Container,View,Header,Left,Body, Right,Button, Content,Icon,Title,Subtitle ,List, ListItem, Text, Separator,Thumbnail } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Actions } from 'react-native-router-flux';

import Assets from '../../src/constants/assets';
import BR from '../base_components/BR';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

class MyScreen extends Component {
  async render() {
       let  thumbnail = null

       const loginMessageString = await AsyncStorage.getItem("loginMessage");
       const loginMessage = JSON.parse(loginMessageString)
       if ( loginMessage!=undefined && loginMessage.jwtMember!=undefined) {
            const loginMessageString = await AsyncStorage.getItem("loginMessage");
            const loginMessage = JSON.parse(loginMessageString)

            const {image,username,mobile,facebook,google,userpoint,useremail} = loginMessage.jwtMember
            let point = (userpoint==null) ? 0 : userpoint
            thumbnail = (
                         <TouchableOpacity>
                           <Thumbnail large source={{uri:image}}/>
                           <Text style={{fontSize:14,width:200}}>{useremail}</Text>
                           <Text style={{fontSize:14,width:200}}>Current Point: {point}</Text>
                         </TouchableOpacity>
            );
       } else {
           thumbnail = (
                <TouchableOpacity>
                       <Thumbnail large  source={Assets.Images.banana}/>

                     <Text onPress={() => Actions.loginScreen()}>Please Login Fisrtly</Text>
                </TouchableOpacity>
           );
       }

      return (
        <Container>
           <Header style={{backgroundColor: "#B6C0F2",height:135}} >
                <Left>
                    <Button transparent>
                      <Icon name='settings' />
                    </Button>
                </Left>
                <Body style={{width:200}}  >
                   {thumbnail}
                </Body>
                <Right>
                  <Button transparent>
                    <Text></Text>
                  </Button>
                </Right>
            </Header>

          <Content>
            <ListItem nPress={()=> Actions.loginScreen()} style={{flex:1,flexDirection:'row',height:70}}>
                  <Icon style={{flex:3}}  name='mail' />

                  <Text style={{flex:21,flexDirection:'column'}}>
                     <Text style={{flex:1}} >
                        Total Saving: $66.66
                        Share to your friend and earn $5
                     </Text>
                  </Text>
            </ListItem>

            <ListItem style={{flex:1,flexDirection: 'row'}} >
              <Icon  style={{flex:3}} name='people' />
              <Text  style={{flex:20}}  onPress={() => Actions.welcomeScreen()} >My Profile</Text>
              <Icon  style={{flex:1,fontSize:14, alignItems:"flex-end",alignSelf: 'flex-end',color:'#1A1824'}}  name='right' type="AntDesign"/>
            </ListItem>

            <ListItem  style={{flex:1,flexDirection: 'row'}} onPress={()=> Actions.loginScreen()} >
              <Icon  style={{flex:3}} name='menu' />
              <Text style={{flex:20}}>My Order</Text>
              <Icon style={{flex:1,fontSize:14, alignItems:"flex-end",alignSelf: 'flex-end',color:'#1A1824'}}  name='right' type="AntDesign"/>
            </ListItem>

            <ListItem style={{flex:1,flexDirection: 'row'}} >
              <Icon  style={{flex:3}} name='settings' />
              <Text  style={{flex:20}}  onPress={() => Actions.welcomeScreen()} >Promo code</Text>
              <Icon  style={{flex:1,fontSize:14, alignItems:"flex-end",alignSelf: 'flex-end',color:'#1A1824'}}  name='right' type="AntDesign"/>
            </ListItem>


            <ListItem style={{flex:1,flexDirection: 'row'}} >
              <Icon  style={{flex:3}} name='menu' />
              <Text  style={{flex:20}}  onPress={() => Actions.welcomeScreen()} >My Addresses</Text>
              <Icon  style={{flex:1,fontSize:14, alignItems:"flex-end",alignSelf: 'flex-end',color:'#1A1824'}}  name='right' type="AntDesign"/>
            </ListItem>

            <ListItem style={{flex:1,flexDirection: 'row'}} >
              <Icon  style={{flex:3}} name='menu' />
              <Text  style={{flex:20}}  onPress={() => Actions.welcomeScreen()} >My Payment methid</Text>
              <Icon  style={{flex:1,fontSize:14, alignItems:"flex-end",alignSelf: 'flex-end',color:'#1A1824'}}  name='right' type="AntDesign"/>
            </ListItem>

            <ListItem style={{flex:1,flexDirection: 'row'}} >
              <Icon  style={{flex:3}} name='menu' />
              <Text  style={{flex:20}}  onPress={() => Actions.welcomeScreen()} >Settings</Text>
              <Icon  style={{flex:1,fontSize:14, alignItems:"flex-end",alignSelf: 'flex-end',color:'#1A1824'}}  name='right' type="AntDesign"/>
            </ListItem>

            <Separator bordered>
            </Separator>

            <ListItem style={{flex:1,flexDirection: 'row'}} >
              <Icon  style={{flex:3}} name='menu' />
              <Text  style={{flex:20}}  onPress={() => Actions.welcomeScreen()} >Login out</Text>
            </ListItem>
          </Content>
        </Container>
      );
    }
}


MyScreen.defaultProps = {
  loginMessage: null,
};

MyScreen.propTypes = {
  loginMessage: PropTypes.object,
};

function initMapStateToProps(state) {
  return {
    loginMessage: state.auth.loginMessage,
  };
}

function initMapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(initMapStateToProps, initMapDispatchToProps)(MyScreen);

{/*
       <Header style={{backgroundColor: "#B6C0F2",height:100}} >
          <Left>
              <Button transparent>
                <Icon name='settings' />
              </Button>
          </Left>
          <Body>
             {thumbnail}
          </Body>
          <Right>
            <Button transparent>
              <Text></Text>
            </Button>
          </Right>
       </Header>

       import { Col, Row, Grid } from "react-native-easy-grid";
         <Grid>
           <Col><Icon name="settings" /></Col>
           <Col>
                <Button onPress={() => this.props.navigation.navigate('main')}>
                 <Text> 登陆/注册 </Text>
                 </Button>
           </Col>
       </Grid>
*/}