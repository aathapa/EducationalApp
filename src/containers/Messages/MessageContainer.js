import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import Message from '../../components/Messages/Messages';

class MessageContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <Message navigation={this.props.navigation} />
    );
  }
}

export default MessageContainer;