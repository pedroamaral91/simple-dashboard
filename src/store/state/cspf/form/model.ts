export interface ICspfFormInitialState {
  cspfID: string;
  isLoading: boolean;
  createFinalizationStatus: 'pristine' | 'success' | 'fail';
}

export const INITIAL_STATE: ICspfFormInitialState = {
  createFinalizationStatus: 'pristine',
  isLoading: false,
  cspfID: '',
};
