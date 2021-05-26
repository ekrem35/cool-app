import {useEffect} from 'react';
import {Actions} from 'react-native-router-flux';
import {useSelector} from 'react-redux';
import {ReduxState} from '../state/stateTypes';

const Auth = () => {
  const {user} = useSelector((state: ReduxState) => ({
    user: state.user,
  }));

  useEffect(() => {
    if (user.token) {
      Actions.mainScreen();
    } else {
      Actions.login();
    }
  });

  return null;
};

export default Auth;
