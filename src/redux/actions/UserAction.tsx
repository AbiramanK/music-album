import {createAction} from '@reduxjs/toolkit';

import {
  LOGIN_USER_REQUEST,
  SIGN_UP_USER_FAILED,
  SIGN_UP_USER_REQUEST,
  SIGN_UP_USER_SUCCESS,
  UPDATE_USER_NAME_REQUEST,
} from '../Constant';

export interface SignUpRequestInterface {
  realm: Realm;
  users: Realm.Results<Realm.Object>;
  data: {name: string; email: string; password: string};
}

export interface LoginRequestInterface {
  users: Realm.Results<Realm.Object>;
  data: {email: string; password: string};
}

export interface UpdateUserNameRequestInterface {
  realm: Realm;
  users: Realm.Results<Realm.Object>;
  data: {name: string; email: string};
}

const signUpRequestAction =
  createAction<SignUpRequestInterface>(SIGN_UP_USER_REQUEST);
const signUpSuccessAction = createAction(SIGN_UP_USER_SUCCESS);
const signUpFailedAction = createAction(SIGN_UP_USER_FAILED);

const loginUserRequest =
  createAction<LoginRequestInterface>(LOGIN_USER_REQUEST);

const updateUserNameRequestAction =
  createAction<UpdateUserNameRequestInterface>(UPDATE_USER_NAME_REQUEST);

export {
  signUpRequestAction,
  signUpSuccessAction,
  signUpFailedAction,
  loginUserRequest,
  updateUserNameRequestAction,
};
