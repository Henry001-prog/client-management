import { ToastConfig } from 'react-native-styled-toast/dist/Toast';
import { atom } from 'recoil';
import { IClientForm } from '../interfaces/ClientFormRecoil';

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
  theme: any,
  toast: (options: ToastConfig) => void,
  setLoading: (value: boolean) => void,
) => {
  setLoading(true);
  //   console.warn("Cliente: ", client);
  try {
    if (client.id) {
      await api.put(`/client/${client.id}`, client);
      toast({
        ...theme.successToast,
        message: 'Cliente editado com sucesso!',
        duration: 5000,
      });
      setLoading(true);
    } else {
      await api.post('/client', client);
      toast({
        ...theme.successToast,
        message: 'Cliente criado com sucesso!',
        duration: 5000,
      });
    }
    setLoading(false);
  } catch (error) {
    toast({
      ...theme.errorToast,
      message:
        'Erro ao criar ou atualizar dados do cliente, tente novamente mais tarde!',
      duration: 5000,
    });
  }
};
