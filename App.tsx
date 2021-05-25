/**
 *
 */

import React from 'react';
import {
  Root,
  Container,
  Content,
  Header,
  Title,
  Left,
  Body,
  Text,
} from 'native-base';

const App = () => {
  return (
    <Root>
      <Container>
        <Header>
          <Left>
            <Title>BeCool</Title>
          </Left>
          <Body />
        </Header>
        <Text>UI Components</Text>
        <Content />
      </Container>
    </Root>
  );
};

export default App;
