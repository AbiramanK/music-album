import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParamsList = {
  Auth: undefined;
  ForgotPassword: undefined;
  UpdatePassword: {type: 'change' | 'reset'};
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

export type {
  RootStackParamsList,
  AuthScreenNavigationProps,
  ForgotPasswordScreenNavigationProps,
  UpdatePasswordScreenNavigationProps,
  UpdatePasswordScreenRouteProps,
};
