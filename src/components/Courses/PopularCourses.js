import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';
import CardOne from '../Cards/CardOne';

class PopularCourses extends Component {
  constructor(props) {
    super(props);
  }

  renderCard(item, index,navigate) {
    return (
      <CardOne
        item={item}
        navigate={navigate}
      />
    );
    
  }

  render() {
    const { data,navigate } = this.props;
    return (
      <View>
        <FlatList
          data={data}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({ item, index }) => this.renderCard(item, index,navigate)}
          keyExtractor={(item, index) => index}
          ItemSeparatorComponent={() => <View style={{ width: 5, backgroundColor: '#fff' }} />}
        />
      </View>
      
    );
  }
}



export default PopularCourses;