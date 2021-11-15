import React, {FC} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {Button, View} from 'react-native-ui-lib';
import {ILoginValues} from '../screens/types';
import AppTextInput from '../../core/components/AppTextInput';
import Screen from '../../core/components/Screen';
import {AuthNavigationProps, AuthRoutes} from '../navigation';

const Login: FC<AuthNavigationProps<'Login'>> = ({navigation}) => {
  const {control, handleSubmit} = useForm();

  const showSignup = () => {
    navigation.navigate(AuthRoutes.SIGNUP);
  };

  const login: SubmitHandler<ILoginValues> = ({email, password}) => {
    console.log(email, password);
  };

  return (
    <Screen>
      <View flex center>
        <AppTextInput
          control={control}
          name="email"
          label="Email"
          inputProps={{keyboardType: 'email-address', autoCorrect: false}}
        />
        <AppTextInput
          control={control}
          name="password"
          label="Password"
          inputProps={{secureTextEntry: true}}
        />
        <Button
          label="Login"
          onPress={() => handleSubmit(login)()}
          marginV-s2
        />

        <Button link label="Signup" onPress={showSignup} green10 marginV-s1 />
      </View>
    </Screen>
  );
};

export default Login;
