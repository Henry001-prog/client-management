// @ts-ignore
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #778899;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-bottom: 5%;
`;

export const ClientContainer = styled.View.attrs({
  elevation: 5,
})`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  width: 80%;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: white;
  border: 1px solid #d0d0d0;
`;

export const ViewProduct = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ViewRow = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ViewButton = styled.View`
  margin-top: 10px;
  padding: 15px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #dc143c;
  width: 200px;
  justify-content: center;
  align-items: center;
  border-radius: 33px;
  height: 55px;
  border: 1px solid #d0d0d0;
`;

export const TextButton = styled.Text`
  font-size: 17px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  color: white;
`;

export const ViewClient = styled.View`
  width: 85%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CpfText = styled.Text`
  text-align: center;
  font-size: 17px;
  padding-bottom: 2%;
  color: #000;
`;

export const NameText = styled.Text`
  text-align: center;
  font-size: 17px;
  padding-bottom: 2%;
  color: #000;
`;

export const BirthDateText = styled.Text`
  text-align: center;
  font-size: 17px;
  padding-bottom: 2%;
  color: #000;
`;

export const GenderText = styled.Text`
  text-align: center;
  font-size: 17px;
  padding-bottom: 2%;
  color: #000;
`;

export const AddressText = styled.Text`
  text-align: center;
  font-size: 17px;
  padding-bottom: 2%;
  color: #000;
`;

export const StateText = styled.Text`
  text-align: center;
  font-size: 17px;
  padding-bottom: 2%;
  color: #000;
`;

export const CityText = styled.Text`
  text-align: center;
  font-size: 17px;
  padding-bottom: 4%;
  color: #000;
`;
