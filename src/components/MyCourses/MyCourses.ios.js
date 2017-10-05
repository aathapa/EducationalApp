import React, { Component } from 'react';
import {
  View,
  Text,
  SegmentedControlIOS
} from 'react-native';
import Current from './Current';
import Ongoing from './Ongoing';
import Completed from './Completed';
import NavBar from '../NavBar/Navbar'

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
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <NavBar
          title="My Courses"
          openDrawer={() => navigate('DrawerOpen')}
        />
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