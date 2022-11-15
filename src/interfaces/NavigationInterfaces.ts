import { IClient } from './ClientInterfaces';
import { StackNavigationProp } from '@react-navigation/stack';

export type StackParamsListClientForm = {
  ClientForm: {
    client: IClient;
  };
};

type StackParamsListClients = {
  Clients: undefined;
};

export type RootStackParamList = {
  ClientForm: undefined;
};

export type FormScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ClientForm'
>;

export type ClientScreenNavigationProp = StackNavigationProp<
  StackParamsListClients,
  'Clients'
>;

export type RootStackParamListDeleteClient = {
  DeleteClient: { client: IClient | undefined };
  ClientFormScreen: { client: IClient | undefined };
};

export type DeleteClientScreenNavigationProp = StackNavigationProp<
  RootStackParamListDeleteClient,
  'DeleteClient'
>;

export type ClientFormScreenNavigationProp = StackNavigationProp<
  RootStackParamListDeleteClient,
  'ClientFormScreen'
>;

export type StackParamsListDeleteClient = {
  DeleteClient: {
    client: {
      id: string;
      cpf: string;
      name: string;
      birthDate: string;
      gender: string;
      address: string;
      state: string;
      city: string;
    };
  };
};

export type RootStackParamListNavigation = {
  Clients: undefined;
};

export type MainScreenNavigationProp = StackNavigationProp<
  RootStackParamListNavigation,
  'Clients'
>;
