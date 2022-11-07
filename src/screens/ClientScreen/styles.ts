import {FlatList} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

export const ViewLoading = styled.View`
  flex: 1;
  justify-content: center;
  width: 100%;
  width: 100%;
`;

export const Loading = styled.ActivityIndicator`
  height: 100%;
`;

export const ClientContainer = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ViewList = styled.FlatList`
  height: 100%;
  width: 92%;
  padding-top: 4%;
` as unknown as typeof FlatList;

export const ViewBottom = styled.View`
  margin-bottom: 20px;
`;

export const ContainerList = styled.View.attrs({
  elevation: 2,
})`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 20px;
  margin-bottom: 12px;
  border-radius: 10px;
  background-color: white;
  border: 1px solid #d0d0d0;
`;

export const ViewButton = styled.View`
  margin-right: ${width < 321 ? '240px' : '285px'};
  width: 0px;
  height: 0px;
`;

export const ButtonLeft = styled.TouchableOpacity`
  border-radius: 33px;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
  background-color: transparent;
`;

export const ButtonRight = styled.TouchableOpacity`
  border-radius: 33px;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  width: 40px;
  height: 40px;
  margin-left: ${width < 321 ? '200px' : '240px'};
  margin-bottom: 5px;
  background-color: transparent;
`;

export const ViewClient = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CpfText = styled.Text`
  text-align: center;
  font-size: 16px;
  padding-top: 2%;
  padding-bottom: 1%;
  color: #000;
`;

export const NameText = styled.Text`
  text-align: center;
  font-size: 16px;
  padding-bottom: 1%;
  color: #000;
`;

export const BirthDateText = styled.Text`
  text-align: center;
  font-size: 16px;
  padding-bottom: 1%;
  color: #000;
`;

export const GenderText = styled.Text`
  text-align: center;
  font-size: 16px;
  padding-bottom: 1%;
  color: #000;
`;

export const AddressText = styled.Text`
  text-align: center;
  font-size: 16px;
  padding-bottom: 1%;
  color: #000;
`;

export const StateText = styled.Text`
  text-align: center;
  font-size: 16px;
  padding-bottom: 1%;
  color: #000;
`;

export const CityText = styled.Text`
  text-align: center;
  font-size: 16px;
  padding-bottom: 4%;
  color: #000;
`;
