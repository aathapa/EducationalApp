import React from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation';
import {
  loginContainer,
  signupContainer,
  profile,
  messages,
  myCourses,
  courses,
  trialCourses
} from './containers';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { Icons } from './common';

const Courses = StackNavigator({
  course: {
    screen: courses,
    navigationOptions: {
      title: 'Courses',
      headerStyle: {
        backgroundColor: '#fff'
      }
      
    }
  }
})

const MyCourses = StackNavigator({
  myCourses: {
    screen: myCourses,
    navigationOptions: {
      title: 'My Courses',
      headerStyle: {
        backgroundColor: '#fff'
      }
    }
  }
})
const Profile = StackNavigator({
  profile: {
    screen: profile,
    navigationOptions: {
      title: 'Profile',
      headerStyle: {
        backgroundColor: '#fff'
      }
    }
  }
})
const Messages = StackNavigator({
  messages: {
    screen: messages,
    navigationOptions: {
      title: 'Messages',
      headerStyle: {
        backgroundColor: '#fff'
      }
    }
  }
})

const Tabs = TabNavigator({
  Courses: {
    screen: Courses,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <IonIcons name={Icons.course} size={25} color={tintColor} />
    }
  },
  Mycourses: {
    screen: MyCourses,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <IonIcons name={Icons.mycourses} size={20} color={tintColor} />
    }
  },
  Messages: {
    screen: Messages,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <IonIcons name={Icons.messages} size={25} color={tintColor} />
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <IonIcons name={Icons.profile} size={25} color={tintColor} />
    }
  }
})

const TrailCourse = StackNavigator({
  TrailCourse: {
    screen: trialCourses,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#fff'
      }
    }
  }
})

const AppRouter = StackNavigator({
  Tabs: {
    screen: Tabs
  },
  TrialCourses: {
    screen: TrailCourse
  }
},
  {
  headerMode: 'none'
})
export default AppRouter;