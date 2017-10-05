import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import NavBar from '../NavBar/Navbar';

class Profile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <NavBar
          title="Profile"
          openDrawer={() => navigate('DrawerOpen')}
        />
        <Text>Profile</Text>
      </View>
    );
  }
}

export default Profile;