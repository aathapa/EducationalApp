import { Platform } from 'react-native';

export default icons = {
  ...Platform.select({
    android: {
      course: 'md-home',
      mycourses: 'logo-youtube',
      messages: 'md-mail',
      profile: 'md-person'
    },
    ios: {
      course: 'ios-home',
      mycourses: 'logo-youtube',
      messages: 'ios-mail',
      profile: 'ios-person'
    }
  })
}