import React from 'react';
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
            <Input style={styles.input} />
          </Item>
          <Item style={styles.passwordItem} floatingLabel>
            <Label style={styles.inputTitle}>Password</Label>
            <Input style={styles.input} />
          </Item>
          <Button transparent style={styles.signInButton} bordered full>
            <Text style={styles.buttonText}>Sign in</Text>
          </Button>
        </Content>
      </LinearGradient>
    </Container>
  );
};

export default Login;
