import React, {useState, useRef} from 'react';
import {Alert, View, Text, LayoutAnimation, UIManager} from 'react-native';
import {Input, Button, Icon, InputProps} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';

import {AuthStyles} from './../styles/AuthStyle';
import {validateEmail} from '../utilities';
import {AuthLayout} from '../layouts';
import {AuthScreenNavigationProps} from '../types/navigation';

// Enable LayoutAnimation on Android
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

type TabSelectorProps = {
  selected: boolean;
};

const TabSelector: React.FunctionComponent<TabSelectorProps> = (
  props: TabSelectorProps,
) => {
  return (
    <View style={AuthStyles.selectorContainer}>
      <View style={props?.selected && AuthStyles.selected} />
    </View>
  );
};

export interface IAuthScreenProps {}

function AuthScreen(props: IAuthScreenProps) {
  const {navigate} = useNavigation<AuthScreenNavigationProps>();

  const nameInputRef = useRef<InputProps>(null);
  const emailInputRef = useRef<InputProps>(null);
  const passwordInputRef = useRef<InputProps>(null);
  const confirmationInputRef = useRef<InputProps>(null);

  const [isLoading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [isNameValid, setNameValid] = useState<boolean>(true);
  const [email, setEmail] = useState<string>('');
  const [isEmailValid, setEmailValid] = useState<boolean>(true);
  const [password, setPassword] = useState<string>('');
  const [isPasswordValid, setPasswordValid] = useState<boolean>(true);
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isConfirmPasswordValid, setConfirmPasswordValid] =
    useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  const isLoginPage = selectedCategory === 0;
  const isSignUpPage = selectedCategory === 1;

  const selectCategory = (selectedCategoryIndex: number) => {
    LayoutAnimation.easeInEaseOut();
    setLoading(false);
    setSelectedCategory(selectedCategoryIndex);
  };

  const login = () => {
    setLoading(true);
    // Simulate an API call
    setTimeout(() => {
      const isEmailValidFlag = validateEmail(email);
      if (!isEmailValidFlag) {
        emailInputRef?.current?.shake!();
      }
      const isPasswordValidFlag = password.length >= 8;

      if (!isPasswordValidFlag) {
        passwordInputRef?.current?.shake!();
      }

      LayoutAnimation.easeInEaseOut();
      setLoading(false);
      setEmailValid(isEmailValidFlag);
      setPasswordValid(isPasswordValidFlag);
      if (isEmailValidFlag && isPasswordValidFlag) {
        resetInputs();
        navigate('Home');
      }
    }, 1500);
  };

  const signUp = () => {
    setLoading(true);
    // Simulate an API call
    setTimeout(() => {
      const isNameValidFlag =
        name?.trim()?.length > 0 || nameInputRef?.current?.shake!();
      const isEmailValidFlag =
        validateEmail(email) || emailInputRef?.current?.shake!();
      const isPasswordValidFlag =
        password.length >= 8 || passwordInputRef?.current?.shake!();
      const isConfirmPasswordValidFlag =
        password === confirmPassword || confirmationInputRef?.current?.shake!();

      LayoutAnimation.easeInEaseOut();
      setLoading(false);

      setNameValid(isNameValidFlag ?? false);

      setEmailValid(isEmailValidFlag ?? false);

      setPasswordValid(isPasswordValidFlag ?? false);

      setConfirmPasswordValid(isConfirmPasswordValidFlag ?? false);

      if (
        isEmailValidFlag &&
        isPasswordValidFlag &&
        isConfirmPasswordValidFlag
      ) {
        resetInputs();
        Alert.alert('🙏', 'Welcome');
      }
    }, 1500);
  };

  function resetInputs() {
    nameInputRef?.current?.clear!();
    emailInputRef?.current?.clear!();
    passwordInputRef?.current?.clear!();
    confirmationInputRef?.current?.clear!();
  }

  function forgotPassword() {
    resetInputs();
    navigate('ForgotPassword');
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
        <View style={{flexDirection: 'row'}}>
          <Button
            disabled={isLoading}
            type="clear"
            activeOpacity={0.7}
            onPress={() => selectCategory(0)}
            containerStyle={{flex: 1}}
            titleStyle={[
              AuthStyles.categoryText,
              isLoginPage && AuthStyles.selectedCategoryText,
            ]}
            title="Login"
          />
          <Button
            disabled={isLoading}
            type="clear"
            activeOpacity={0.7}
            onPress={() => selectCategory(1)}
            containerStyle={{flex: 1}}
            titleStyle={[
              AuthStyles.categoryText,
              isSignUpPage && AuthStyles.selectedCategoryText,
            ]}
            title="Sign up"
          />
        </View>
        <View style={AuthStyles.rowSelector}>
          <TabSelector selected={isLoginPage} />
          <TabSelector selected={isSignUpPage} />
        </View>
        <View style={AuthStyles.formContainer}>
          <>
            {isSignUpPage && (
              <Input
                leftIcon={
                  <Icon
                    name="emotsmile"
                    type="simple-line-icon"
                    color="rgba(0, 0, 0, 0.38)"
                    size={25}
                    style={{backgroundColor: 'transparent'}}
                  />
                }
                value={name}
                keyboardAppearance="light"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={false}
                returnKeyType={isSignUpPage ? 'next' : 'done'}
                blurOnSubmit={true}
                containerStyle={{
                  marginTop: 16,
                  borderBottomColor: 'rgba(0, 0, 0, 0.38)',
                }}
                inputStyle={{marginLeft: 10, color: 'grey'}}
                placeholder={'Name'}
                ref={nameInputRef}
                onSubmitEditing={() => emailInputRef?.current?.focus!()}
                onChangeText={text => setName(text)}
                errorMessage={isNameValid ? '' : 'Please enter your name'}
              />
            )}
          </>
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
            onSubmitEditing={() => passwordInputRef?.current?.focus!()}
            onChangeText={text => setEmail(text)}
            errorMessage={
              isEmailValid ? '' : 'Please enter a valid email address'
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
            value={password}
            keyboardAppearance="light"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            returnKeyType={isSignUpPage ? 'next' : 'done'}
            blurOnSubmit={true}
            containerStyle={{
              marginTop: 16,
              borderBottomColor: 'rgba(0, 0, 0, 0.38)',
            }}
            inputStyle={{marginLeft: 10, color: 'grey'}}
            placeholder={'Password'}
            ref={passwordInputRef}
            onSubmitEditing={() => {
              isSignUpPage ? confirmationInputRef?.current?.focus!() : login();
            }}
            onChangeText={text => setPassword(text)}
            errorMessage={
              isPasswordValid ? '' : 'Please enter at least 8 characters'
            }
          />
          {isSignUpPage && (
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
              ref={confirmationInputRef}
              onSubmitEditing={signUp}
              onChangeText={text => setConfirmPassword(text)}
              errorMessage={
                isConfirmPasswordValid ? '' : 'Please enter the same password'
              }
            />
          )}
          <Button
            buttonStyle={AuthStyles.loginButton}
            containerStyle={{marginTop: 32, flex: 0}}
            activeOpacity={0.8}
            title={isLoginPage ? 'LOGIN' : 'SIGN UP'}
            onPress={isLoginPage ? login : signUp}
            titleStyle={AuthStyles.loginTextButton}
            loading={isLoading}
            disabled={isLoading}
          />
        </View>
        <View style={AuthStyles.helpContainer}>
          <Button
            title={'Forgot Password ?'}
            titleStyle={{color: 'white'}}
            buttonStyle={{backgroundColor: 'transparent'}}
            onPress={forgotPassword}
          />
        </View>
      </AuthLayout>
    </React.Fragment>
  );
}

export default AuthScreen;
