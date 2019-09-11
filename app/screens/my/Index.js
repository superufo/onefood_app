import React, { Component } from 'react';
import { Image, TouchableOpacity, ImageBackground } from "react-native";
import { Container, Header,Left,Body, Right,Button, Content,Icon,Title,Subtitle ,List, ListItem, Text, Separator } from 'native-base';
 import { Col, Row, Grid } from "react-native-easy-grid";

export default class MyScreen extends Component {
  render() {
      return (
        <Container>
          <Header style={{backgroundColor: "#B6C0F2"}} >
           <Left>
               <Button transparent>
                 <Icon name='settings' />
               </Button>
           </Left>
           <Body>
              <Title>
                <Text>您还没有登陆</Text>
              </Title>
              <Subtitle onPress={() => this.props.navigation.navigate('loginScreen')}>
                请登陆/注册
              </Subtitle>
           </Body>
           <Right>
             <Button transparent>
               <Text></Text>
             </Button>
           </Right>
         </Header>

          <Content>
            <Separator bordered>
              <Text>    </Text>
            </Separator>

           <ListItem>
              <Text onPress={() => this.props.navigation.navigate('welcomeScreen')} >测试欢迎页面</Text>
            </ListItem>

            <ListItem>
              <Text>我的发布</Text>
            </ListItem>
            <ListItem last>
              <Text>我的预定</Text>
            </ListItem>

            <Separator bordered>
              <Text> </Text>
            </Separator>

            <ListItem>
              <Text>我的收藏</Text>
            </ListItem>
            <ListItem last>
              <Text>登出</Text>
            </ListItem>
          </Content>
        </Container>
      );
    }
}


{/*
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