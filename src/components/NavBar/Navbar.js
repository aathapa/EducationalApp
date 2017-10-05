import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import styles from './NavBarStyles';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { Colors, Icons } from '../../common';
import ButtonPlatform from '../Button/Button';

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  renderLeftIcon(type,back,openDrawer) {
    switch (type) {
      case 'backPage':
        return (
          <ButtonPlatform onPress={back}>
            <View style={styles.menu}>
              <IonIcons name={Icons.back} size={25} color="#fff" />
            </View>
          </ButtonPlatform>

        );
      default:
        return (
          <ButtonPlatform onPress={openDrawer}>
            <View style={styles.menu}>
              <IonIcons name={Icons.menu} size={25} color="#fff" />
            </View>
          </ButtonPlatform>

        );
    }
  }

  render() {
    const { type, title, rightComponent,back,openDrawer } = this.props
    if (Platform.OS == 'android') {
      return (
        <View style={[styles.navbarContainer, this.props.style]}>
          <View style={styles.navbarComponent}>
            {this.renderLeftIcon(type,back,openDrawer)}
            <View style={styles.pageName}>
              <Text style={styles.pageNameText}>{title}</Text>
            </View>
            <View style={{ flex: 1 }}>
              {rightComponent}
            </View>

          </View>

        </View>
      );
    }
    else {
      return (<View />)
    }

  }
}

export default NavBar;