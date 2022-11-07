import React from 'react';
import {Alert} from 'react-native';

import {
  CenteredView,
  Modal,
  ModalView,
  ModalText,
  TextInput,
  ButtonSearch,
  BackButton,
  TextStyle,
  BackButtonContainer,
} from './styles';

import {
  searchClientName,
  searchClient,
  searchClients,
} from '../../store/clientRecoil';
import {useRecoilState, useResetRecoilState} from 'recoil';
import {IClient} from '../../interfaces/ClientType';
// import {Ionicons} from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IModal {
  isVisible: boolean;
  setModalVisible: (value: boolean) => void;
}

export const ModalComponent = ({isVisible, setModalVisible}: IModal) => {
  const [clientName, setClientName] = useRecoilState<string>(searchClientName);
  const [, setSearchResult] = useRecoilState<IClient | undefined>(searchClient);

  const resetConfirmPassword = useResetRecoilState(searchClientName);

  async function getResult() {
    if (clientName) {
      // setLoading(true);
      const result = await searchClients(clientName);
      setSearchResult(result);
      // console.warn('Modal: ', result)
      resetConfirmPassword();
    } else {
      Alert.alert('Você precisa pesquisar por algum cliente!');
    }
  }

  return (
    <CenteredView>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!isVisible);
        }}>
        <CenteredView>
          <ModalView>
            <BackButtonContainer>
              <BackButton onPress={() => setModalVisible(!isVisible)}>
                <Ionicons name="close" size={35} color="grey" />
              </BackButton>
            </BackButtonContainer>

            <ModalText>Encontre um determinado cliente</ModalText>
            <TextInput
              placeholder="Digite aqui"
              returnKeyType="next"
              blurOnSubmit={false}
              placeholderTextColor="#808080"
              value={clientName}
              onChangeText={(value: string | ((currVal: string) => string)) => {
                setClientName(value);
              }}
              onSubmitEditing={async () => {
                getResult();
                setModalVisible(!isVisible);
              }}
            />
            <ButtonSearch
              onPress={async () => {
                getResult();
                setModalVisible(!isVisible);
              }}>
              <TextStyle>Pesquisar</TextStyle>
            </ButtonSearch>
          </ModalView>
        </CenteredView>
      </Modal>
    </CenteredView>
  );
};
