/** @providesModule Root */

'use strict'

import React, {
  Component
} from 'react';

import {
  NetInfo,
  Platform,
} from 'react-native';

import Actions from 'Actions';

import {
  Provider
} from 'react-redux';

import { getCurrentRouteName } from 'Utilities';

import AppNavigator from 'AppNavigator';

import store from './config/reduxConfig'

// import * as WeChat from 'react-native-wechat';

export default class Root extends Component {
  constructor(props) {
    super(props);
    // this.handleConnectivityChange = this.handleConnectivityChange.bind(this);
  }

  componentDidMount() {
    // global.reduxStore.dispatch(Actions.getPatientDetail('2bef26514b884b8aaaa7ecc156c24a5a'));

    store.dispatch(Actions.setScreenName('AppNavigator', 'Home'));
    global.navigate = this.navigator._navigation.navigate;
    // NetInfo.addEventListener('change', this.handleConnectivityChange
    // );
    // NetInfo.fetch().done(this.handleConnectivityChange);
    // WeChat.registerApp('');
  }

  // handleConnectivityChange(connectionInfo) {
  //   let netState = 'unknown';
  //   switch (connectionInfo) {
  //     case 'wifi':
  //     case 'WIFI':
  //     case 'BLUETOOTH':
  //     case 'DUMMY':
  //     case 'ETHERNET':
  //     case 'VPN':
  //     case 'WIMAX':
  //       netState = 'wifi';
  //       break;
  //     case 'cell':
  //     case 'MOBILE':
  //     case 'MOBILE_DUN':
  //     case 'MOBILE_HIPRI':
  //     case 'MOBILE_MMS':
  //     case 'MOBILE_SUPL':
  //       netState = 'mobile';
  //       break;
  //     case 'none':
  //     case 'NONE':
  //       netState = 'none';
  //       break;
  //     case 'unknown':
  //     case 'UNKNOWN':
  //       netState = 'unknown';
  //       break;
  //     default:
  //       netState = 'unknown';
  //       break;
  //   }
  //   global.reduxStore.dispatch(Actions.setNetInfo(netState));
  // }

  render() {
    return (
      <Provider store={store}>
        <AppNavigator
          ref={navigator => this.navigator = navigator}
          onNavigationStateChange={(prevState, currentState) => {
            const currentScreen = getCurrentRouteName(currentState);
            const prevScreen = getCurrentRouteName(prevState);
            store.dispatch(Actions.setScreenName('AppNavigator', currentScreen));
            switch (currentScreen) {
              default:
                break;
            }
          }} />
      </Provider>
    );
  }
}