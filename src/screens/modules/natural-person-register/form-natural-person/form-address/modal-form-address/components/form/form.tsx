import React, { useEffect, useCallback } from 'react';
import { useFormContext, Controller } from 'react-hook-form';

import { InputText, InputMask } from '@components/inputs';
import { useDebounce } from '@hooks';
import api from '@api';
import { toast } from 'react-toastify';

type FormProps = {
  index: number;
  register: any;
};

const Form: React.FC<FormProps> = ({ index, register }) => {
  const { watch, control, setValue } = useFormContext();

  const cep = watch(`addresses[${index}].cep`);

  const searchTerm = useDebounce(cep, 1000)?.replace(/\D/g, '');

  const searchCep = useCallback(async () => {
    try {
      const response = await api.post('cep', { cep: searchTerm });
      setValue(`adressses[${index}].id`, response.data.id);
      setValue(`addresses[${index}].bairro`, response.data.bairro);
      setValue(`addresses[${index}].logradouro`, response.data.logradouro);
      setValue(`addresses[${index}].cidade`, response.data.cidade.nome);
      setValue(`addresses[${index}].estado`, response.data.uf.nome_abreviado);
      setValue(`addresses[${index}].id_logradouro`, response.data.id);
    } catch (err) {
      toast.error('Cep não localizado.');
    }
  }, [setValue, searchTerm, index]);

  useEffect(() => {
    if (searchTerm?.length === 8) searchCep();
  }, [searchCep, searchTerm]);

  return (
    <>
      <Controller
        control={control}
        as={InputMask}
        name={`addresses[${index}].cep`}
        mask="cep"
        label="CEP"
      />
      <InputText
        name={`addresses[${index}].bairro`}
        label="Bairro"
        ref={register()}
        disabled
      />
      <InputText
        name={`addresses[${index}].logradouro`}
        label="Logradouro"
        ref={register()}
        disabled
      />
      <InputText
        name={`addresses[${index}].numero`}
        label="Número"
        ref={register()}
      />
      <InputText
        name={`addresses[${index}].complemento`}
        label="Complemento"
        ref={register()}
      />
      <InputText
        name={`addresses[${index}].estado`}
        label="Estado"
        ref={register()}
        disabled
      />
      <InputText
        name={`addresses[${index}].cidade`}
        label="Cidade"
        ref={register()}
        disabled
      />
    </>
  );
};

export default Form;
