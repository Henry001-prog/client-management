import { Dimensions, TextInput as ReactTextInput } from 'react-native';
// @ts-ignore
import styled from 'styled-components/native';

type IError = {
  error: string;
};

type IMargin = {
  marginLeft: string;
};

const width = Dimensions.get('window').width;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView``;

export const ScrollView = styled.ScrollView`
  padding-top: 10%;
`;

export const FormRow = styled.View`
  width: 100%;
  margin: 5px 0px 5px 0px;
`;

export const InputFormRow = styled.View`
  flex-direction: row;
  margin: 5px 0px 5px 0px;
`;

export const Form = styled.View`
  width: 48%;
  margin: 5px 0px 5px 0px;
  margin-left: ${(props: IMargin) => (props.marginLeft ? '4%' : 0)};
`;

export const TextInput = styled(ReactTextInput)`
  padding-left: 15px;
  padding-bottom: 12px;
  width: ${width < 321 ? '285px' : '100%'};
  border-radius: 10px;
  background-color: ${(props: IError) =>
    props.error ? 'rgba(255,0,0, 0.3)' : '#dce4f5'};
  border: solid 1px;
  border-color: ${(props: IError) =>
    props.error ? 'rgba(255,0,0, 0.8)' : '#808080'};
  align-items: center;
  color: ${(props: IError) => (props.error ? '#fff' : '#4F4F4F')};
  font-size: 17px;
  height: 55px;
`;

export const Label = styled.Text`
  font-size: 15px;
  font-weight: 700;
  line-height: 16px;
  color: #808080;
  margin-bottom: 10px;
`;

export const RowTextInput = styled(ReactTextInput)`
  padding-left: 15px;
  padding-bottom: 12px;
  border-radius: 10px;
  background-color: ${(props: IError) =>
    props.error ? 'rgba(255,0,0, 0.3)' : '#dce4f5'};
  border: solid 1px;
  border-color: ${(props: IError) =>
    props.error ? 'rgba(255,0,0, 0.8)' : '#808080'};
  align-items: center;
  color: ${(props: IError) => (props.error ? '#fff' : '#4F4F4F')};
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
  padding-bottom: 20%;
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
  margin-top: ${(props: IError) => (props.error ? '4px' : 0)};
  margin-bottom: ${(props: IError) => (props.error ? '3%' : 0)};
`;
