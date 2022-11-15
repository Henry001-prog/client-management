// @ts-ignore
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type TextView = {
  paddingRight: string;
  paddingLeft: number;
};

export const HeaderContainer = styled.View.attrs({
  elevation: 2,
})`
  height: 90px;
  background-color: #fff;
`;

export const Container = styled.View.attrs({
  elevation: 2,
})`
  width: 100%;
  background-color: #fff;
  padding-right: 15px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 90px;
`;

export const TextView = styled.View`
  justify-content: center;
  align-items: flex-start;
  padding-left: ${(props: TextView) => (props.paddingLeft ? 0 : '6%')};
  padding-right: ${(props: TextView) => (props.paddingRight ? '20%' : 0)};
  flex: 1;
`;

export const Text = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: #000;
`;

export const Icon = styled(Ionicons)``;

export const ButtonAdd = styled.TouchableOpacity`
  padding-top: 5px;
  padding-right: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonSearch = styled.TouchableOpacity`
  padding-top: 5px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonClose = styled.TouchableOpacity`
  padding-top: 1px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
