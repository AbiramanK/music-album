import {createAction} from '@reduxjs/toolkit';

import {
  LOGIN_USER_REQUEST,
  LOGOUT_REQUEST,
  SIGN_UP_USER_FAILED,
  SIGN_UP_USER_REQUEST,
  SIGN_UP_USER_SUCCESS,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_USER_NAME_REQUEST,
  UPDATE_USER_REQUEST,
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

export interface UpdatePasswordRequestInterface {
  realm: Realm;
  users: Realm.Results<Realm.Object>;
  data: {oldPassword?: string; password?: string; email: string};
}

export interface UpdateUserRequestInterface {
  name?: string;
  password?: string;
}

const signUpRequestAction =
  createAction<SignUpRequestInterface>(SIGN_UP_USER_REQUEST);
const signUpSuccessAction = createAction(SIGN_UP_USER_SUCCESS);
const signUpFailedAction = createAction(SIGN_UP_USER_FAILED);

const loginUserRequest =
  createAction<LoginRequestInterface>(LOGIN_USER_REQUEST);

const updateUserNameRequestAction =
  createAction<UpdateUserNameRequestInterface>(UPDATE_USER_NAME_REQUEST);

const updatePasswordRequestAction =
  createAction<UpdatePasswordRequestInterface>(UPDATE_PASSWORD_REQUEST);

const updateUserRequestAction =
  createAction<UpdateUserRequestInterface>(UPDATE_USER_REQUEST);

const logoutRequestAction = createAction(LOGOUT_REQUEST);

export {
  signUpRequestAction,
  signUpSuccessAction,
  signUpFailedAction,
  loginUserRequest,
  updateUserNameRequestAction,
  updatePasswordRequestAction,
  updateUserRequestAction,
  logoutRequestAction,
};
