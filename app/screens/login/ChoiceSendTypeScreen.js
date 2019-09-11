import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import ChoiceSendType from '../../components/login/ChoiceSendType';

// "useremail" or "mobile"
class ChoiceSendTypeScreen extends Component {
  constructor(props) {
      super(props);
      this.state = {
        useremail: null,
        mobile: null,
        choice: null,
      };
  }

  componentWillReceiveProps(nextProps, nextContext) {
      /*alert(2222)
      console.log("***************ChoiceSendTypeScreen componentWillReceiveProps",nextProps)
      console.log("***************ChoiceSendTypeScreen componentWillReceiveProps",nextProps.useremail)
      console.log("***************ChoiceSendTypeScreen componentWillReceiveProps",nextProps.choice)*/

      this.setState({
         useremail: nextProps.useremail,
         mobile: nextProps.mobile,
         choice: nextProps.choice,
      });
  }

  render() {
    /*const  useremail = this.state.useremail
    const  mobile = this.state.mobile
    const  choice = this.state.choice
    const { useremail,mobile,choice,...rest } = this.props
    console.log("***************ChoiceSendTypeScreen renderuseremail",useremail)
    console.log("***************ChoiceSendTypeScreen rendermobile",mobile)
    console.log("***************ChoiceSendTypeScreen renderchoice",choice)*/
    console.log("***************ChoiceSendTypeScreen render this.props",this.props)

    return (
     <ChoiceSendType
      useremail={this.props.useremail}
      mobile={this.props.mobile}
      choice={this.props.choice}
     />
    );
  }
}

ChoiceSendTypeScreen.defaultProps = {
   useremail: null,
   mobile: null,
   choice:"useremail"
}

ChoiceSendTypeScreen.ProType = {
  useremail: PropTypes.object,
  mobile: PropTypes.object,
  choice: PropTypes.object,
}

function initMapStateToProps(State){
  return {


  }
}

function InitDispachTOProps(state){
    return {}
}

export default connect(initMapStateToProps,InitDispachTOProps)(ChoiceSendTypeScreen);