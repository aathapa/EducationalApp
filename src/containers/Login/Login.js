import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import Login from '../../components/Login/Login';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Login />
    );
  }
}

export default LoginContainer;