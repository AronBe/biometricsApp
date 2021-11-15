import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ButtonProps, Colors, ThemeManager} from 'react-native-ui-lib';
import {ToastContextProvider} from '../src/features/core/hooks/useToast';
import Navigator from '../src/features/navigation/navigator';
import 'react-native-gesture-handler';

ThemeManager.setComponentTheme('Button', (props: ButtonProps) => ({
  color: props.link ? Colors.green10 : 'white',
  backgroundColor: Colors.green10,
}));

const App = () => (
  <SafeAreaProvider>
    <ToastContextProvider>
      <Navigator />
    </ToastContextProvider>
  </SafeAreaProvider>
);

export default App;
