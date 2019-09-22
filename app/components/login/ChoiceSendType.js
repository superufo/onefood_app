import React, { Component } from "react";
import { Image, Dimensions,  StyleSheet, TouchableOpacity, ImageBackground,ListItem } from "react-native";
import { Container,View, Header, Left, Body,Content, Right, Button, Icon,Text,Title,StyleProvider,Label,Radio} from 'native-base';
import { Actions } from 'react-native-router-flux';

import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import commonColor from '../../../native-base-theme/variables/commonColor';

import Assets from '../../../src/constants/assets';
import BR from '../../base_components/BR';

import UiAdapter from '../../utils/UiAdapter';
//1080dp/3 * 1920dp/3 = 360px*640px   1px = 9dp
const screenWidth = UiAdapter.autoWidth(360);
const tilteText = (<Title style={{flex:1,paddingTop:15,height:50,width:screenWidth,flexDirection:'row',textAlign:'center',fontSize:25,color:'#34C47C'}}>One Food</Title>);

class ChoiceSendType extends Component {
    componentWillMount() {
    }

    componentDidMount() {
           console.log("***************ChoiceSendType",this.props.useremail)
           console.log("***************ChoiceSendType",this.props.choice)
           console.log("***************ChoiceSendType",this.state)
    }

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
                                Almost done {this.props.useremail}  {this.props.mobile}
                            </Label>

                            <BR size={20} />

                            <Label style={{alignItems:'center',justifyContent:'center',flexWrap:'wrap',textAlign:"center",fontSize:15}}>
                                we'll send  a verification code to you . which method would you like to receive?
                            </Label>
                            <BR size={20} />
                            <ListItem>
                                <Left>
                                  <Text>{this.props.useremail}</Text>
                                </Left>
                                <Right>
                                  <Radio selected={false} />
                                </Right>
                            </ListItem>
                            <ListItem>
                              <Left>
                                <Text>{this.props.mobile}</Text>
                              </Left>
                              <Right>
                                <Radio selected={true} />
                              </Right>
                            </ListItem>
                       </View>

                       <View style={{flex:1}}>
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
  }
});

export default ChoiceSendType;