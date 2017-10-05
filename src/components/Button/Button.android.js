import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';

class ButtonPlatform extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableNativeFeedback
        onPress={this.props.onPress}
        background={TouchableNativeFeedback.SelectableBackground()}
        style={this.props.style}
      >
        {this.props.children}
      </TouchableNativeFeedback>
    );
  }

}

export default ButtonPlatform;