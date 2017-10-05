import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  Animated
} from 'react-native';
import CurrentData from '../../Data/CurrentData';
import CardThree from '../../components/Cards/CardThree';



class Current extends Component {
  constructor(props) {
    super(props);
  }

  renderItem(item, index) {
    return (
      <CardThree
        item={item}
        current
      />
    );
  }

  render() {
    return (
      <View>
        <FlatList
          data={CurrentData}
          renderItem={({ item, index }) => this.renderItem(item,index)}
          keyExtractor={(item, index) => index}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.props.scrollY } } }]
          )}
        />
      </View>
      
    );
  }
}

export default Current;