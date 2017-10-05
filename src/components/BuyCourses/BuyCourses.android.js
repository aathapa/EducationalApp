import React, { Component } from 'react';
import {
  View,
  Text,
  SegmentedControlIOS,
  StyleSheet
} from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';

import VideoCourses from '../Video/VideoCourses';
import { Colors } from '../../common';
import Video from 'react-native-video';
import NavBar from '../NavBar/Navbar';

class BuyCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: "1", title: "Video" },
        { key: "2", title: "Articles" },
        { key: "3", title: "Hometask" },
      ]
    }
  }

  renderHeader = (props) =>
    <TabBar
      {...props}
      style={styles.tabColor}
    />


  renderScene = ({ route }) => {
    switch (route.key) {
      case '1':
        return (
          <VideoCourses />
        )
      case '2':
        return (
          <Text>Articles</Text>
        )
      case '3':
        return (
          <Text>Hometask</Text>
        )
    }
  }

  render() {
    const { state, goBack } = this.props.navigation;
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <NavBar
          title={state.params.title}
          type="backPage"
          back={() => goBack()}
          style={{ elevation: 0 }}
        />
        <TabViewAnimated
          navigationState={this.state}
          renderScene={this.renderScene}
          renderHeader={this.renderHeader}
          onIndexChange={(index) => this.setState({ index })}
        />


      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabColor: {
    backgroundColor: Colors.main
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