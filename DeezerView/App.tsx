import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
import ArtistScreen from './src/screens/ArtistScreen';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Artist"
          component={ArtistScreen}
          options={{headerShown: true, title: 'Artist Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
