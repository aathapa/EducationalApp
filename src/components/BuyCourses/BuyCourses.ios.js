import React, { Component } from 'react';
import {
  View,
  Text,
  SegmentedControlIOS,
  StyleSheet
} from 'react-native';
import VideoCourses from '../Video/VideoCourses';
import { Colors } from '../../common';
import Video from 'react-native-video';
import NavBar from '../NavBar/Navbar';

class BuyCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "Video"
    }
  }

  renderTab() {
    if (this.state.selectedTab === "Video") {
      return <VideoCourses />
    }
    else if (this.state.selectedTab ==="Articles"){
      return <Text>Articles</Text>
    }
    else{
      return <Text>Hometask</Text>
    }
  }
  render() {
    const { state, goBack } = this.props.navigation;
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <NavBar
          title = {state.params.title}
          type="backPage"
          back={() => goBack()}
        />
        <View style={{flex: 1}}>
          <View style={{marginTop: 15,marginHorizontal: 15,flex: 1}}>
            <SegmentedControlIOS
              values={["Video", "Articles", "Hometask"]}
              selectedIndex={0}
              onValueChange={(selectedTab) => this.setState({ selectedTab })}
            />
          </View>
          <View style={{flex: 8}}>
            {this.renderTab()}
          </View>
        </View>
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});


export default BuyCourses;