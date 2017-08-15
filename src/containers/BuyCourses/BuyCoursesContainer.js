import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import BuyCourse from '../../components/BuyCourses/BuyCourses';

class BuyCoursesContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BuyCourse />
    );
  }
}

export default BuyCoursesContainer;