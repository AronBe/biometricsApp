import React, {FC} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {Button, View} from 'react-native-ui-lib';
import AppTextInput from '../../core/components/AppTextInput';
import Screen from '../../core/components/Screen';
import {AuthNavigationProps} from '../navigation';
import {ISignupValues} from './types';

const Signup: FC<AuthNavigationProps<'Signup'>> = () => {
  const {control, handleSubmit} = useForm();

  const signup: SubmitHandler<ISignupValues> = ({email, password}) => {
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
        <Button label="Sign up" onPress={() => handleSubmit(signup)()} />
      </View>
    </Screen>
  );
};

export default Signup;
