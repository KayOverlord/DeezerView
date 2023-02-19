import React from 'react';
import {SafeAreaView, StyleSheet, useColorScheme} from 'react-native';
import {Title, Wrapper} from '../styles/StyledComponents';

const ArtistScreen = ({route, navigation}: any) => {
  const {artist} = route.params;
  return (
    <SafeAreaView>
      <Wrapper>
        <Title>Hello World!</Title>
      </Wrapper>
    </SafeAreaView>
  );
};

export default ArtistScreen;
