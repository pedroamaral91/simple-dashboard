import React, { createContext, useReducer } from 'react';

interface InitialState {
  showAside: boolean;
}

const initialState = {
  showAside: true,
};

interface ContextI {
  state: InitialState;
  dispatch: React.Dispatch<any>;
}

const contextState = {
  state: initialState,
  dispatch: () => null,
};

type ActionTemplate = {
  type: 'SHOW_ASIDE' | 'HIDE_ASIDE';
};

const reducer = (state: InitialState, action: ActionTemplate) => {
  switch (action.type) {
    case 'SHOW_ASIDE':
      return { ...state, showAside: true };
    case 'HIDE_ASIDE':
      return { ...state, showAside: false };
    default:
      return state;
  }
};

const TemplateContext = createContext<ContextI>(contextState);

interface TemplateProviderProps {
  children: React.ReactNode;
}

const TemplateProvider: React.FC<TemplateProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <TemplateContext.Provider value={value}>
      {children}
    </TemplateContext.Provider>
  );
};

export { TemplateProvider, TemplateContext };
