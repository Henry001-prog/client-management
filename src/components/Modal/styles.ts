import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const width = Dimensions.get('window').width;

interface IModal {
  visible: boolean;
}

export const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.Modal<IModal>``;

export const ModalView = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
})`
  width: 90%;
  margin: 20px;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
`;

export const ModalText = styled.Text`
  margin-bottom: 18px;
  text-align: center;
  font-size: 16px;
  color: #000;
`;

export const TextInput = styled.TextInput`
  padding-left: 15px;
  padding-bottom: 5px;
  margin-bottom: 20px;
  border-color: transparent;
  width: ${width < 321 ? '285px' : '100%'};
  border-radius: 10px;
  background-color: #dce4f5;
  opacity: 0.7;
  align-items: center;
  color: #2b2c2e;
  font-size: 17px;
  height: 55px;
`;

export const ButtonSearch = styled.TouchableOpacity.attrs({
  elevation: 2,
})`
  border-radius: 20px;
  padding: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #2196f3;
`;

export const BackButtonContainer = styled.View`
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: row;
`;

export const BackButton = styled.TouchableOpacity`
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const TextStyle = styled.Text`
  color: white;
  font-weight: bold;
  text-align: center;
  font-size: 17px;
`;
