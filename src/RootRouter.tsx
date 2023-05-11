import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  AuthContainer,
  ForgotPasswordContainer,
  HomeContainer,
  UpdatePasswordContainer,
} from './containers';
import {RootStackParamsList} from './types/navigation';

const Stack = createNativeStackNavigator<RootStackParamsList>();

export interface IRootRouterProps {}

function RootRouter(props: IRootRouterProps) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen name="Auth" component={AuthContainer} />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordContainer}
        />
        <Stack.Screen
          name="UpdatePassword"
          component={UpdatePasswordContainer}
          initialParams={{
            type: 'change',
          }}
        />
        <Stack.Screen name="Home" component={HomeContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootRouter;
