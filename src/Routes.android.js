import {
  StackNavigator,
  DrawerNavigator
} from 'react-navigation';
import {
  courses,
  myCourses,
  messages,
  profile,
  trialCourses,
  buyCoursesContainer,
  welcomeScreen
} from './containers';  

const Drawer = DrawerNavigator({
  Courses: {
    screen: courses
  },
  MyCourses: {
    screen: myCourses
  },
  Messages: {
    screen: messages
  },
  Profile: {
    screen: profile
  }
})

const AppRouter = StackNavigator({
  
  Drawer: {
    screen: Drawer
  },
  TrialCourses: {
    screen: trialCourses
  },
  BuyCourses: {
    screen: buyCoursesContainer
  },
  Welcome: {
    screen: welcomeScreen
  },
},
  {
  headerMode: 'none'
}  
)

export default AppRouter;