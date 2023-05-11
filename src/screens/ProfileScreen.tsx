import React, {useRef, useState} from 'react';
import {View} from 'react-native';
import {Input, Icon, InputProps, Button} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {AuthLayout} from '../layouts';
import {AuthStyles} from '../styles/AuthStyle';
import {ProfileScreenNavigationProps} from '../types/navigation';

export interface IProfileScreenProps {}

function ProfileScreen(props: IProfileScreenProps) {
  const {navigate} = useNavigation<ProfileScreenNavigationProps>();

  const nameInputRef = useRef<InputProps>(null);
  const emailInputRef = useRef<InputProps>(null);

  const [name, setName] = useState<string>('');
  const [isNameValid, setIsNameValid] = useState<boolean>(true);
  const [email, setEmail] = useState<string>('');
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function editProfile() {
    setIsEdit(true);
  }

  function updateProfile() {}

  function updatePassword() {
    navigate('UpdatePassword', {
      type: 'change',
    });
  }

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
          disabled={!isEdit}
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
          onSubmitEditing={() => (isEdit ? updateProfile() : editProfile())}
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
          title={isEdit ? 'UPDATE PROFILE' : 'EDIT PROFILE'}
          onPress={isEdit ? updateProfile : editProfile}
          titleStyle={AuthStyles.loginTextButton}
          loading={isLoading}
          disabled={isLoading}
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
          title={'UPDATE PASSWORD'}
          onPress={updatePassword}
          titleStyle={AuthStyles.loginTextButton}
          loading={isLoading}
          disabled={isLoading}
        />
      </View>
    </AuthLayout>
  );
}

export default ProfileScreen;
