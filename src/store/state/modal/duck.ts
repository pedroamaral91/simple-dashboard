import { action as Action } from 'typesafe-actions';
import { Reducer } from 'redux';
import { ModalTypes, ModalState, ModalActions } from './types';

const INITIAL_STATE: ModalState = {
  propsByName: new Map(),
};

export const modalCreators = {
  modalClear: () => Action(ModalTypes.CLEAR),
  modalOpen: (name: string, props?: Record<string, any>) =>
    Action(ModalTypes.OPEN, { name, props }),
  modalClose: (name: string) => Action(ModalTypes.CLOSE, { name }),
};

const modalReducer: Reducer<ModalState, ModalActions> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case ModalTypes.OPEN:
      return {
        ...state,
        propsByName: state.propsByName.set(
          action.payload.name,
          action.payload.props,
        ),
      };
    case ModalTypes.CLOSE:
      state.propsByName.delete(action.payload.name);
      return {
        ...state,
      };
    case ModalTypes.CLEAR:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};

export default modalReducer;
