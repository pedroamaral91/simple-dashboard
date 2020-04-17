import React, { useCallback, useEffect } from 'react';
import { useForm, Controller, FormContext } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import InputText from '@components/inputs/input-text';
import InputDatePicker from '@components/inputs/input-date';
import { cspfSelectors, cspfCreators, modalCreators } from '@store';

import ButtonLoader from '@components/buttons/button-loader';
import { InputMask, InputSelect } from '@components/inputs';

import { Form, Row, ButtonRow, ButtonSave } from './styles';
import { naturalPersonSchema } from './state/validation-schema';
import FormAddress from './form-address';
import defaultValues from './state/default-values';
import FormEmail from './form-email';
import FormPhones from './form-phones';

const { getIsLoading } = cspfSelectors.form;
const { saveCspfAsync } = cspfCreators.form;

const FormNaturalPerson: React.FC = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const methods = useForm({
    defaultValues,
    validationSchema: naturalPersonSchema,
  });

  const onSubmit = useCallback(
    data => {
      console.log(data);
      dispatch(saveCspfAsync(data));
    },
    [dispatch],
  );

  useEffect(() => {
    if (Object.entries(methods.errors).length) {
      dispatch(
        modalCreators.modalOpen('DisplayErrorsForm', {
          errorsMessage: methods.errors,
        }),
      );
    }
  }, [methods.errors, dispatch]);

  return (
    <FormContext {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <Row col={3}>
          <InputText
            ref={methods.register}
            name="nome"
            error={methods.errors.nome}
            label="Nome"
          />
          <Controller
            as={InputMask}
            control={methods.control}
            mask="cpf"
            error={methods.errors.cpf}
            name="cpf"
            label="CPF"
          />
          <InputText
            error={methods.errors.rg}
            ref={methods.register}
            name="rg"
            label="RG"
          />
        </Row>
        <Row col={2}>
          <Controller
            as={InputDatePicker}
            control={methods.control}
            valueName="selected"
            onChange={([selected]) => selected}
            error={methods.errors.data_nasc}
            name="data_nasc"
            label="Data de Nascimento"
          />
          <InputSelect
            label="Sexo"
            name="sexo"
            options={[
              { value: 'M', label: 'Masculino' },
              { value: 'F', label: 'Feminino' },
            ]}
            ref={methods.register}
          />
        </Row>
        <ButtonRow>
          <FormAddress />
          <FormEmail />
          <FormPhones />
        </ButtonRow>
        <ButtonSave>
          <ButtonLoader isLoading={isLoading} label="Salvar" type="submit" />
        </ButtonSave>
      </Form>
    </FormContext>
  );
};

export default FormNaturalPerson;
