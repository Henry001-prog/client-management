import React, {useEffect, useRef} from 'react';
import {Alert, TextInput as RNTextInput, TextInputProps} from 'react-native';
import {
  KeyboardAvoidingView,
  ScrollView,
  FormRow,
  TextInput,
  Loading,
  ViewButton,
  Button,
  Text,
  YupText,
} from './styles';
import {useTheme} from 'styled-components';
import {useToast} from 'react-native-styled-toast';

import {useRecoilState, useResetRecoilState} from 'recoil';
import {
  isLoading,
  setFormAtom,
  saveClient,
  IClientForm,
  clear,
} from '../../store/clientFormRecoil';
import {IClient} from '../../interfaces/ClientType';
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {searchClient} from '../../store/clientRecoil';

const schema = Yup.object()
  .shape({
    cpf: Yup.string()
      .required('Informe o CPF')
      .matches(
        /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
        'O CPF deve seguir este formato 000.000.000-00',
      ),
    name: Yup.string()
      .required('Informe o nome')
      .matches(/[A-Za-z]/, 'O nome deve conter somente caracteres')
      .max(40, 'Deve ter no máximo 40 caracteres'),
    birthDate: Yup.string()
      .required('Informe a data de nascimento')
      .matches(
        /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/,
        'A data deve conter dia, mês e ano, neste formato dd/mm/yyyy',
      ),
    gender: Yup.string()
      .required('Informe o gênero')
      .matches(/[A-Za-z]/, 'O gênero deve conter somente caracteres')
      .max(9, 'Deve ter no máximo 9 caracteres'),
    address: Yup.string()
      .required('Informe o endereço')
      .matches(
        /[!@$%^&*(),?":{}|<>]/,
        'O endereço deve ter o nome da rua e uma vígula seguida do número da casa',
      )
      .max(38, 'Deve ter no máximo 38 caracteres'),
    state: Yup.string()
      .required('Informe o estado')
      .matches(/[A-Za-z]/, 'O nome do estado deve conter somente caracteres')
      .max(32, 'Deve ter no máximo 32 caracteres'),
    city: Yup.string()
      .required('Informe a cidade')
      .matches(/[A-Za-z]/, 'O nome da cidade deve conter somente caracteres')
      .max(38, 'Deve ter no máximo 38 caracteres'),
  })
  .required();

type StackParamsList = {
  ClientForm: {
    client: IClient;
  };
};

type StackParamsListClients = {
  Clients: undefined;
};

export type RootStackParamList = {
  ClientForm: undefined;
};

export type FormScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ClientForm'
>;

export type ClientScreenNavigationProp = StackNavigationProp<
  StackParamsListClients,
  'Clients'
>;

export default function ClientFormScreen() {
  const [loading, setLoading] = useRecoilState<boolean>(isLoading);
  const [, setClearState] = useRecoilState<boolean>(clear);
  const [clientForm, setClientForm] = useRecoilState<IClientForm>(setFormAtom);
  const route = useRoute<RouteProp<StackParamsList, 'ClientForm'>>();

  const theme = useTheme();
  const {toast} = useToast();
  const {navigate} = useNavigation<ClientScreenNavigationProp>();
  const resetForm = useResetRecoilState(setFormAtom);
  const resetClient = useResetRecoilState(searchClient);

  const input2Ref = useRef<RNTextInput & TextInputProps>(null);
  const input3Ref = useRef<RNTextInput & TextInputProps>(null);
  const input4Ref = useRef<RNTextInput & TextInputProps>(null);
  const input5Ref = useRef<RNTextInput & TextInputProps>(null);
  const input6Ref = useRef<RNTextInput & TextInputProps>(null);
  const input7Ref = useRef<RNTextInput & TextInputProps>(null);

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      cpf: clientForm.cpf,
      name: clientForm.name,
      birthDate: clientForm.birthDate,
      gender: clientForm.gender,
      address: clientForm.address,
      state: clientForm.state,
      city: clientForm.city,
    },
  });

  useEffect(() => {
    setClearState(false);
    const {params} = route;
    if (params && params.client) {
      const clientToEdit = params.client;
      setClientForm(clientToEdit);
    } else {
      let defaults = {
        cpf: clientForm.cpf,
        name: clientForm.name,
        birthDate: clientForm.birthDate,
        gender: clientForm.gender,
        address: clientForm.address,
        state: clientForm.state,
        city: clientForm.city,
      };
      reset(defaults);
      resetForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route]);

  useEffect(() => {
    reset(clientForm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientForm]);

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <KeyboardAvoidingView style={{flex: 1}} enabled>
      <ScrollView
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{padding: 10}}
        keyboardShouldPersistTaps={'handled'}
        showsVerticalScrollIndicator={false}>
        {clientForm && (
          <>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <FormRow>
                  <TextInput
                    {...register('cpf')}
                    placeholder="Digite o CPF"
                    placeholderTextColor={errors.cpf ? '#fff' : '#808080'}
                    returnKeyType="next"
                    blurOnSubmit={false}
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    error={errors.cpf ? true : false}
                    onSubmitEditing={() => input2Ref.current!.focus()}
                  />
                  <YupText>{errors.cpf?.message}</YupText>
                </FormRow>
              )}
              name="cpf"
            />
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <FormRow>
                  <TextInput
                    {...register('name')}
                    placeholder="Digite o nome"
                    placeholderTextColor={errors.name ? '#fff' : '#808080'}
                    ref={input2Ref}
                    returnKeyType="next"
                    blurOnSubmit={false}
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    error={errors.name ? true : false}
                    onSubmitEditing={() => input3Ref.current!.focus()}
                  />
                  <YupText>{errors.name?.message}</YupText>
                </FormRow>
              )}
              name="name"
            />
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <FormRow>
                  <TextInput
                    {...register('birthDate')}
                    placeholder="Data de nascimento"
                    placeholderTextColor={errors.birthDate ? '#fff' : '#808080'}
                    ref={input3Ref}
                    returnKeyType="next"
                    blurOnSubmit={false}
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    error={errors.birthDate ? true : false}
                    onSubmitEditing={() => input4Ref.current!.focus()}
                  />
                  <YupText>{errors.birthDate?.message}</YupText>
                </FormRow>
              )}
              name="birthDate"
            />
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <FormRow>
                  <TextInput
                    {...register('gender')}
                    placeholder="Digite o gênero"
                    placeholderTextColor={errors.gender ? '#fff' : '#808080'}
                    ref={input4Ref}
                    returnKeyType="next"
                    blurOnSubmit={false}
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    error={errors.gender ? true : false}
                    onSubmitEditing={() => input5Ref.current!.focus()}
                  />
                  <YupText>{errors.gender?.message}</YupText>
                </FormRow>
              )}
              name="gender"
            />
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <FormRow>
                  <TextInput
                    {...register('address')}
                    placeholder="Digite o endereço"
                    placeholderTextColor={errors.address ? '#fff' : '#808080'}
                    ref={input5Ref}
                    returnKeyType="next"
                    blurOnSubmit={false}
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    error={errors.address ? true : false}
                    onSubmitEditing={() => input6Ref.current!.focus()}
                  />
                  <YupText>{errors.address?.message}</YupText>
                </FormRow>
              )}
              name="address"
            />
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <FormRow>
                  <TextInput
                    {...register('state')}
                    placeholder="Digite o Estado"
                    placeholderTextColor={errors.state ? '#fff' : '#808080'}
                    ref={input6Ref}
                    returnKeyType="next"
                    blurOnSubmit={false}
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    error={errors.state ? true : false}
                    onSubmitEditing={() => input7Ref.current!.focus()}
                  />
                  <YupText>{errors.state?.message}</YupText>
                </FormRow>
              )}
              name="state"
            />
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <FormRow>
                  <TextInput
                    {...register('city')}
                    placeholder="Digite a cidade"
                    placeholderTextColor={errors.city ? '#fff' : '#808080'}
                    ref={input7Ref}
                    returnKeyType="next"
                    blurOnSubmit={false}
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    error={errors.city ? true : false}
                    onSubmitEditing={handleSubmit(async data => {
                      setLoading(true);
                      try {
                        await saveClient(data, theme, toast, setLoading);
                        resetForm();
                        resetClient();
                        navigate('Clients');
                      } catch (error: any) {
                        Alert.alert('Deu erro: ', error);
                      } finally {
                        setLoading(false);
                      }
                    })}
                  />
                  {<YupText>{errors.city?.message}</YupText>}
                </FormRow>
              )}
              name="city"
            />
          </>
        )}

        {loading ? (
          <Loading color="light-blue" size="large" />
        ) : (
          <ViewButton>
            <Button
              onPress={handleSubmit(async data => {
                setLoading(true);
                try {
                  await saveClient(data, theme, toast, setLoading);
                  resetForm();
                  setClearState(true);
                  resetClient();
                  navigate('Clients');
                } catch (error: any) {
                  // Alert.alert('Deu erro: ', error);
                } finally {
                  setLoading(false);
                }
              })}>
              <Text>Salvar</Text>
            </Button>
          </ViewButton>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
