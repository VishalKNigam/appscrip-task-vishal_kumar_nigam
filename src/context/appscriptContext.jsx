"use client";

import { useReducer, createContext, useContext } from "react";

const AppScriptContext = createContext();

const initialState = {
  favouriteProducts: [],
  searchValue: "",
};

function favouriteProducts(state, payload) {
  const { products } = payload;

  return {
    ...state
  };
}

const reducer = (state, action) => {
  switch (action.type) {
    case "favouriteProducts":
      return favouriteProducts(state, action.payload);

    case "setSearchValue":
      return { ...state, searchValue: action.payload.value };

    default:
      throw new Error("Unknown action");
  }
};

const AppScriptContextProvider = ({ children }) => {
  const [{ favouriteProducts, searchValue }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <AppScriptContext.Provider
      value={{
        favouriteProducts,
        searchValue,
        dispatch,
      }}
    >
      {children}
    </AppScriptContext.Provider>
  );
};

function useAppScriptContext() {
  const context = useContext(AppScriptContext);
  if (context === undefined)
    throw new Error("Context was used outside the Context Provider.");
  return context;
}

export { useAppScriptContext, AppScriptContextProvider };
