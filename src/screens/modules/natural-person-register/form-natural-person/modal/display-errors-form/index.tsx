import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { modalCreators } from '@store';
import { TemplateModal } from '@components/modals';

import {
  Container,
  ErrorList,
  ErrorItem,
  TypeError,
  ErrorMessage,
} from './styles';

type Error = {
  message: string;
  type: string;
};

type AddressesError = {
  cep: Error;
  numero: Error;
};

type EmailsError = {
  email: Error;
};

type PhonesError = {
  ddd: Error;
  telefone: Error;
};

type GenericError = {
  [key: string]: Error;
};

type GenericErrors = GenericError | GenericError[] | undefined;

interface DisplayErrorsFormProps {
  errorsMessage: {
    addresses: AddressesError[];
    cpf: Error;
    nome: Error;
    rg: Error;
    emails: EmailsError[];
    phones: PhonesError[];
  };
}

const DisplayErrorsForm: React.FC<DisplayErrorsFormProps> = ({
  errorsMessage,
}) => {
  const dispatch = useDispatch();
  const handleClose = useCallback(() => {
    dispatch(modalCreators.modalClose('DisplayErrorsForm'));
  }, [dispatch]);

  const { addresses, emails, phones, ...errors } = errorsMessage;

  const renderedErrors = useCallback(
    (genericErrors: GenericErrors, key: string) => {
      if (Array.isArray(genericErrors)) {
        return genericErrors.map(genericError => {
          const error = Object.entries(genericError);
          return error.map(([errorType, error]) => (
            <ErrorItem key={errorType}>
              <TypeError>
                {errorType}
                :&nbsp;
              </TypeError>
              <ErrorMessage>{error.message}</ErrorMessage>
            </ErrorItem>
          ));
        });
      }
      if (genericErrors !== undefined) {
        return (
          <ErrorItem>
            <TypeError>
              {key}
              :&nbsp;
            </TypeError>
            <ErrorMessage>{genericErrors.message}</ErrorMessage>
          </ErrorItem>
        );
      }
    },
    [],
  );

  const errorsArray = Object.entries(errors);

  return (
    <TemplateModal onClose={handleClose} title="Erros">
      <Container>
        <ErrorList>
          {errorsArray.map(([errorType, error]) => (
            <ErrorItem key={errorType}>
              <TypeError>
                {errorType}
                :&nbsp;
              </TypeError>
              <ErrorMessage>{error.message}</ErrorMessage>
            </ErrorItem>
          ))}
          {renderedErrors(addresses, 'Endereço')}
          {renderedErrors(emails, 'Email')}
          {renderedErrors(phones, 'Telefones')}
        </ErrorList>
      </Container>
    </TemplateModal>
  );
};

export default DisplayErrorsForm;
