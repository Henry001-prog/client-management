import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { IClient } from '../../interfaces/ClientInterfaces';
import { modalVisibleState, searchClient } from '../../store/clientRecoil';
import { ModalComponent } from '../Modal';
import {
  Container,
  TextView,
  Text,
  Icon,
  ButtonAdd,
  ButtonClose,
  ButtonSearch,
} from './styles';

type RouteParamListModal = {
  ClientFormScreen: undefined;
};

export type ClientFormScreenNavigationProp = StackNavigationProp<
  RouteParamListModal,
  'ClientFormScreen'
>;

export const Header = () => {
  const [modalVisible, setModalVisible] =
    useRecoilState<boolean>(modalVisibleState);
  const [searchResult] = useRecoilState<IClient | undefined>(searchClient);
  const resetConfirmPassword = useResetRecoilState(searchClient);

  const navigation = useNavigation<ClientFormScreenNavigationProp>();

  // Ana Francinni Santana

  return (
    <Container>
      <ModalComponent
        isVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      {searchResult?.id === '' || searchResult === null ? (
        <>
          <TextView>
            <Text>Clients</Text>
          </TextView>
          <ButtonAdd onPress={() => navigation.navigate('ClientFormScreen')}>
            <Icon name="add" size={38} color="grey" />
          </ButtonAdd>

          <ButtonSearch onPress={() => setModalVisible(!modalVisible)}>
            <Icon name="search" size={26} color="grey" />
          </ButtonSearch>
        </>
      ) : (
        <>
          <TextView paddingLeft paddingRight>
            <Text>Search clients</Text>
          </TextView>
          <ButtonClose onPress={() => resetConfirmPassword()}>
            <Icon name="close" size={35} color="grey" />
          </ButtonClose>
        </>
      )}
    </Container>
  );
};
