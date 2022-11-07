import {Dimensions, TextInput as ReactTextInput} from 'react-native';
import styled from 'styled-components/native';

type IError = {
  error: any;
};

const width = Dimensions.get('window').width;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView``;

export const ScrollView = styled.ScrollView`
  padding-top: 20%;
`;

export const FormRow = styled.View`
  width: 100%;
  background-color: transparent;
  margin: 5px 0px 5px 0px;
`;

export const TextInput = styled(ReactTextInput)<IError>`
  padding-left: 15px;
  padding-bottom: 12px;
  border-color: transparent;
  width: ${width < 321 ? '285px' : '100%'};
  border-radius: 10px;
  background-color: ${(props: {error: any}) =>
    props.error ? 'rgba(255,0,0, 0.3)' : '#dce4f5'};
  border: solid 1px;
  border-color: ${(props: {error: any}) =>
    props.error ? 'rgba(255,0,0, 0.8)' : '#808080'};
  align-items: center;
  color: ${(props: {error: any}) => (props.error ? '#fff' : '#2b2c2e')};
  font-size: 17px;
  height: 55px;
`;

export const Loading = styled.ActivityIndicator`
  padding-top: 9%;
  padding-bottom: 30%;
`;

export const ViewButton = styled.View`
  align-items: center;
  justify-content: center;
  padding-top: 9%;
  padding-bottom: 35%;
`;

export const Button = styled.TouchableOpacity`
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background-color: #007fff;
  border-radius: 10px;
  height: 50px;
  width: 100%;
`;

export const Text = styled.Text`
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 15px;
`;

export const YupText = styled.Text`
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #f00;
  font-weight: bold;
  font-size: 15px;
  margin-top: 4px;
  margin-bottom: 2%;
`;
