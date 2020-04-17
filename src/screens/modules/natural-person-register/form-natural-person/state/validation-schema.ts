import * as yup from 'yup';

export const naturalPersonSchema = yup.object().shape({
  nome: yup.string().required('Campo requerido'),
  cpf: yup
    .string()
    .required('Campo requerido')
    .min(11, 'Mínimo 11 dígitos')
    .max(11, 'Máximo 11 dígitos')
    .transform((_, o) => o.replace(/\D/g, '')),
  rg: yup.string().required('Campo requerido'),
  data_nasc: yup.date().required('Campo requerido'),
  addresses: yup
    .array()
    .of(
      yup.object().shape({
        cep: yup
          .string()
          .required('Campo requerido')
          .transform((_, o) => o.replace(/\D/g, '')),
        bairro: yup.string().required('Campo requerido'),
        logradouro: yup.string().required('Campo requerido'),
        numero: yup.string().required('Campo requerido'),
      }),
    )
    .required('Endereço requerido'),
  emails: yup
    .array()
    .of(
      yup.object().shape({
        email: yup
          .string()
          .email('Email inválido')
          .required('Campo Requerido'),
      }),
    )
    .required('Email requerido'),
  phones: yup
    .array()
    .of(
      yup.object().shape({
        ddd: yup
          .number()
          .typeError('Campo requerido')
          .required('Campo requerido'),
        telefone: yup
          .number()
          .typeError('Campo requerido')
          .required('Campo requerido'),
      }),
    )
    .required('Telefone requerido'),
});
