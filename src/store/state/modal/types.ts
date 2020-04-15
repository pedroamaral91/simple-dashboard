export enum ModalTypes {
  CLEAR = '@modal/CLEAR',
  OPEN = '@modal/OPEN',
  CLOSE = '@modal/CLOSE',
}
type props = Record<string, any> | null;
export type ModalState = {
  readonly propsByName: Map<string, props>;
};

// Action Types
interface ModalClearAction {
  type: typeof ModalTypes.CLEAR;
}

interface ModalOpenAction {
  type: typeof ModalTypes.OPEN;
  payload: {
    name: string;
    props: Record<string, any>;
  };
}

interface ModalCloseAction {
  type: typeof ModalTypes.CLOSE;
  payload: {
    name: string;
  };
}

export type ModalActions =
  | ModalClearAction
  | ModalOpenAction
  | ModalCloseAction;
