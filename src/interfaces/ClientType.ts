export interface IClient {
  id: string;
  cpf: string;
  name: string;
  birthDate: string;
  gender: string;
  address: string;
  state: string;
  city: string;
}

export interface IRenderItem {
  item: IClient;
  index: number;
}
