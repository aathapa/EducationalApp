import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { Colors } from '../../common';

const Rating = (props) => {
  return (
    <View style={styles.ratingContainer}>
      <Text style={styles.ratingText}>{props.rating}</Text>
    </View>
  );
}

const styles = {
  ratingContainer: {
    height: 25,
    width: 45,
    borderRadius: 15,
    backgroundColor: Colors.main,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ratingText: {
    color: '#fff',
    fontSize: 16
  }
}

export default Rating;