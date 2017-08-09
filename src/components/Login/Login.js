import React, { Component } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import { Colors,Images } from '../../common';

class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{flex: 1,backgroundColor: Colors.main}} >
        <View>
          <Image
          />
        </View>
      </View>
    );
  }
}

export default Login;