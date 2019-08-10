import React, { Component } from "react";
import { Image,Text, View, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { Container, Header, Left, Body,Content, Right, Button, Icon, Title } from 'native-base';

class WelcomeScreen extends Component {
  render() {
    return (
    <Container>
       <Header>
        <Left>
          <Button transparent  onPress={() => this.props.navigation.goBack()} >
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body>
          <Title>Header</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name='menu' />
          </Button>
        </Right>
      </Header>

      <Content>
           <ImageBackground
               source={{uri: 'http://res.downhot.com/d/file/p/2014/02/20/7552b2a13b4807a0b449bb35327b1446.jpg'}}  style={{height:600,width:450}}  resizeMode='stretch'>
                  <View style={styles.container}>
                              <Text style={styles.welcome}>Welcome to React Native!</Text>
                              <Text style={styles.instructions}>Click Me!</Text>
                  </View>
           </ImageBackground>
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

export default WelcomeScreen;