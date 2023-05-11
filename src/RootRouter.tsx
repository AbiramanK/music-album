import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthContainer} from './containers';

const Stack = createNativeStackNavigator();

export interface IRootRouterProps {}

function RootRouter(props: IRootRouterProps) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Auth" component={AuthContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootRouter;
