// import React, { useEffect } from 'react';
// import {
//   ClientContainer,
//   Container,
//   ViewListContainer,
//   ViewList,
//   ContainerList,
//   ViewButton,
//   ButtonLeft,
//   ButtonRight,
//   ViewClient,
//   CpfText,
//   NameText,
//   ViewLoading,
//   Loading,
//   BirthDateText,
//   ViewBottom,
//   GenderText,
//   AddressText,
//   StateText,
//   CityText,
// } from './styles';
// import Feather from 'react-native-vector-icons/Feather';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// import {
//   listClients,
//   clientsState,
//   isLoading,
//   searchClient,
// } from '../../store/clientRecoil';

// import { useRecoilState } from 'recoil';
// import { IClient, IRenderItem } from '../../interfaces/ClientInterfaces';
// import { useIsFocused, useNavigation } from '@react-navigation/native';
// import {
//   ClientFormScreenNavigationProp,
//   DeleteClientScreenNavigationProp,
// } from '../../interfaces/NavigationInterfaces';
// import { Header } from '../../components/Header';

// export default function ClientScreen() {
//   const [clients, setClients] = useRecoilState<IClient[] | undefined>(
//     clientsState,
//   );
//   const [searchResult] = useRecoilState<IClient | undefined>(searchClient);
//   const [loading, setLoading] = useRecoilState<boolean>(isLoading);

//   const navigation = useNavigation<DeleteClientScreenNavigationProp>();
//   const { navigate } = useNavigation<ClientFormScreenNavigationProp>();
//   const isFocused = useIsFocused();

//   useEffect(() => {
//     const getData = async () => {
//       setLoading(true);
//       const result: IClient[] | undefined = await listClients();
//       if (result) {
//         setClients(result);
//       } else {
//         setClients([]);
//       }

//       setLoading(false);
//     };

//     if (isFocused) getData();
//   }, [isFocused, searchResult, setLoading, setClients]);

//   return (
//     <ClientContainer>
//       {Object.is(clients, []) || loading ? (
//         <ViewLoading>
//           <Loading size="large" color="light-blue" />
//         </ViewLoading>
//       ) : searchResult?.id === '' ? (
//         <ViewListContainer>
//           <Header />
//           <ViewList
//             contentContainerStyle={{ justifyContent: 'center' }}
//             data={clients}
//             renderItem={({ item, index }: IRenderItem) => (
//               <ContainerList key={index}>
//                 <ViewButton>
//                   <ButtonLeft
//                     onPress={() =>
//                       navigation.navigate('DeleteClient', { client: item })
//                     }>
//                     <Ionicons name="trash-outline" size={32} color="#FF0000" />
//                   </ButtonLeft>
//                 </ViewButton>

//                 <ButtonRight
//                   onPress={() =>
//                     navigate('ClientFormScreen', { client: item })
//                   }>
//                   <Feather name="edit-2" size={30} color="#32CD32" />
//                 </ButtonRight>

//                 <ViewClient>
//                   <CpfText>{item!.cpf}</CpfText>
//                   <NameText>{item!.name}</NameText>
//                   <BirthDateText>{item!.birthDate}</BirthDateText>
//                   <GenderText>{item!.gender}</GenderText>
//                   <AddressText>{item!.address}</AddressText>
//                   <StateText>{item!.state}</StateText>
//                   <CityText>{item!.city}</CityText>
//                 </ViewClient>
//               </ContainerList>
//             )}
//             keyExtractor={(item: IClient, index: number) => index.toString()}
//             numColumns={1}
//             showsVerticalScrollIndicator={false}
//             ListFooterComponent={() => <ViewBottom />}
//           />
//         </ViewListContainer>
//       ) : !loading && searchResult !== null ? (
//         <>
//           <Header />
//           <Container>
//             <ContainerList
//               style={{ height: '35%', width: '90%', marginBottom: 50 }}>
//               <ViewButton>
//                 <ButtonLeft
//                   onPress={() =>
//                     navigation.navigate('DeleteClient', {
//                       client: searchResult,
//                     })
//                   }>
//                   <Ionicons name="trash-outline" size={32} color="#FF0000" />
//                 </ButtonLeft>
//               </ViewButton>

//               <ButtonRight
//                 style={{ marginBottom: 20 }}
//                 onPress={() =>
//                   navigate('ClientFormScreen', { client: searchResult })
//                 }>
//                 <Feather name="edit-2" size={30} color="#32CD32" />
//               </ButtonRight>

//               <ViewClient>
//                 <CpfText>{searchResult!.cpf ?? ''}</CpfText>
//                 <NameText>{searchResult!.name ?? ''}</NameText>
//                 <BirthDateText>{searchResult!.birthDate ?? ''}</BirthDateText>
//               </ViewClient>
//             </ContainerList>
//           </Container>
//         </>
//       ) : null}
//     </ClientContainer>
//   );
// }
