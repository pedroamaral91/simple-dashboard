/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useMemo, Suspense, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { modalCreators, modalSelectors } from '../../../store/state';

const { getIsOpened, getPropsByName } = modalSelectors;
const { modalClear: modalClearAction } = modalCreators;

const ModalGate: React.FC = () => {
  const dispatch = useDispatch();
  const activeModalPropsByName = useSelector(getPropsByName);
  const isAnyModalActive = useSelector(getIsOpened);

  const modalClear = useCallback(() => {
    dispatch(modalClearAction());
  }, [dispatch]);

  const modals = new Map([
    [
      'DisplayErrorsForm',
      lazy(() =>
        import(
          '../../modules/natural-person-register/form-natural-person/modal/display-errors-form'
        ),
      ),
    ],
    [
      'RetornoModal',
      lazy(() =>
        import(
          /* webpackChunkName: "RetornoModal" */
          '../../../components/modals/retorno-modal'
        ),
      ),
    ],
  ]);
  const renderedModal = useMemo(
    () => (
      <>
        {Array.from(activeModalPropsByName)
          .filter(([name]) => modals.has(name))
          .map(([name, props]) => {
            const ModalComponent: any = modals.get(name);
            return (
              <Suspense fallback={<div>loading</div>}>
                <ModalComponent {...props} modalClear={modalClear} />
              </Suspense>
            );
          })}
      </>
    ),
    [activeModalPropsByName, modalClear, modals],
  );
  if (isAnyModalActive) {
    return renderedModal;
  }
  return null;
};

export default ModalGate;
