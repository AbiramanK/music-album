import React, {useEffect, useState} from 'react';

import {useQuery, useRealm} from '../database';
import {updateUserNameRequestAction} from '../redux/actions/UserAction';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {ProfileScreen} from '../screens';

export interface IProfileContainerProps {}

function ProfileContainer(props: IProfileContainerProps) {
  const realm = useRealm();
  const users = useQuery('User');

  const {user, isLoading} = useAppSelector(state => state.users);
  const dispatch = useAppDispatch();

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [updatedName, setUpdatedName] = useState<string>('');

  useEffect(() => {
    if (user?.data?.name! === updatedName) {
      setIsEdit(false);
    }
  }, [user?.data?.name]);

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
