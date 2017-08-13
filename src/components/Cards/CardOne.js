import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import Rating from '../Rating/Rating';

const CardOne = (props) => {
  return (
    <View>
      <View style={styles.cardContainer}>
        <TouchableOpacity onPress={()=> props.navigate('TrialCourses')}>
          <View style={styles.card}>
            <Image
              source={props.item.image}
              style={styles.image}
            />
            <View style={{ flex: 1, marginLeft: 15 }}>
              <View style={{ flex: 1, marginTop: 10, alignItems: 'flex-end', marginRight: 10 }}>
                <Rating rating={props.item.rating} />
              </View>
              <View style={{ flex: 2, justifyContent: 'flex-end' }}>
                <Text style={styles.titleText}>{props.item.title}</Text>
              </View>
              <View style={{ flex: 1, marginTop: 5 }}>
                <Text style={styles.priceText}>$ {props.item.price}</Text>
              </View>
            </View>

          </View>
        </TouchableOpacity>
      </View>
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
  },
  titleText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  priceText: {
    color: '#fff',
    fontWeight: 'bold'
  }
}

export default CardOne;