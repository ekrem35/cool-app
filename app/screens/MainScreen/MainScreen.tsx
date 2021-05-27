import React from 'react';
import {TouchableOpacity} from 'react-native';
import {
  Body,
  Container,
  Content,
  Text,
  Header,
  Title,
  Icon,
  Right,
} from 'native-base';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {logout} from '../../state/actions/user';
import {Actions} from 'react-native-router-flux';

const MainScreen = () => {
  const dispatch = useDispatch();
  const onPressLogout = () => {
    dispatch(logout());
    Actions.login();
  };

  return (
    <Container>
      <Header style={styles.header} androidStatusBarColor="#ee205f">
        <Body>
          <Title>Cool App</Title>
        </Body>
        <Right style={styles.headerRight}>
          <TouchableOpacity onPress={onPressLogout}>
            <Icon style={styles.logoutIcon} type="AntDesign" name="logout" />
          </TouchableOpacity>
        </Right>
      </Header>
      <Content>
        <Text>main screen</Text>
      </Content>
    </Container>
  );
};

export default MainScreen;
