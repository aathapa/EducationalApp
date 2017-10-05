import React, { Component } from 'react';
import {
  View,
  Text,
  Animated
} from 'react-native';
import { Colors } from '../../common';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import Current from './Current';
import Ongoing from './Ongoing';
import Completed from './Completed';
import NavBar from '../NavBar/Navbar';

const MAX_HEIGHT = 96;
const MIN_HEIGHT = 40;
const SCROLL_HEIGHT = 56;

class MyCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: "1", title: "Current" },
        { key: "2", title: "Ongoing" },
        { key: "3", title: "Completed" },
      ]
    };
    const scrollY = new Animated.Value(0);
    this.scrollY = scrollY;
  }

  renderHeader = (props) =>
    <TabBar
      {...props}
      style={styles.tabColor}
      tabStyle={{ height: 40 }}
    />


  renderScene = ({ route }) => {
    switch (route.key) {
      case '1':
        return (
          <Current scrollY={this.scrollY} />
        )
      case '2':
        return (
          <Ongoing />
        )
      case '3':
        return (
          <Completed />
        )
    }
  }

  render() {
    const { navigate } = this.props.navigation;

    const headerHeight = this.scrollY.interpolate({
      inputRange: [0, SCROLL_HEIGHT],
      outputRange: [56, 0],
      extrapolate: 'clamp',
    })
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <NavBar
          title="My Courses"
          openDrawer={() => navigate('DrawerOpen')}
          style={{ elevation: 0 }}
        />
        <View style={{ flex: 1 }}>
          <TabViewAnimated
            navigationState={this.state}
            renderScene={this.renderScene}
            renderHeader={this.renderHeader}
            onIndexChange={(index) => this.setState({ index })}
          />

        </View>
      </View>
    );
  }
}

const styles = {
  tabColor: {
    backgroundColor: Colors.main
  }
}

export default MyCourse;