import React, { useContext, useReducer, createContext } from "react";
import SingleProductReducer from "./SingleProductReducer";

const SingleProductContext = createContext();
const SingleProductContextDispatcher = createContext();

const SingleProductProvider = ({ children }) => {
  const [SingleProduct, dispatch] = useReducer(SingleProductReducer, {});

  return (
    <SingleProductContext.Provider value={SingleProduct}>
      <SingleProductContextDispatcher.Provider value={dispatch}>
        {children}
      </SingleProductContextDispatcher.Provider>
    </SingleProductContext.Provider>
  );
};

export default SingleProductProvider;

export const useProduct = () => useContext(SingleProductContext);
export const useProductActions = () =>
  useContext(SingleProductContextDispatcher);
