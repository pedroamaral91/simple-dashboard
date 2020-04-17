import React, { useRef, useEffect } from 'react';
import { ArrayField } from 'react-hook-form';

import TemplateModal from '@components/modals/template-modal';
import InputText from '@components/inputs/input-text';
import { ButtonCircleIcon } from '@components/buttons';
import { theme } from '@styles/index';

import { Container, ModalContent, Content } from './styles';

interface ModalFormEmailProps {
  register: any;
  closeModal: () => void;
  isOpened: boolean;
  handleAppend(): void;
  handleRemove(index: number): void;
  fields: Partial<ArrayField<Record<string, any>, 'id'>>;
}

const ModalFormEmail: React.FC<ModalFormEmailProps> = ({
  register,
  closeModal,
  isOpened,
  handleRemove,
  handleAppend,
  fields,
}) => {
  const emailRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (emailRef.current !== null) {
      emailRef.current.focus();
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
                  label="Email"
                  name={`emails[${index}].email`}
                  ref={e => {
                    emailRef.current = e;
                    register(e);
                  }}
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

export default ModalFormEmail;
