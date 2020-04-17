import React from 'react';
import { ArrayField } from 'react-hook-form';

import TemplateModal from '@components/modals/template-modal';
import Collapsible from '@components/collapsible';

import { ButtonCircleIcon } from '@components/buttons';
import { theme } from '@styles/index';
import { Container, FormContent, ModalContent, Content } from './styles';
import Form from './components/form/form';

interface IModalFormAddress {
  register: any;
  closeModal: () => void;
  isOpened: boolean;
  handleAppend(): void;
  handleRemove(index: number): void;
  fields: Partial<ArrayField<Record<string, any>, 'id'>>;
}

const ModalFormAddress: React.FC<IModalFormAddress> = ({
  register,
  closeModal,
  isOpened,
  handleRemove,
  handleAppend,
  fields,
}) => {
  return (
    <Container isOpened={isOpened}>
      <TemplateModal onClose={closeModal}>
        <ModalContent>
          {fields.map((field, index) => (
            <Content key={field.id}>
              <Collapsible title={`Endereços ${index + 1}`} maxHeight="433px">
                <FormContent>
                  <Form index={index} register={register} />
                </FormContent>
              </Collapsible>
              <ButtonCircleIcon
                iconName="FaPlus"
                color={theme.semantic.primary}
                onClick={handleAppend}
              />
              <ButtonCircleIcon
                iconName="FaMinus"
                color={theme.semantic.danger}
                onClick={() => handleRemove(index)}
              />
            </Content>
          ))}
        </ModalContent>
      </TemplateModal>
    </Container>
  );
};

export default ModalFormAddress;
