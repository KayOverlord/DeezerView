import React from 'react';
import {SafeAreaView, StyleSheet, useColorScheme} from 'react-native';
import {Title, Wrapper} from '../styles/StyledComponents';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Wrapper>
        <Title>Hello World!</Title>
      </Wrapper>
    </SafeAreaView>
  );
};

export default HomeScreen;
