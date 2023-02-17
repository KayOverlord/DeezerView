import React from 'react';
import {SafeAreaView, Alert} from 'react-native';
import {Button, Title, Wrapper} from '../styles/StyledComponents';

const SplashScreen = () => {
  const getArtists = async () => {
    const api_url = 'https://192.168.0.120:3000/Search';
    try {
      const apiResponse = await fetch(api_url);
      const jsonResponse = await apiResponse.json();
      console.log('CHECK: ', jsonResponse);
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };
  return (
    <SafeAreaView>
      <Wrapper>
        <Title>Hello World</Title>
        <Button title="Hello World" onPress={getArtists}></Button>
      </Wrapper>
    </SafeAreaView>
  );
};

export default SplashScreen;
