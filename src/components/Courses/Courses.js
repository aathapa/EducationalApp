import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList
} from 'react-native';
import PopularCourcesData from '../../Data';
import PopularCourses from './PopularCourses';

class Course extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <PopularCourses
          data ={PopularCourcesData}
        />
      </View>
    );
  }
}

export default Course;