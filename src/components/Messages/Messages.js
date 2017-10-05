import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import NavBar from '../NavBar/Navbar';

class Messages extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <NavBar
          title="Messages"
          openDrawer={() => navigate('DrawerOpen')}
        />
        <Text>Messages</Text>
      </View>
    );
  }
}

export default Messages;