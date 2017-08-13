import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import Course from '../../components/Courses/Courses';

class CourseContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Course navigation={this.props.navigation} />
    );
  }
}

export default CourseContainer;