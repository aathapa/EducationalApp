import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class ButtonPlatform extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        {this.props.children}
      </TouchableOpacity>
    );
  }
}
export default ButtonPlatform;