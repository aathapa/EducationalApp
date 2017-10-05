import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import Profile from '../../components/Profile/Profile';

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Profile navigation={this.props.navigation}/>
    );
  }
}

export default ProfileContainer;