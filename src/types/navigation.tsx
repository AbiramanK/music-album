import {MaterialBottomTabNavigationProp} from '@react-navigation/material-bottom-tabs';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParamsList = {
  Auth: undefined;
  ForgotPassword: undefined;
  UpdatePassword: {type: 'change' | 'reset'};
  Home: undefined;
  Main: undefined;
};

type AuthScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamsList,
  'Auth'
>;

type ForgotPasswordScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamsList,
  'ForgotPassword'
>;

type UpdatePasswordScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamsList,
  'UpdatePassword'
>;
type UpdatePasswordScreenRouteProps = RouteProp<
  RootStackParamsList,
  'UpdatePassword'
>;

type MainScreenNavigationProps = RootMaterialBottomTabsParams;

type RootMaterialBottomTabsParams = {
  Home: undefined;
  Profile: undefined;
};

type ProfileScreenNavigationProps = MaterialBottomTabNavigationProp<
  RootMaterialBottomTabsParams,
  'Profile'
>;

export type {
  RootStackParamsList,
  AuthScreenNavigationProps,
  ForgotPasswordScreenNavigationProps,
  UpdatePasswordScreenNavigationProps,
  UpdatePasswordScreenRouteProps,
  MainScreenNavigationProps,
  RootMaterialBottomTabsParams,
  ProfileScreenNavigationProps,
};
