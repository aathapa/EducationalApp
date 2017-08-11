import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

const CardContentinfo = (props) => {
  return (
    <View style={{ marginLeft: 15, flex: 1, flexDirection: 'row', marginTop: 10 }}>
      <View style={{ flex: 1 }}>
        <Text style={{ color: '#bdc3c7', fontWeight: 'bold' }}>{props.category} Courses</Text>
      </View>
      <TouchableOpacity style={{ alignItems: 'flex-end', marginRight: 15, flex: 1 }}>
        <Text style={{ color: '#f39c12', fontWeight: 'bold' }}>See All</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CardContentinfo;