import React from 'react';
import {SafeAreaView, Alert} from 'react-native';
import {
  Button,
  ItalicText,
  Title,
  NormalText,
  Wrapper,
} from '../styles/StyledComponents';

const SplashScreen = ({navigation}: any) => {
  setTimeout(() => {
    navigation.navigate('Home');
  }, 3000);

  return (
    <SafeAreaView>
      <Wrapper>
        <ItalicText>Welcome To</ItalicText>
        <Title>DeezerView</Title>
        <NormalText>Keep track of artists on the Deezer platform</NormalText>
      </Wrapper>
    </SafeAreaView>
  );
};

export default SplashScreen;
