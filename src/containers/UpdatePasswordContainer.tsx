import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

import {useQuery, useRealm} from '../database';
import {
  updatePasswordRequestAction,
  updateUserRequestAction,
} from '../redux/actions/UserAction';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {UpdatePasswordScreen} from '../screens';
import {
  UpdatePasswordScreenNavigationProps,
  UpdatePasswordScreenRouteProps,
} from '../types/navigation';
import {Alert} from 'react-native';

export interface IUpdatePasswordContainerProps {}

function UpdatePasswordContainer(props: IUpdatePasswordContainerProps) {
  const {navigate, goBack} =
    useNavigation<UpdatePasswordScreenNavigationProps>();
  const {params} = useRoute<UpdatePasswordScreenRouteProps>();

  const realm = useRealm();
  const users = useQuery('User');

  const dispatch = useAppDispatch();
  const {user, isLoading, updatePasswordResponse} = useAppSelector(
    state => state.users,
  );

  const [newPassword, setNewPassword] = useState<string>('');
  const [isMount, setIsMount] = useState<boolean>(false);

  useEffect(() => {
    setIsMount(true);
  }, []);

  useEffect(() => {
    if (
      updatePasswordResponse! &&
      updatePasswordResponse?.data! &&
      updatePasswordResponse?.data?.password?.trim() === newPassword?.trim()
    ) {
      dispatch(
        updateUserRequestAction({
          name: user?.data?.name,
          password: updatePasswordResponse?.data?.password,
        }),
      );

      if (params?.type === 'change') {
        goBack();
      } else {
        navigate('Auth');
      }
    }

    if (
      isMount &&
      updatePasswordResponse! &&
      !updatePasswordResponse?.success &&
      !updatePasswordResponse?.data
    ) {
      Alert.alert(updatePasswordResponse?.message!);
    }
  }, [updatePasswordResponse]);

  function updatePassword(data: {oldPassword?: string; password: string}) {
    setNewPassword(data?.password);
    dispatch(
      updatePasswordRequestAction({
        realm,
        users,
        data: {...data, email: user?.data?.email!},
      }),
    );
  }

  return (
    <UpdatePasswordScreen
      type={params?.type}
      isLoading={isLoading}
      updatePassword={updatePassword}
    />
  );
}

export default UpdatePasswordContainer;
