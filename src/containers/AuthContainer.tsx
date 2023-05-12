import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

import {useQuery, useRealm} from '../database';
import {
  loginUserRequest,
  signUpRequestAction,
} from '../redux/actions/UserAction';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {AuthScreen} from '../screens';
import {AuthScreenNavigationProps} from '../types/navigation';

export interface IAuthContainerProps {}

function AuthContainer(props: IAuthContainerProps) {
  const realm = useRealm();
  const users = useQuery('User');

  const {navigate} = useNavigation<AuthScreenNavigationProps>();

  const dispatch = useAppDispatch();
  const {user, isLoading} = useAppSelector(state => state?.users);

  useEffect(() => {
    if (user?.success) {
      navigate('Main');
    }
  }, [user]);

  function register(data: {name: string; email: string; password: string}) {
    dispatch(
      signUpRequestAction({
        realm,
        users,
        data,
      }),
    );
  }

  function login(data: {email: string; password: string}) {
    dispatch(
      loginUserRequest({
        users,
        data,
      }),
    );
  }

  return <AuthScreen login={login} register={register} isLoading={isLoading} />;
}

export default AuthContainer;
