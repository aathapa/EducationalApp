import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import SegmentedControlTab from 'react-native-segmented-control-tab';
import Current from './Current';
import Ongoing from './Ongoing';
import Completed from './Completed';

class MyCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }

  handleIndexChange = (index) => {
    this.setState({
      ...this.state,
      selectedIndex: index,
    });
  }

  renderSegmentContent() {
    switch (this.state.selectedIndex){
      case 0:
        return (
          <Current />
        );  
      case 1:
        return (
          <Ongoing />
        ); 
      case 2:
        return (
          <Completed />
        ); 
    }
  }

  render() {
    return (
      <View style={{flex: 1,backgroundColor: '#fff'}}>
        <View style={{marginHorizontal: 16,marginTop: 10}}>
          <SegmentedControlTab
            values={['Current', 'Ongoing', 'Completed']}
            selectedIndex={this.state.selectedIndex}
            onTabPress={this.handleIndexChange}
          />
        </View>
        <View>
          {this.renderSegmentContent()}
        </View>
      </View>
    );
  }
}

export default MyCourse;