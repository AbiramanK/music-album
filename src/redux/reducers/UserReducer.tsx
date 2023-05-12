import {createReducer} from '@reduxjs/toolkit';
import {
  createUser,
  loginUser,
  updateUserName,
  updateUserPassword,
} from '../../database/dao/UserDao';

import {
  loginUserRequest,
  logoutRequestAction,
  signUpFailedAction,
  signUpRequestAction,
  signUpSuccessAction,
  updatePasswordRequestAction,
  updateUserNameRequestAction,
  updateUserRequestAction,
} from '../actions/UserAction';

export interface SignUpResponseInterface {
  success: boolean;
  message?: string;
  data: {name: string; email: string; password: string};
}

export interface UserReducerInititalStateInterface {
  user: SignUpResponseInterface | undefined;
  isLoading: boolean;
  updateNameReponse: SignUpResponseInterface | undefined;
  updatePasswordResponse: SignUpResponseInterface | undefined;
}

const initialState: UserReducerInititalStateInterface = {
  user: undefined,
  isLoading: false,
  updateNameReponse: undefined,
  updatePasswordResponse: undefined,
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
    .addCase(updateUserNameRequestAction, (state, action) => {
      state.isLoading = true;

      const {realm, users, data} = action?.payload;
      const result = updateUserName(realm, users, data);

      state.updateNameReponse = result;

      state.isLoading = false;
    })
    .addCase(updatePasswordRequestAction, (state, action) => {
      state.isLoading = true;

      const {realm, users, data} = action?.payload;
      const result = updateUserPassword(realm, users, data);

      state.updatePasswordResponse = result;

      state.isLoading = false;
    })
    .addCase(updateUserRequestAction, (state, action) => {
      state.user = {
        success: state?.user?.success!,
        message: state?.user?.message!,
        data: {
          name: action?.payload?.name!,
          password: action?.payload?.password!,
          email: state?.user?.data?.email!,
        },
      };
    })
    .addCase(logoutRequestAction, (state, action) => {
      state = Object.assign(state, initialState);
    });
});

export default UserReducer;
