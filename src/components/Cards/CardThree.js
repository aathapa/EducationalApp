import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import { Colors, Icons } from '../../common';
import Rating from '../Rating/Rating';
import IonIcons from 'react-native-vector-icons/Ionicons';
import * as Progress from 'react-native-progress'

class CardThree extends Component {
  constructor(props) {
    super(props);

  }

  renderDownload(current) {
    if (current) {
      return (
        <IonIcons name={Icons.download} size={24} color={Colors.secondaryText} />
      );
    }
  }

  renderCourseInfo(item) {
    if (this.props.current) {
      return (
        <View>
          <View>
            <Progress.Bar
              width={180}
              borderColor='rgba(0, 0, 0, 0)'
              unfilledColor='#ddd'
              progress={item.progress}
            />
          </View>
          <View>
            <View style={{ flex: 0.9, justifyContent: 'center', alignItems: 'flex-end', marginRight: 10, }}>
              <Text style={{ color: '#757575', fontSize: 12 }}>{(item.progress) * 100} %</Text>
            </View>
          </View>
        </View>

      );
    }
    else if (this.props.ongoing) {
      return (
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{flex: 1}}>
            <Text style={{ fontSize: 12, color: '#757575' }}><Text style={{fontSize: 14,fontWeight: 'bold',color: Colors.main}}>{item.daysLeft}</Text> days Left</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={{ fontSize: 12, color: '#757575' }}><Text style={{ fontSize: 14, fontWeight: 'bold', color: Colors.main }}>{item.currentStudent}/</Text><Text>{item.totalStudent} Students</Text></Text>
          </View>
        </View>
      );
    }
    else {
      return (
        <View>
          <Text style={{ color: '#757575',fontSize: 12 }}>{item.name}</Text>
        </View>
      );
    }
  }

  render() {
    const { item, current } = this.props;
    return (
      <View>
        <View style={styles.cardContainer}>
          <TouchableOpacity>
            <View style={styles.card}>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Image
                    source={item.image}
                    style={styles.image}
                  />
                </View>
                <View style={{ flex: 2 }}>
                  <View style={{ flex: 2, flexDirection: 'row' }}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                      <View style={[styles.type, { backgroundColor: item.typeColor }]}>
                        <Text style={{ fontSize: 7, color: '#fff' }}>{item.type.toUpperCase()}</Text>
                      </View>
                    </View>
                    <TouchableOpacity style={styles.download}>
                      {this.renderDownload(current)}
                    </TouchableOpacity>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
                  </View>
                  <View style={{ flex: 1, flexDirection: 'row', marginBottom: 20 }}>
                    <View style={{ flex: 5, justifyContent: 'center', }}>
                      {this.renderCourseInfo(item)}
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>

    );
  }
}

const styles = {
  cardContainer: {
    marginHorizontal: 16,
    marginTop: 5,
    paddingBottom: 20
  },
  card: {
    height: 100,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 1 },
    shadowOpacity: 0.2,
    borderColor: '#ddd',
    borderWidth: 1
  },
  type: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 20,
    width: 50,
    borderRadius: 10
  },
  download: {
    flex: 2,
    alignItems: 'flex-end',
    marginRight: 10,
    justifyContent: 'center'
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 5,
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
export default CardThree;