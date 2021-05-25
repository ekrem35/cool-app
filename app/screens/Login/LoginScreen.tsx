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
import styles from './styles';
const LogoWhite = require('../../images/logo-white.png');

const Login = () => {
  const [isValid, setIsValid] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (username.length < 3 || password.length < 4) {
      isValid === true && setIsValid(false);
    } else {
      isValid === false && setIsValid(true);
    }
  }, [username, password, isValid]);

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
