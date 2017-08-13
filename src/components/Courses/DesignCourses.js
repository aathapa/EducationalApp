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

  renderCard(item, index, navigate) {
    return (
      <CardTwo item={item} navigate={navigate} />
    )

  }

  render() {
    const { data,navigate } = this.props;
    return (
      <View>
        <FlatList
          data={data}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({ item, index }) => this.renderCard(item, index, navigate)}
          keyExtractor={(item, index) => index}
        />
      </View>

    );
  }
}



export default PopularCourses;