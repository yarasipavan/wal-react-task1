//import createContext Obj
import { productContext } from "./productContext";

import { useState } from "react";

//function
function ProductStore({ children }) {
  //state
  let [products, setProducts] = useState([]);

  //return store
  return (
    <productContext.Provider value={[products, setProducts]}>
      {children}
    </productContext.Provider>
  );
}

export default ProductStore;
