import React, { Component } from 'react';
import {
  View,
  Text,
  SegmentedControlIOS
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
      selectedTab: 'Current'
    };
  }
  
  renderSegmentContent() {
    switch (this.state.selectedTab){
      case 'Current':
        return (
          <Current />
        );  
      case 'Outgoing':
        return (
          <Ongoing />
        ); 
      case 'Completed':
        return (
          <Completed />
        ); 
    }
  }

  render() {
    return (
      <View style={{flex: 1,backgroundColor: '#fff'}}>
        <View style={{marginHorizontal: 16,marginTop: 10,flex :1}}>
          <SegmentedControlIOS
            values={["Current", "Outgoing", "Completed"]}
            selectedIndex={this.state.selectedIndex}
            onValueChange={(val)=> this.setState({ selectedTab: val})}
          />
        </View>
        <View style={{flex: 8}}>
          {this.renderSegmentContent()}
        </View>
      </View>
    );
  }
}

export default MyCourse;