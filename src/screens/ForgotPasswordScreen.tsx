import React, {useRef, useState} from 'react';
import {View, Text, Alert, UIManager, LayoutAnimation} from 'react-native';
import {Input, InputProps, Button, Icon} from '@rneui/base';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import {AuthStyles} from './../styles/AuthStyle';
import {validateEmail} from '../utilities';
import {ForgotPasswordScreenNavigationProps} from '../types/navigation';
import {AuthLayout} from '../layouts';

// Enable LayoutAnimation on Android
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export interface IForgotPasswordScreenProps {}

function ForgotPasswordScreen(props: IForgotPasswordScreenProps) {
  const {navigate} = useNavigation<ForgotPasswordScreenNavigationProps>();

  const emailInputRef = useRef<InputProps>(null);
  const otpInputRef = useRef<InputProps>(null);

  const [email, setEmail] = useState<string>('');
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [otp, setOtp] = useState<string>('');
  const [isOtpValid, setIsOtpValid] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOtpSent, setIsOtpSent] = useState<boolean>(false);

  function sendOtp() {
    const isEmailValidFlag =
      validateEmail(email) || emailInputRef?.current?.shake!();

    setIsEmailValid(isEmailValidFlag ?? false);

    if (isEmailValidFlag) {
      setIsLoading(true);
      setTimeout(() => {
        LayoutAnimation?.easeInEaseOut();
        setIsOtpSent(true);
        setIsLoading(false);
      }, 1000);
    }
  }

  function verifyOtp() {
    const isOtpValidFlag =
      otp?.trim()?.length === 4 || otpInputRef?.current?.shake!();

    setIsOtpValid(isOtpValidFlag ?? false);

    if (isOtpValidFlag) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        resetForm();
        navigate('UpdatePassword', {
          type: 'reset',
        });
      }, 1000);
    }
  }

  function resetForm() {
    resetInputs();
    setIsOtpSent(false);
  }

  function resetInputs() {
    otpInputRef?.current?.clear!();
    setOtp('');
  }

  function login() {
    resetForm();
    emailInputRef?.current?.clear!();
    setEmail('');
    navigate('Auth');
  }

  return (
    <React.Fragment>
      <AuthLayout>
        <View style={AuthStyles.titleContainer}>
          <View>
            <Text style={AuthStyles.titleText}>Music</Text>
          </View>
          <View style={{marginLeft: 10}}>
            <Text style={AuthStyles.titleText}>Albums</Text>
          </View>
        </View>
        <View style={AuthStyles.formContainer}>
          <Input
            leftIcon={
              <Icon
                name="envelope-o"
                type="font-awesome"
                color="rgba(0, 0, 0, 0.38)"
                size={25}
                style={{backgroundColor: 'transparent'}}
              />
            }
            value={email}
            keyboardAppearance="light"
            autoFocus={false}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            returnKeyType="next"
            inputStyle={{marginLeft: 10, color: 'grey'}}
            placeholder={'Email'}
            containerStyle={{
              borderBottomColor: 'rgba(0, 0, 0, 0.38)',
            }}
            ref={emailInputRef}
            onSubmitEditing={() => otpInputRef?.current?.focus!()}
            onChangeText={text => setEmail(text)}
            errorMessage={
              isEmailValid ? '' : 'Please enter a valid email address'
            }
          />
          <>
            {isOtpSent && (
              <Input
                leftIcon={
                  <MaterialCommunityIcon
                    name="form-textbox-password"
                    color="rgba(0, 0, 0, 0.38)"
                    size={25}
                    style={{backgroundColor: 'transparent'}}
                  />
                }
                value={otp}
                keyboardAppearance="light"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={false}
                returnKeyType={'done'}
                blurOnSubmit={true}
                containerStyle={{
                  marginTop: 16,
                  borderBottomColor: 'rgba(0, 0, 0, 0.38)',
                }}
                inputStyle={{marginLeft: 10, color: 'grey'}}
                placeholder={'OTP'}
                ref={otpInputRef}
                onSubmitEditing={() => verifyOtp()}
                onChangeText={text => setOtp(text)}
                errorMessage={isOtpValid ? '' : 'Please enter 4 digit OTP'}
              />
            )}
          </>
          <Button
            buttonStyle={AuthStyles.loginButton}
            containerStyle={{marginTop: 32, flex: 0}}
            activeOpacity={0.8}
            title={isOtpSent ? 'VERIFY OTP' : 'SEND OTP'}
            onPress={isOtpSent ? verifyOtp : sendOtp}
            titleStyle={AuthStyles.loginTextButton}
            loading={isLoading}
            disabled={isLoading}
          />
        </View>
        <View style={AuthStyles.helpContainer}>
          <Button
            title={'Login ?'}
            titleStyle={{color: 'white'}}
            buttonStyle={{backgroundColor: 'transparent'}}
            onPress={login}
          />
        </View>
      </AuthLayout>
    </React.Fragment>
  );
}

export default ForgotPasswordScreen;
