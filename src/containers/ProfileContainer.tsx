import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';

import {useQuery, useRealm} from '../database';
import {
  updateUserNameRequestAction,
  updateUserRequestAction,
} from '../redux/actions/UserAction';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {ProfileScreen} from '../screens';

export interface IProfileContainerProps {}

function ProfileContainer(props: IProfileContainerProps) {
  const realm = useRealm();
  const users = useQuery('User');

  const {user, isLoading, updateNameReponse} = useAppSelector(
    state => state.users,
  );
  const dispatch = useAppDispatch();

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [updatedName, setUpdatedName] = useState<string>('');

  useEffect(() => {
    if (
      updateNameReponse! &&
      updateNameReponse?.success &&
      updateNameReponse?.data?.name?.trim() === updatedName?.trim()
    ) {
      dispatch(
        updateUserRequestAction({
          name: updateNameReponse?.data?.name,
          password: user?.data?.password,
        }),
      );
      setIsEdit(false);
    }

    if (
      updateNameReponse! &&
      !updateNameReponse?.success &&
      updateNameReponse! &&
      !updateNameReponse?.data
    ) {
      Alert.alert(updateNameReponse?.message!);
    }
  }, [updateNameReponse]);

  function updateUserName(data: {name: string; email: string}) {
    setUpdatedName(data?.name);
    dispatch(updateUserNameRequestAction({realm, users, data}));
  }

  function updateIsEdit(edit: boolean) {
    setIsEdit(edit);
  }

  return (
    <ProfileScreen
      name={user?.data?.name!}
      email={user?.data?.email!}
      isLoading={isLoading}
      updateUserName={updateUserName}
      isEdit={isEdit}
      updateIsEdit={updateIsEdit}
    />
  );
}

export default ProfileContainer;
