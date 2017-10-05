import React, { Component } from 'react';
import {
  View,
  Text,
  Platform
} from 'react-native';
import * as Progress from 'react-native-progress'
import { Colors } from '../../common';
import { NavigationActions } from 'react-navigation';

export default class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      indeterminate: true
    }
  }

  componentDidMount() {
    this.renderProgress();
  }
  

  renderProgress() {
    let resetActions;
    if (Platform.OS === 'ios') {
      const resetActions = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Tabs' })
        ]
      })
      let progress = 0;
      this.setState({ progress });
      setTimeout(() => {
        this.setState({ indeterminate: false });
        const x = setInterval(() => {
          progress += Math.random() / 5;
          if (progress > 1) {
            progress = 1;
            clearInterval(x);
            this.setState({ progress });
            setTimeout(() => this.props.navigation.dispatch(resetActions), 150)
          }
          else {
            this.setState({ progress });
          }
        }, 200);
      }, 600);
    }
    else if(Platform.OS === 'android') {
      const resetActions = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Drawer' })
        ]
      })
      let progress = 0;
      this.setState({ progress });
      setTimeout(() => {
        this.setState({ indeterminate: false });
        const x = setInterval(() => {
          progress += Math.random() / 5;
          if (progress > 1) {
            progress = 1;
            clearInterval(x);
            this.setState({ progress });
            setTimeout(() => this.props.navigation.dispatch(resetActions), 150)
          }
          else {
            this.setState({ progress });
          }
        }, 200);
      }, 600);
    }

   
  }

  render() {
    return (
      <View style={{ flex: 1,backgroundColor: Colors.main,justifyContent: 'center',alignItems: 'center'}}>
        <Progress.Bar
          progress={this.state.progress}
          unfilledColor="#BDBDBD"
          color="#ecf0f1"
          borderWidth={0}
        />
      </View>
    );
  }
}