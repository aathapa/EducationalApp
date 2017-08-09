import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

const CardOne = (props) => {
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity>
        <View style={styles.card}>
          <Image
            source={props.item.image}
            style={styles.image}
          />
          <View style={{marginTop: 100}}>
            <Text style={{color: '#ddd'}}>{props.item.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  cardContainer: {
    marginHorizontal: 16,
    marginTop: 10,
  },
  card: {
    height: 150,
    width: 250,
    borderRadius: 4,
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
  image: {
    height: 150,
    width: 250,
    borderRadius: 4,
    position: 'absolute',
    opacity: 0.3
  }
}

export default CardOne;