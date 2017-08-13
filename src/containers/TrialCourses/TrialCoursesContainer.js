import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import TrialCourses from '../../components/TrialCourses/TrialCourses';

class TrialCoursesContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TrialCourses />
    );
  }
}

export default TrialCoursesContainer;