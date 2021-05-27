/**
 *
 */

import React from 'react';
import {Root} from 'native-base';
import Router from './app/router';
import {Provider} from 'react-redux';
import store from './app/state/store';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <Root>
      <StatusBar translucent backgroundColor="transparent" />
      <Provider store={store}>
        <Router />
      </Provider>
    </Root>
  );
};

export default App;
