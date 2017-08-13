import { Platform } from 'react-native';

export default icons = {
  ...Platform.select({
    android: {
      course: 'md-home',
      mycourses: 'logo-youtube',
      messages: 'md-mail',
      profile: 'md-person',
      download: 'md-download'
    },
    ios: {
      course: 'ios-home',
      mycourses: 'logo-youtube',
      messages: 'ios-mail',
      profile: 'ios-person',
      download: 'ios-download-outline'
    }
  })
}