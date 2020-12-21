import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Screens
import Home from '../screens/home';

import UploadDeDocumentos from '../screens/UploadDeDocumentos';
import SubmeterMaisDocumentos from '../screens/SubmeterMaisDocumentos';
import VerDocumentos from '../screens/VerDocumentos';

const Stack = createStackNavigator();

function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SubmeterMaisDocumentos"
          component={SubmeterMaisDocumentos}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UploadDeDocumentos"
          component={UploadDeDocumentos}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VerDocumentos"
          component={VerDocumentos}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;
