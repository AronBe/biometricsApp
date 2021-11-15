import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AuthRoutes} from '../auth/navigation';
import Login from '../auth/screens/Login';
import Signup from '../auth/screens/Signup';
import {MainRoutes} from '../main/navigator';
import Dashboard from '../main/screens/Dashboard';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const isLoggedIn = true;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Screen
            name={MainRoutes.DASHBOARD}
            component={Dashboard}
            options={{title: 'Dashboard'}}
          />
        ) : (
          <>
            <Stack.Screen name={AuthRoutes.LOGIN} component={Login} />
            <Stack.Screen name={AuthRoutes.SIGNUP} component={Signup} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
