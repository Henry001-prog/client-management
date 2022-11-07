import React from 'react';
import {
  Container,
  ClientContainer,
  ViewClient,
  ViewButton,
  Button,
  TextButton,
  CpfText,
  NameText,
  BirthDateText,
  GenderText,
  AddressText,
  StateText,
  CityText,
} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import {Ionicons} from '@expo/vector-icons';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {isLoading, deleteClient} from '../../store/clientRecoil';
import {StackNavigationProp} from '@react-navigation/stack';
import {useRecoilState, useResetRecoilState} from 'recoil';
import {searchClient} from '../../store/clientRecoil';

type StackParamsList = {
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

export type RootStackParamList = {
  Customer: {user: any};
};

export type MainScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Customer'
>;

export default function DeleteClient() {
  const [, setLoading] = useRecoilState<boolean>(isLoading);

  const navigation = useNavigation<MainScreenNavigationProp>();
  const route = useRoute<RouteProp<StackParamsList, 'DeleteClient'>>();
  const resetClient = useResetRecoilState(searchClient);

  const {client} = route.params;

  return (
    <Container>
      <ClientContainer>
        <Ionicons
          style={{marginTop: 15, marginBottom: 20}}
          name="trash-outline"
          size={50}
          color="#FF0000"
        />
        <ViewClient>
          <CpfText>{client.cpf}</CpfText>
          <NameText>{client.name}</NameText>
          <BirthDateText>{client.birthDate}</BirthDateText>
          <GenderText>{client.gender}</GenderText>
          <AddressText>{client.address}</AddressText>
          <StateText>{client.state}</StateText>
          <CityText>{client.city}</CityText>
        </ViewClient>

        <ViewButton>
          <Button
            onPress={async () =>
              deleteClient(
                client,
                navigation,
                client.id,
                resetClient,
                setLoading,
              )
            }>
            <TextButton>Deletar</TextButton>
          </Button>
        </ViewButton>
      </ClientContainer>
    </Container>
  );
}
