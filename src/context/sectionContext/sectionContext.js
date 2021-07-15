import React, { createContext, useReducer, useContext } from 'react';
import propTypes from 'prop-types';
import sectionReducer, { initialState } from './sectionReducer';

const SectionContext = createContext();
const SectionContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sectionReducer, initialState);
  return (
    <SectionContext.Provider value={{state, dispatch}}>
      {children}
    </SectionContext.Provider>
  );
};

SectionContextProvider.propTypes = {
  children: propTypes.node.isRequired
}
// Dispatch Definition
export const useSectionDispatch = () => {
  const { dispatch } = useContext(SectionContext);
  return dispatch;
};

// UseState Definition
export const useSectionState = () => {
  const { state } = useContext(SectionContext);
  return state;
};

export default SectionContextProvider;