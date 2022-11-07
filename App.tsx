/**
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React, {Suspense} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {RecoilRoot} from 'recoil';
import AppRoutes from './src/Routes';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <RecoilRoot>
        <Suspense fallback="Loading...">
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <AppRoutes />
        </Suspense>
      </RecoilRoot>
    </NavigationContainer>
  );
};

export default App;
