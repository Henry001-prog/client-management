import {Alert} from 'react-native';
import {atom} from 'recoil';
import {IClient} from '../interfaces/ClientType';

import api from '../services/api';

export const clientsState = atom<IClient[] | undefined>({
  key: 'listClients',
  default: [],
});

export const isLoading = atom<boolean>({
  key: 'isloading',
  default: false,
});

export const modalVisibleState = atom<boolean>({
  key: 'modalVisible',
  default: false,
});

export const searchClientName = atom({
  key: 'searchNameClient',
  default: '',
});

export const searchClient = atom<IClient | undefined>({
  key: 'searchClient',
  default: {
    id: '',
    cpf: '',
    name: '',
    birthDate: '',
    gender: '',
    address: '',
    state: '',
    city: '',
  },
});

export const listClients = async () => {
  const response = await api.get('/clients');
  try {
    const clients: IClient[] = response.data;

    return clients;
  } catch (error: any) {
    Alert.alert('Erro ao listar os clientes, tente novamente mais tarde');
  }
};

export const searchClients = async (clientName: string) => {
  const response = await api.get(`/client/${clientName}`);
  try {
    const client: IClient | undefined = response.data;
    // console.warn('Pesquisa: ', client);

    return client;
  } catch (error: any) {
    Alert.alert('Erro ao buscar o cliente, tente novamente mais tarde');
  }
};

export const deleteClient = (
  client: IClient,
  navigation: any,
  clientId: string,
  resetClient: () => void,
  setLoading: (value: boolean) => void,
) => {
  return new Promise(resolve => {
    setLoading(true);
    Alert.alert(
      'Deletar',
      `Deseja deletar cliente ${client.name}?`,
      [
        {
          text: 'Não',
          onPress: () => {
            resolve(false);
          },
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: async () => {
            setLoading(true);
            try {
              await api.delete(`/client/${clientId}`);
              resolve(true);
              setLoading(false);
              resetClient();
              navigation.navigate('Clients');
            } catch (error) {
              Alert.alert(
                'Erro ao deletar cliente, tente novamente mais tarde',
              );
            }
            setLoading(false);
          },
        },
      ],
      {cancelable: false},
    );
  });
};
