import React, { createContext, useContext, useReduce } from "react";

// prepares the data layer
export const StateContext = createContext();

// wrap our app and provide the data layer to every component

export const StateProvider = ({ reducer, initialState, children }) => {
  <StateContext.Provider value={useReducer(reducer, intitialState)}>
    {children}
  </StateContext.Provider>;
};
