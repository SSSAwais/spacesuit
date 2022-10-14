import { createContext, useReducer } from "react";

export const provideContent = createContext();

const initialState = {
  testing: false,
  sidebarToggle: true,

};
const reducerFunction = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return {
        ...state,
        testing: !state.testing,
      };

    case "SIDEBARTOGGLE":
      return {
        ...state,
        sidebarToggle: !state.sidebarToggle,
      };



    default:
      return state;
  }
};

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  return (
    <provideContent.Provider value={{ state, dispatch }}>
      {children}
    </provideContent.Provider>
  );
};
