import { Colors } from '../../common';

export default styles = {
  navbarContainer: {
    height: 56,
    backgroundColor: Colors.main,
    elevation: 3

  },
  navbarComponent: {
    flex: 1,
    flexDirection: 'row',
  },
  menu: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 15
  },
  pageName: {
    flex: 5,
    justifyContent: 'center'
  },
  pageNameText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '400'
  },
  SearchCloseOrNext: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 15
  },

}