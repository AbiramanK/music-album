import React, {PropsWithChildren} from 'react';
import {ScrollView, View, ImageBackground} from 'react-native';

import {AuthStyles} from '../styles/AuthStyle';

const BG_IMAGE = require('./../assets/images/bg_screen4.jpg');

export interface IAuthLayoutProps {}

function AuthLayout(props: PropsWithChildren<IAuthLayoutProps>) {
  return (
    <ScrollView>
      <View style={AuthStyles.container}>
        <ImageBackground source={BG_IMAGE} style={AuthStyles.bgImage}>
          <View>{props?.children}</View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

export default AuthLayout;
