import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  AuthContainer,
  ForgotPasswordContainer,
  UpdatePasswordContainer,
} from './containers';
import {RootStackParamsList} from './types/navigation';
import MainBottomTabs from './MaterialBottonTabsRouter';

const Stack = createNativeStackNavigator<RootStackParamsList>();

export interface IRootRouterProps {}

function RootRouter(props: IRootRouterProps) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Auth"
          component={AuthContainer}
          options={{headerShown: false}}
        />
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
        <Stack.Screen
          name="Main"
          component={MainBottomTabs}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootRouter;
