import Immutable, { Record, Map } from 'immutable';

import { IAddressessForm } from './addresses';
import { IEmail } from './emails';
import { IPhone } from './phones';

export interface ICspf {
  readonly id: string;
  readonly nome: string;
  readonly cpf: string;
  readonly rg: string;
  readonly data_nasc: Date;
  readonly addresses: ReadonlyArray<IAddressessForm>;
  readonly emails: ReadonlyArray<IEmail>;
  readonly phones: ReadonlyArray<IPhone>;
}

export const defaultValues: ICspf = {
  id: '',
  cpf: '',
  data_nasc: new Date(),
  nome: '',
  rg: '',
  addresses: [
    {
      id_cidade: Number.NaN,
      id_uf: Number.NaN,
      id_logradouro: Number.NaN,
      bairro: '',
      complemento: '',
      numero: '',
    },
  ],
  emails: [{ email: '' }],
  phones: [{ ddd: Number.NaN, phone: Number.NaN }],
};

export interface ICspfRecord extends Record<ICspf>, ICspf {}

export class CspfRecord extends Record(defaultValues) {}

export type ICspfByCspfID = Immutable.Map<string, ICspfRecord>;

export interface ICspfCoreInitialState {
  cspf: ICspfByCspfID;
}

export const INITIAL_STATE: ICspfCoreInitialState = {
  cspf: Map(),
};

export const fromJSON = json => {
  const id = json.id !== null ? String(json.id) : defaultValues.id;
  const cpf = json.cpf !== null ? json.cpf : defaultValues.cpf;
  const data_nasc =
    json.data_nasc !== null ? json.data_nasc : defaultValues.data_nasc;
  const nome = json.nome !== null ? json.nome : defaultValues.nome;
  const rg = json.rg !== null ? json.rg : defaultValues.rg;
  const addresses =
    json.addresses !== null ? json.addresses : defaultValues.addresses;
  const emails = json.emails !== null ? json.emails : defaultValues.emails;
  const phones = json.phones !== null ? json.phones : defaultValues.phones;

  return {
    id,
    cpf,
    data_nasc,
    nome,
    rg,
    addresses,
    emails,
    phones,
  } as Readonly<ICspf>;
};
