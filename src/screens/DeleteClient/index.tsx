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
import { useTheme } from 'styled-components';
import { useToast } from 'react-native-styled-toast';

import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { isLoading, deleteClient } from '../../store/clientRecoil';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { searchClient } from '../../store/clientRecoil';
import {
  MainScreenNavigationProp,
  StackParamsListDeleteClient,
} from '../../interfaces/NavigationInterfaces';

export default function DeleteClient() {
  const [, setLoading] = useRecoilState<boolean>(isLoading);

  const navigation = useNavigation<MainScreenNavigationProp>();
  const route =
    useRoute<RouteProp<StackParamsListDeleteClient, 'DeleteClient'>>();
  const resetClient = useResetRecoilState(searchClient);

  const theme = useTheme();
  const { toast } = useToast();

  const { client } = route.params;

  return (
    <Container>
      <ClientContainer>
        <Ionicons
          style={{ marginTop: 15, marginBottom: 20 }}
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
                theme,
                toast,
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
