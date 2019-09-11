import React, { Component } from "react";
import { Image,Text, View, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { Container, Header, Left, Body,Content, Right, Button, Icon, Title } from 'native-base';
import { Actions } from 'react-native-router-flux';

class TestScreen extends Component {
  render() {
    onddSubmit = ()=> {
        alert(111111)
        Actions.choiceSendTypeScreenS({useremail:"259885@qq.com",mobile:"13580510200",choice:"mobile"})
     }

    return (
    <Container>
      <Content>
           <ImageBackground
               source={{uri: 'http://res.downhot.com/d/file/p/2014/02/20/7552b2a13b4807a0b449bb35327b1446.jpg'}}  style={{height:100,width:400}}  resizeMode='stretch'>
                  <View style={styles.container}>
                       <Text style={styles.welcome}>Welcome to One  Food!</Text>
                  </View>
           </ImageBackground>

           <Button block success onPress={onddSubmit} >
                  <Text>Test Validate</Text>
           </Button>
      </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

export default TestScreen;