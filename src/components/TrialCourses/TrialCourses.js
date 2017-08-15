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
import { Colors,Icons } from '../../common';
import * as Progress from 'react-native-progress';

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
        <View style={{backgroundColor: 'transparent',flex: 0.4}}> 
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
        <View style={{ marginHorizontal: 15,flex: 0.1,justifyContent: 'flex-end',marginTop: 15,}}>
          <View style={{flex: 1,flexDirection: 'row',}}>
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
                <Text style={{ color: Colors.text}}>mentor</Text>
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
                <Text style={{ color: Colors.text,fontSize: 13}}>5 comments</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: 15, flex: 0.2,justifyContent: 'flex-end'}}>
          <View>
            <Text style={{fontWeight: 'bold',fontSize: 18}}>UI Design theory.Wireframe</Text>
          </View>
          <View style={{marginTop: 5}}>
            <Text style={{fontSize: 12,}} >This course will provide a complete knowledge in UX designing, roles of designers and how can we dig into UX field</Text>
          </View>
        </View>
        <View style={{ marginHorizontal: 15,flex: 0.1 ,}}> 
          <View style={{ flex: 1, flexDirection: 'row',}}>
            <View style={{ flex: 1, justifyContent: 'flex-end'}}>
              <Text>Students</Text>
            </View>
            <View style={{ flex: 3, justifyContent: 'flex-end',marginBottom: 5}}>
              <Progress.Bar
                width={220}  
                borderWidth={0}
                unfilledColor= {Colors.neutral}
                progress={(state.params.currentStudent / state.params.totalStudent)}
              />
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end'}}>
              <Text style={{color: Colors.text,fontSize: 12}}><Text style={{color: Colors.main,fontWeight: '600',fontSize: 14}}>{state.params.currentStudent}</Text> of {state.params.totalStudent}</Text>
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: 15, flex: 0.1,justifyContent: 'flex-end'}}>
          <View style={{ flex: 1, flexDirection: 'row', }}>
            <View style={{ flex: 1, justifyContent: 'flex-end'}}>
              <Text style={{color: Colors.text,fontSize: 13}}><Text style={{color: '#000',fontSize: 14}}>Duration: </Text><Text>3 months</Text></Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end'}}>
              <Text style={{color: Colors.text,fontSize: 13}}><Text style={{ color: '#000',fontSize: 14}}>Start: </Text> <Text>5 January 2017</Text></Text>
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: 15, justifyContent: 'center', flex: 0.3}}>
          <TouchableOpacity style={{ flex: 0.3,backgroundColor: Colors.main, height: 50, borderRadius: 30, flexDirection: 'row' }}>
            <View style={{ flex: 3,justifyContent: 'center',alignItems: 'flex-end',}}>
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>BUY THIS COURSE FOR <Text>{state.params.price}$</Text></Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center',alignItems: 'center'}}>
              <IonIcons
                name={Icons.forward}
                size={25}
                color="#fff"
                style={{ marginLeft: 40 }}
              />
            </View>
            
          </TouchableOpacity>
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