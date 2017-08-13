import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import MyCourse from '../../components/MyCourses/MyCourses';

class MyCourseContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <MyCourse navigation={this.props.navigation} />
    );
  }
}

export default MyCourseContainer;