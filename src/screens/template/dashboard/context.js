import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  showAside: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_ASIDE':
      return { ...state, showAside: true };
    case 'HIDE_ASIDE':
      return { ...state, showAside: false };
    default:
      return state;
  }
};

const TemplateContext = createContext(initialState);

const TemplateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <TemplateContext.Provider value={value}>
      {children}
    </TemplateContext.Provider>
  );
};

TemplateProvider.propTypes = {
  children: PropTypes.any,
};

export { TemplateProvider, TemplateContext };
