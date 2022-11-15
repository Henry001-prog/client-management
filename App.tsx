/**
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React, { Suspense } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { RecoilRoot } from 'recoil';
import AppRoutes from './src/Routes';
import { ThemeProvider } from 'styled-components';
import { ToastProvider } from 'react-native-styled-toast';
import { theme } from './src/styles/themes/colors';

interface AppProviderProps {
  children: React.ReactNode;
}

const App = ({ children }: AppProviderProps) => {
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
          <ThemeProvider theme={theme}>
            {/*// @ts-ignore */}
            <ToastProvider>
              {children}
              <AppRoutes />
            </ToastProvider>
          </ThemeProvider>
        </Suspense>
      </RecoilRoot>
    </NavigationContainer>
  );
};

export default App;
