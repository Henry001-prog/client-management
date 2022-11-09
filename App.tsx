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
import {ThemeProvider} from 'styled-components';
import {ToastProvider} from 'react-native-styled-toast';

export const theme = {
  successToast: {
    toastStyles: {
      bg: '#b0eacc',
      borderRadius: 8,
      borderBottomWidth: 2,
      borderBottomColor: '#00aa56',
    },
    accentColor: '#00aa56',
    color: '#000c',

    closeButtonStyles: {
      bg: '#0000',
    },
    closeIconColor: '#00aa56',
    closeIconSize: 30,

    hideIcon: true,
    hideAccent: true,
  },

  errorToast: {
    toastStyles: {
      bg: '#ffe3e0',
      borderRadius: 8,
      borderWidth: 0,
      borderBottomWidth: 2,
      borderBottomColor: '#ff3b36',
    },
    accentColor: '#ff3b36',
    color: '#000c',

    closeButtonStyles: {
      bg: '#0000',
    },
    closeIconColor: '#ff3b36',
    closeIconSize: 30,

    hideIcon: true,
    hideAccent: true,
  },
};

interface AppProviderProps {
  children: React.ReactNode;
}

const App = ({children}: AppProviderProps) => {
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
