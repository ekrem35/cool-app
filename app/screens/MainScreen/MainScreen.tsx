import React, {useState, useEffect} from 'react';
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
  DeckSwiper,
  Card,
  CardItem,
  Left,
  Thumbnail,
  Spinner,
} from 'native-base';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {logout} from '../../state/actions/user';
import {Actions} from 'react-native-router-flux';
import request from '../../helpers/request';

const MainScreen = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    request.get({url: 'https://reqres.in/api/users'}).then(response => {
      setUsers(response.data);
    });
  }, []);

  const onPressLogout = () => {
    dispatch(logout());
    Actions.replace('login');
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
      <Content contentContainerStyle={styles.contentStyle}>
        {users.length ? (
          <DeckSwiper
            dataSource={users}
            renderItem={(item: {
              avatar: string;
              first_name: string;
              last_name: string;
              email: string;
            }) => (
              <Card style={styles.cardStyle}>
                <CardItem>
                  <Left>
                    <Thumbnail source={{uri: item.avatar}} />
                    <Body>
                      <Text>{item.first_name}</Text>
                      <Text note>{item.last_name}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem>
                  <Text>{item.email}</Text>
                </CardItem>
              </Card>
            )}
          />
        ) : (
          <Spinner color="#ee205f" />
        )}
      </Content>
    </Container>
  );
};

export default MainScreen;
