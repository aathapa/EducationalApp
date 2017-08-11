import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import PopularData from '../../Data/PopularData';
import Designdata from '../../Data/DesignData';

import PopularCourses from './PopularCourses';
import DesignCourses from './DesignCourses';
import CardContentInfo from '../CardContentInfo/CardContentInfo';

class Course extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <ScrollView>
          <View>
            <CardContentInfo category="Popular" />
            <View style={{ marginTop: 10 }} >
              <PopularCourses
                data={PopularData}
              />
            </View>
          </View>
          <View>
            <CardContentInfo category="Design" />
            <View style={{ marginTop: 10 }}>
              <DesignCourses data={Designdata} />
            </View>
          </View>
          <View >
            <CardContentInfo category="Marketing" />
            <View style={{ marginTop: 10 }}>
              <DesignCourses data={Designdata} />
            </View>
          </View>
        </ScrollView>
        
      </View>
    );
  }
}

export default Course;