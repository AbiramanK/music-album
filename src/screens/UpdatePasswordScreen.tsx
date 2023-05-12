import React, {useRef, useState} from 'react';
import {Alert, View} from 'react-native';
import {Button, Icon, Input, InputProps} from '@rneui/themed';
import {useNavigation, useRoute} from '@react-navigation/native';

import {AuthLayout} from '../layouts';
import {AuthStyles} from '../styles/AuthStyle';
import {
  UpdatePasswordScreenNavigationProps,
  UpdatePasswordScreenRouteProps,
} from '../types/navigation';

export interface IUpdatePasswordScreenProps {
  type: 'change' | 'reset';
  isLoading: boolean;
  updatePassword: (data: {oldPassword: string; password: string}) => void;
}

function UpdatePasswordScreen(props: IUpdatePasswordScreenProps) {
  const {navigate, goBack} =
    useNavigation<UpdatePasswordScreenNavigationProps>();
  const {params} = useRoute<UpdatePasswordScreenRouteProps>();

  const oldPasswordInputRef = useRef<InputProps>(null);
  const passwordInputRef = useRef<InputProps>(null);
  const confirmPasswordInputRef = useRef<InputProps>(null);

  const [oldPassword, setOldPassword] = useState<string>('');
  const [isOldPasswordValid, setIsOldPasswordValid] = useState<boolean>(true);
  const [password, setPassword] = useState<string>('');
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] =
    useState<boolean>(true);

  function updatePassword() {
    if (props?.type === 'change') {
      const isOldPasswordValid =
        oldPassword?.trim()?.length > 7 ||
        oldPasswordInputRef?.current?.shake!();

      setIsOldPasswordValid(isOldPasswordValid ?? false);
    }

    const isPasswordValid =
      password?.trim()?.length > 7 || passwordInputRef?.current?.shake!();

    setIsPasswordValid(isPasswordValid ?? false);

    const isConfirmPasswordValid =
      confirmPassword === password ||
      confirmPasswordInputRef?.current?.shake!();

    setIsConfirmPasswordValid(isConfirmPasswordValid ?? false);

    if (
      (props?.type === 'change' ? isOldPasswordValid : true) &&
      isPasswordValid &&
      isConfirmPasswordValid
    ) {
      resetInputs();
      props?.updatePassword({oldPassword, password});
    }
  }

  function resetInputs() {
    oldPasswordInputRef?.current?.clear!();
    passwordInputRef?.current?.clear!();
    confirmPasswordInputRef?.current?.clear!();
  }

  return (
    <AuthLayout>
      <View style={AuthStyles.formContainer}>
        <>
          {props?.type === 'change' && (
            <Input
              leftIcon={
                <Icon
                  name="lock"
                  type="simple-line-icon"
                  color="rgba(0, 0, 0, 0.38)"
                  size={25}
                  style={{backgroundColor: 'transparent'}}
                />
              }
              value={oldPassword}
              keyboardAppearance="light"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              returnKeyType={'next'}
              blurOnSubmit={true}
              containerStyle={{
                marginTop: 16,
                borderBottomColor: 'rgba(0, 0, 0, 0.38)',
              }}
              inputStyle={{marginLeft: 10, color: 'grey'}}
              placeholder={'Old Password'}
              ref={oldPasswordInputRef}
              onSubmitEditing={() => {
                passwordInputRef?.current?.focus!();
              }}
              onChangeText={text => setOldPassword(text)}
              errorMessage={
                isOldPasswordValid ? '' : 'Please enter correct old password'
              }
            />
          )}
        </>
        <Input
          leftIcon={
            <Icon
              name="lock"
              type="simple-line-icon"
              color="rgba(0, 0, 0, 0.38)"
              size={25}
              style={{backgroundColor: 'transparent'}}
            />
          }
          value={password}
          keyboardAppearance="light"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          returnKeyType={'next'}
          blurOnSubmit={true}
          containerStyle={{
            marginTop: 16,
            borderBottomColor: 'rgba(0, 0, 0, 0.38)',
          }}
          inputStyle={{marginLeft: 10, color: 'grey'}}
          placeholder={'Password'}
          ref={passwordInputRef}
          onSubmitEditing={() => {
            confirmPasswordInputRef?.current?.focus!();
          }}
          onChangeText={text => setPassword(text)}
          errorMessage={
            isPasswordValid ? '' : 'Please enter at least 8 characters'
          }
        />
        <Input
          leftIcon={
            <Icon
              name="lock"
              type="simple-line-icon"
              color="rgba(0, 0, 0, 0.38)"
              size={25}
              style={{backgroundColor: 'transparent'}}
            />
          }
          value={confirmPassword}
          secureTextEntry={true}
          keyboardAppearance="light"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="default"
          returnKeyType={'done'}
          blurOnSubmit={true}
          containerStyle={{
            marginTop: 16,
            borderBottomColor: 'rgba(0, 0, 0, 0.38)',
          }}
          inputStyle={{marginLeft: 10, color: 'grey'}}
          placeholder={'Confirm password'}
          ref={confirmPasswordInputRef}
          onSubmitEditing={updatePassword}
          onChangeText={text => setConfirmPassword(text)}
          errorMessage={
            isConfirmPasswordValid ? '' : 'Please enter the same password'
          }
        />
        <Button
          buttonStyle={AuthStyles.loginButton}
          containerStyle={{marginTop: 32, flex: 0}}
          activeOpacity={0.8}
          title={'UPDATE'}
          onPress={updatePassword}
          titleStyle={AuthStyles.loginTextButton}
          loading={props?.isLoading}
          disabled={props?.isLoading}
        />
      </View>
    </AuthLayout>
  );
}

export default UpdatePasswordScreen;
