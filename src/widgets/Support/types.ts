export interface IStateInput {
  email: string;
  address: string;
  txHash: string;
  problem: string;
  product: string;
  networks: string;
  file?: any;
}
export interface IStateInputError {
  email?: string;
  address?: string;
  txHash?: string;
  problem?: string;
}

export interface ITexts {
  product: string;
  problem: string;
  email: string;
  address: string;
  txHash: string;
  button: string;
  problemPlaceholder: string;
  emailPlaceholder: string;
  addressPlaceholder: string;
  txHashPlaceholder: string;
  title: string;
  note: string;
  networks: string;
  modalTitle: string;
  modalText: string;
  modalButton: string;
  file: string;
  filePlaceholder: string;
}
