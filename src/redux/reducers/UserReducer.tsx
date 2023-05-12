import {createReducer} from '@reduxjs/toolkit';
import {createUser, loginUser} from '../../database/dao/UserDao';

import {
  loginUserRequest,
  signUpFailedAction,
  signUpRequestAction,
  signUpSuccessAction,
} from '../actions/UserAction';

export interface SignUpResponseInterface {
  success: boolean;
  message?: string;
  data: {name: string; email: string; password: string};
}

export interface UserReducerInititalStateInterface {
  user: SignUpResponseInterface | undefined;
  isLoading: boolean;
}

const initialState: UserReducerInititalStateInterface = {
  user: undefined,
  isLoading: false,
};

const UserReducer = createReducer(initialState, builder => {
  builder
    .addCase(signUpRequestAction, (state, action) => {
      state.isLoading = true;

      const {realm, users, data} = action?.payload;
      const result = createUser(realm, users, data);
      state.user = result;

      state.isLoading = false;
    })
    .addCase(signUpSuccessAction, (state, action) => {
      state.user = action?.payload;
    })
    .addCase(signUpFailedAction, (state, action) => {
      state.user = undefined;
    })
    .addCase(loginUserRequest, (state, action) => {
      state.isLoading = true;

      const {users, data} = action?.payload;
      const result = loginUser(users, data);
      state.user = result;

      state.isLoading = false;
    })

    .addDefaultCase((state, action) => {
      state.user = undefined;
    });
});

export default UserReducer;
