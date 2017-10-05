import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ListView
} from 'react-native';
import Video from 'react-native-video';
import Data from '../../Data/PopularData';
import StarRating from 'react-native-star-rating';
import { Colors, Images } from '../../common';
import Card from '../Cards/CardTwo';

const { height, width } = Dimensions.get('window');

class VideoCourses extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    this.state = {
      rate: 1,
      paused: false,
      volume: 1,
      muted: false,
      duration: 0.0,
      currentTime: 0.0,
      rating: 3,
      dataSource: ds.cloneWithRows(Data),
    }
  }

  renderNextVideoCourses(data) {
    return (
      <View style={{flex: 1,width: 200}}>
        <Card
          item={data}
        />
      </View>
      
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{  height: 200,marginTop: 10 }}>
          <Video
            source={require('../../video/video.mp4')}
            rate={this.state.rate}
            volume={this.state.volume}
            muted={this.state.muted}
            resizeMode="cover"
            style={styles.video}
            paused={this.state.paused}
          />

        </View>
        <View style={{ flex: 1, marginTop: 20, }}>
          <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 15  }}>
            <View style={{ flex: 1 }}>
              <Image
                source={Images.design1}
                style={{ height: 40, width: 40, borderRadius: 20 }}
              />
            </View>
            <View style={{ flex: 4, }}>
              <View>
                <Text style={{ color: Colors.main, fontWeight: 'bold' }}> Mark Wright</Text>
              </View>
              <View style={{ marginLeft: 4 }}>
                <Text style={{ color: Colors.text }}>mentor</Text>
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
                <Text style={{ color: Colors.text, fontSize: 13 }}>5 comments</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ flex: 3, }}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(data) => this.renderNextVideoCourses(data)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  video: {
    height: 200,
    width: width
  },
});


export default VideoCourses