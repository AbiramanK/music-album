import React, {useRef, useState} from 'react';
import {Alert, View, UIManager, LayoutAnimation} from 'react-native';
import {Input, Icon, InputProps, Button} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {AuthLayout} from '../layouts';
import {AuthStyles} from '../styles/AuthStyle';
import {ProfileScreenNavigationProps} from '../types/navigation';

// Enable LayoutAnimation on Android
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export interface IProfileScreenProps {
  name: string;
  email: string;
  isLoading: boolean;
  updateUserName: (data: {name: string; email: string}) => void;
  isEdit: boolean;
  updateIsEdit: (edit: boolean) => void;
}

function ProfileScreen(props: IProfileScreenProps) {
  const {navigate} = useNavigation<ProfileScreenNavigationProps>();

  const nameInputRef = useRef<InputProps>(null);
  const emailInputRef = useRef<InputProps>(null);

  const [name, setName] = useState<string>(props?.name);
  const [isNameValid, setIsNameValid] = useState<boolean>(true);
  const [email, setEmail] = useState<string>(props?.email);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);

  function editProfile() {
    LayoutAnimation?.easeInEaseOut();
    props?.updateIsEdit(true);
  }

  function updateProfile() {
    const isNameValidFlag =
      name?.trim()?.length > 0 || nameInputRef?.current?.shake!();

    setIsNameValid(isNameValidFlag ?? false);

    if (isNameValidFlag) {
      if (name?.trim() !== props?.name?.trim()) {
        props?.updateUserName({name, email});
      } else {
        Alert.alert('No changes detected');
      }
    }
  }

  function cancelUpdateProfile() {
    LayoutAnimation?.easeInEaseOut();
    setName(props?.name);
    props?.updateIsEdit(false);
  }

  function updatePassword() {
    navigate('UpdatePassword', {
      type: 'change',
    });
  }

  function logout() {}

  return (
    <AuthLayout>
      <View style={[AuthStyles.titleContainer, {alignItems: 'center'}]}>
        <Ionicons
          name="person-circle-outline"
          size={120}
          color="rgba(0, 0, 0, 0.38)"
          style={{backgroundColor: 'transparent'}}
        />
      </View>
      <View style={AuthStyles.formContainer}>
        <Input
          disabled={!props?.isEdit}
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
          returnKeyType={'next'}
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
        <Input
          disabled={true}
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
          onSubmitEditing={() =>
            props?.isEdit ? updateProfile() : editProfile()
          }
          onChangeText={text => setEmail(text)}
          errorMessage={
            isEmailValid ? '' : 'Please enter a valid email address'
          }
        />
        <Button
          buttonStyle={[AuthStyles.loginButton, {width: '100%'}]}
          containerStyle={{
            marginTop: 32,
            flex: 0,
            width: '100%',
            paddingHorizontal: 10,
          }}
          activeOpacity={0.8}
          title={props?.isEdit ? 'UPDATE PROFILE' : 'EDIT PROFILE'}
          onPress={props?.isEdit ? updateProfile : editProfile}
          titleStyle={AuthStyles.loginTextButton}
          loading={props?.isLoading}
          disabled={props?.isLoading}
        />
        <>
          {props?.isEdit && (
            <Button
              buttonStyle={[AuthStyles.loginButton, {width: '100%'}]}
              containerStyle={{
                marginTop: 20,
                flex: 0,
                width: '100%',
                paddingHorizontal: 10,
              }}
              activeOpacity={0.8}
              title={'CANCEL'}
              onPress={cancelUpdateProfile}
              titleStyle={AuthStyles.loginTextButton}
              loading={props?.isLoading}
              disabled={props?.isLoading}
            />
          )}
        </>
        <>
          {!props?.isEdit && (
            <>
              <Button
                buttonStyle={[AuthStyles.loginButton, {width: '100%'}]}
                containerStyle={{
                  marginTop: 20,
                  flex: 0,
                  width: '100%',
                  paddingHorizontal: 10,
                }}
                activeOpacity={0.8}
                title={'UPDATE PASSWORD'}
                onPress={updatePassword}
                titleStyle={AuthStyles.loginTextButton}
                loading={props?.isLoading}
                disabled={props?.isLoading}
              />
              <Button
                buttonStyle={[AuthStyles.loginButton, {width: '100%'}]}
                containerStyle={{
                  marginTop: 20,
                  flex: 0,
                  width: '100%',
                  paddingHorizontal: 10,
                }}
                activeOpacity={0.8}
                title={'LOGOUT'}
                onPress={logout}
                titleStyle={AuthStyles.loginTextButton}
                loading={props?.isLoading}
                disabled={props?.isLoading}
              />
            </>
          )}
        </>
      </View>
    </AuthLayout>
  );
}

export default ProfileScreen;
