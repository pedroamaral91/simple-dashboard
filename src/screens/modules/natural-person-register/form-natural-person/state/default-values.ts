export const addressessDefaultValue = {
  id: '',
  cidade: '',
  estado: '',
  bairro: '',
  logradouro: '',
  cep: '',
  numero: '',
};
export const emailDefaultValue = {
  email: '',
};

export const phonesDefaultValue = {
  ddd: '',
  telefone: '',
};

export default {
  nome: '',
  cpf: '',
  rg: '',
  data_nasc: new Date(),
  addresses: [addressessDefaultValue],
  emails: [emailDefaultValue],
  phones: [phonesDefaultValue],
};
