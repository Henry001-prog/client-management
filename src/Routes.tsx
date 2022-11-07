import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import ClientScreen from './screens/ClientScreen';
import DeleteClient from './screens/DeleteClient';
import ClientFormScreen from './screens/ClientFormScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import {Ionicons} from '@expo/vector-icons';
import {TouchableOpacity, View} from 'react-native';
import {modalVisibleState, searchClient} from './store/clientRecoil';
import {IClient} from './interfaces/ClientType';
import {useRecoilState, useResetRecoilState} from 'recoil';
import {ModalComponent} from './components/Modal';
import {setFormAtom} from './store/clientFormRecoil';

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
  const [searchResult] = useRecoilState<IClient | undefined>(searchClient);
  const [modalVisible, setModalVisible] =
    useRecoilState<boolean>(modalVisibleState);
  const [clientForm] = useRecoilState(setFormAtom);

  const resetConfirmPassword = useResetRecoilState(searchClient);
  return (
    <Stack.Navigator
      screenOptions={{gestureEnabled: false, headerTitleAlign: 'center'}}>
      <Stack.Screen
        name="Clients"
        component={ClientScreen}
        options={({navigation}) => ({
          headerStyle: {height: 90, borderBottomWidth: 1},
          headerRight: () => (
            <View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                paddingRight: 15,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ModalComponent
                isVisible={modalVisible}
                setModalVisible={setModalVisible}
              />

              {!searchResult!.id ? (
                <>
                  <TouchableOpacity
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                      paddingTop: 5,
                      paddingRight: 8,
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={() => navigation.navigate('ClientFormScreen')}>
                    <Ionicons name="add" size={38} color="grey" />
                  </TouchableOpacity>

                  <TouchableOpacity
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                      paddingTop: 5,
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Ionicons name="search" size={26} color="grey" />
                  </TouchableOpacity>
                </>
              ) : (
                <TouchableOpacity
                  style={{
                    paddingTop: 3,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => resetConfirmPassword()}>
                  <Ionicons name="close" size={35} color="grey" />
                </TouchableOpacity>
              )}
            </View>
          ),
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
        options={({route}) => ({
          title:
            route.params && route.params.client && clientForm.name !== ''
              ? 'Editar Cliente'
              : 'Adicionar Cliente',
          headerStyle: {height: 100, borderBottomWidth: 1},
        })}
      />
    </Stack.Navigator>
  );
}
