/**
 *
 */

import React from 'react';
import {Root} from 'native-base';
import Router from './app/router';
import {Provider} from 'react-redux';
import store from './app/state/store';

const App = () => {
  return (
    <Root>
      <Provider store={store}>
        <Router />
      </Provider>
    </Root>
  );
};

export default App;
