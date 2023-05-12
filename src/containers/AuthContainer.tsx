import React, {useEffect} from 'react';
import {CommonActions, useNavigation} from '@react-navigation/native';

import {useQuery, useRealm} from '../database';
import {
  loginUserRequest,
  signUpRequestAction,
} from '../redux/actions/UserAction';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {AuthScreen} from '../screens';
import {AuthScreenNavigationProps} from '../types/navigation';
import {Alert} from 'react-native';

export interface IAuthContainerProps {}

function AuthContainer(props: IAuthContainerProps) {
  const realm = useRealm();
  const users = useQuery('User');

  const {dispatch} = useNavigation<AuthScreenNavigationProps>();

  const dispatchAction = useAppDispatch();
  const {user, isLoading} = useAppSelector(state => state?.users);

  useEffect(() => {
    if (user?.success) {
      dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Main'}],
        }),
      );
    }

    if (user! && !user?.success!) {
      Alert.alert(user?.message!);
    }
  }, [user]);

  function register(data: {name: string; email: string; password: string}) {
    dispatchAction(
      signUpRequestAction({
        realm,
        users,
        data,
      }),
    );
  }

  function login(data: {email: string; password: string}) {
    dispatchAction(
      loginUserRequest({
        users,
        data,
      }),
    );
  }

  return <AuthScreen login={login} register={register} isLoading={isLoading} />;
}

export default AuthContainer;
