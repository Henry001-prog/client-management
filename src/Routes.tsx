import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import ClientScreen from './screens/ClientScreen';
import DeleteClient from './screens/DeleteClient';
import ClientFormScreen from './screens/ClientFormScreen';
import { useRecoilState } from 'recoil';
import { setFormAtom } from './store/clientFormRecoil';

type RouteParamList = {
  Clients: undefined;
  DeleteClient: undefined;
  ClientFormScreen: {
    client: {
      name: string;
    };
  };
};

const Stack = createStackNavigator<RouteParamList>();

export default function AppRoutes() {
  const [clientForm] = useRecoilState(setFormAtom);
  return (
    <Stack.Navigator
      screenOptions={{ gestureEnabled: false, headerTitleAlign: 'center' }}>
      <Stack.Screen
        name="Clients"
        component={ClientScreen}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="DeleteClient"
        component={DeleteClient}
        options={{
          headerTitleStyle: {
            color: 'transparent',
          },
          headerStyle: {
            backgroundColor: '#778899',
            elevation: 0,
          },
        }}
      />
      <Stack.Screen
        name="ClientFormScreen"
        component={ClientFormScreen}
        options={({ route }) => ({
          title:
            route.params && route.params.client && clientForm.name !== ''
              ? 'Editar Cliente'
              : 'Adicionar Cliente',
          headerStyle: { height: 100, borderBottomWidth: 1 },
        })}
      />
    </Stack.Navigator>
  );
}
