import {
  StackNavigator,
  DrawerNavigator
} from 'react-navigation';
import {
  courses,
  myCourses,
  messages,
  profile
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
  }
},
  {
  headerMode: 'none'
}  
)

export default AppRouter;