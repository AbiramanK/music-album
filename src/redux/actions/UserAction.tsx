import {createAction} from '@reduxjs/toolkit';

import {
  LOGIN_USER_REQUEST,
  SIGN_UP_USER_FAILED,
  SIGN_UP_USER_REQUEST,
  SIGN_UP_USER_SUCCESS,
} from '../Constant';

interface SignUpRequestInterface {
  realm: Realm;
  users: Realm.Results<Realm.Object>;
  data: {name: string; email: string; password: string};
}

interface LoginRequestInterface {
  users: Realm.Results<Realm.Object>;
  data: {email: string; password: string};
}

const signUpRequestAction =
  createAction<SignUpRequestInterface>(SIGN_UP_USER_REQUEST);
const signUpSuccessAction = createAction(SIGN_UP_USER_SUCCESS);
const signUpFailedAction = createAction(SIGN_UP_USER_FAILED);

const loginUserRequest =
  createAction<LoginRequestInterface>(LOGIN_USER_REQUEST);

export {
  signUpRequestAction,
  signUpSuccessAction,
  signUpFailedAction,
  loginUserRequest,
};
