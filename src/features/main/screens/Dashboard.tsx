import React, {FC} from 'react';
import {ActionBar, Text, View} from 'react-native-ui-lib';
import Screen from '../../core/components/Screen';
import {MainNavigationProps} from '../navigator';

const Dashboard: FC<MainNavigationProps<'Dashboard'>> = () => {
  const logout = () => {};

  return (
    <Screen>
      <View flex>
        <Text text50BO marginV-s5 center>
          Welcome
        </Text>
      </View>
      <ActionBar
        actions={[
          {
            label: '',
            onPress: () => {},
            labelStyle: {fontSize: 18},
          },
          {label: 'Logout', onPress: logout, labelStyle: {fontSize: 18}},
        ]}
      />
    </Screen>
  );
};

export default Dashboard;
