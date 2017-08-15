import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons'
import StarRating from 'react-native-star-rating';
import { Colors } from '../../common';

const { height,width } = Dimensions.get('window')

class TrialCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 3
    }
  }

  render() {
    const { state } = this.props.navigation;
    return (
      <View style={{flex: 1,backgroundColor: '#fff'}}>
        <View style={{backgroundColor: 'transparent',flex: 1}}> 
          <Image
            source={state.params.image}
            style={{ width: width, height: 200, opacity: 0.3,position: 'absolute' }}
          />
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.freeTrial}>
              <IonIcons name="ios-play" size={30} color='#fff' />
              <Text style={{color: '#fff',fontWeight: 'bold',marginLeft: 5}}>Free Trial</Text>
            </View>
            
          </View>
        </View>
        <View style={{flex :1,marginHorizontal: 15}}>
          <View style={{flex: 1,flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Image
                source={state.params.image}
                style={{height: 40,width: 40,borderRadius: 20}}
              />
            </View>
            <View style={{ flex: 4, }}>
              <View>
                <Text style={{color: Colors.main, fontWeight: 'bold'}}> {state.params.name}</Text>
              </View>
              <View style={{marginLeft: 4}}>
                <Text style={{ color: '#757575'}}>mentor</Text>
              </View>
              
            </View>
            <View style={{ flex: 2 }}>
              <View>
                <StarRating
                  starSize={20}
                  rating={this.state.rating}
                  selectedStar={(rating) => this.setState({ rating })}
                  starColor={Colors.accent}
                />
              </View>
              <TouchableOpacity>
                <Text style={{ color: '#757575',fontSize: 13}}>5 comments</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{flex: 1}}>

        </View>
      </View>
    );
  }
}

const styles = {
  freeTrial: {
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.main,
    opacity: 0.8,
    height: 35,
    width: 130,
    flexDirection: 'row'
  },
}

export default TrialCourses;