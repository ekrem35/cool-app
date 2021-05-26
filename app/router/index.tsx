import React from 'react';
import {Router as RouterFlux, Stack, Scene} from 'react-native-router-flux';
import Screens from '../screens';

const Router = () => {
  return (
    <RouterFlux>
      <Stack hideNavBar hideTabBar key="root">
        <Scene key="login" component={Screens.Login} />
        <Scene key="mainScreen" component={Screens.MainScreen} />
      </Stack>
    </RouterFlux>
  );
};

export default Router;
