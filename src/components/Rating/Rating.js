import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { Colors } from '../../common';

const Rating = (props) => {
  return (
    <View style={{height: 10,width: 10,borderRadius: 3,backgroundColor: Colors.main}}>
      <Text>{props.rating}</Text>
    </View>
  );
}

export default Rating;