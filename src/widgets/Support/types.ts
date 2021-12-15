export interface IStateInput {
  email: string;
  address: string;
  txHash: string;
  problem: string;
  product: string;
  file?: any;
  name: string;
}
export interface IStateInputError {
  email?: string;
  address?: string;
  txHash?: string;
  problem?: string;
  name?: string;
  file?: string;
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
  modalTitle: string;
  modalText: string;
  modalButton: string;
  file: string;
  filePlaceholder: string;
  name: string;
  namePlaceholder: string;
}
