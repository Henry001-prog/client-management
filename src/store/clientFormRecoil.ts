import {Alert} from 'react-native';
import {atom} from 'recoil';

export interface IClientForm {
  id?: string;
  cpf: string;
  name: string;
  birthDate: string;
  gender: string;
  address: string;
  state: string;
  city: string;
}

import api from '../services/api';

export const isLoading = atom<boolean>({
  key: 'isloadingForm',
  default: false,
});

export const clear = atom<boolean>({
  key: 'clear',
  default: false,
});

export const setFormAtom = atom<IClientForm>({
  key: 'form',
  default: {
    cpf: '',
    name: '',
    birthDate: '',
    gender: '',
    address: '',
    state: '',
    city: '',
  },
});

export const saveClient = async (
  client: IClientForm,
  setLoading: (value: boolean) => void,
) => {
  setLoading(true);
  //   console.warn("Cliente: ", client);
  try {
    if (client.id) {
      await api.put(`/client/${client.id}`, client);
      setLoading(true);
    } else {
      await api.post('/client', client);
    }
    setLoading(false);
  } catch (error) {
    Alert.alert(
      'Erro ao criar ou atualizar dados do cliente, tente novamente mais tarde',
    );
  }
};
