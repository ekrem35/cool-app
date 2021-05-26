import React, {useEffect, useState} from 'react';
import {Image} from 'react-native';
import {
  Container,
  Content,
  Input,
  Label,
  Item,
  Button,
  Text,
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
const LogoWhite = require('../../images/logo-white.png');
import request from '../../helpers/request';
import styles from './styles';
import {ReduxState} from '../../state/stateTypes';
import {useSelector, useDispatch} from 'react-redux';
import {saveUser} from '../../state/actions/user';
import {Actions} from 'react-native-router-flux';

const Login = () => {
  const {mail} = useSelector((state: ReduxState) => ({
    mail: state.user.mail,
  }));

  const dispatch = useDispatch();

  const [isValid, setIsValid] = useState(false);
  const [username, setUsername] = useState(mail);
  const [password, setPassword] = useState('cityslicka');

  useEffect(() => {
    if (username.length < 3 || password.length < 4) {
      isValid === true && setIsValid(false);
    } else {
      isValid === false && setIsValid(true);
    }
  }, [username, password, isValid]);

  const onPressSignIn = async () => {
    try {
      const response = await request.post({
        url: 'https://reqres.in/api/login',
        body: {
          email: username,
          password: password,
        },
      });
      if (response.token) {
        dispatch(saveUser({mail: username, token: response.token}));
        Actions.mainScreen();
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Container>
      <LinearGradient
        colors={['#f0645d', '#ee205f']}
        end={{x: 1, y: 0}}
        start={{x: 0, y: 0}}
        style={styles.linearGradientBackground}>
        <Content contentContainerStyle={styles.content}>
          <Image style={styles.logo} source={LogoWhite} />
          <Item style={styles.userNameItem} floatingLabel>
            <Label style={styles.inputTitle}>Username</Label>
            <Input
              value={username}
              onChangeText={uname => setUsername(uname)}
              style={styles.input}
            />
          </Item>
          <Item style={styles.passwordItem} floatingLabel>
            <Label style={styles.inputTitle}>Password</Label>
            <Input
              value={password}
              onChangeText={pass => setPassword(pass)}
              secureTextEntry
              style={styles.input}
            />
          </Item>
          <Button
            onPress={onPressSignIn}
            disabled={!isValid}
            transparent
            style={[styles.signInButton, isValid ? {} : styles.disabledButton]}
            bordered
            full>
            <Text
              style={[
                styles.buttonText,
                isValid ? {} : styles.disabledButtonText,
              ]}>
              Sign in
            </Text>
          </Button>
        </Content>
      </LinearGradient>
    </Container>
  );
};

export default Login;
