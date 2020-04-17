import React, { useRef, useEffect } from 'react';
import { ArrayField } from 'react-hook-form';

import TemplateModal from '@components/modals/template-modal';
import InputText from '@components/inputs/input-text';
import { ButtonCircleIcon } from '@components/buttons';
import { theme } from '@styles/index';

import { Container, ModalContent, Content } from './styles';

interface ModalFormPhonesProps {
  register: any;
  closeModal: () => void;
  isOpened: boolean;
  handleAppend(): void;
  handleRemove(index: number): void;
  fields: Partial<ArrayField<Record<string, any>, 'id'>>;
}

const ModalFormPhones: React.FC<ModalFormPhonesProps> = ({
  register,
  closeModal,
  isOpened,
  handleRemove,
  handleAppend,
  fields,
}) => {
  const dddRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (dddRef.current !== null) {
      dddRef.current.focus();
    }
  }, [isOpened]);
  return (
    <Container isOpened={isOpened}>
      <TemplateModal onClose={closeModal}>
        <ModalContent>
          <Content>
            {fields.map((field, index) => (
              <React.Fragment key={field.id}>
                <InputText
                  label="DDD"
                  name={`phones[${index}].ddd`}
                  ref={e => {
                    dddRef.current = e;
                    register(e);
                  }}
                />
                <InputText
                  label="Telefone"
                  name={`phones[${index}].telefone`}
                  ref={register()}
                />
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
              </React.Fragment>
            ))}
          </Content>
        </ModalContent>
      </TemplateModal>
    </Container>
  );
};

export default ModalFormPhones;
