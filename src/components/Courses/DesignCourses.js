import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';
import CardTwo from '../Cards/CardTwo';

class PopularCourses extends Component {
  constructor(props) {
    super(props);
  }

  renderCard(item, index) {
    return (
      <CardTwo item={item} />
    )

  }

  render() {
    const { data } = this.props;
    return (
      <View>
        <FlatList
          data={data}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({ item, index }) => this.renderCard(item, index)}
          keyExtractor={(item, index) => index}
        />
      </View>

    );
  }
}



export default PopularCourses;