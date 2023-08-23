import React from "react";
import { IProduct } from "../interfaces/IProduct";

interface ProductProviderProps{
    children: React.ReactNode;
}
interface IProductContext {
    products: Map<string,IProduct>;
    addProduct : (obj: IProduct) => void;
    removeProduct: (obj: IProduct) => void;
}
const ProductContext = React.createContext<IProductContext>({
    products: new Map(),
    addProduct: () =>{
        console.log("add product");
    },
    removeProduct: () =>{
        console.log("remove product");
    }

})
const ProductProvider = (props: ProductProviderProps): JSX.Element => {
    const [products, setProducts]= React.useState<Map<string,IProduct>>(new Map());

    const addProduct = (obj: IProduct)=> {

    }
    const removeProduct = (obj: IProduct)=> {

    }
  return (
    <ProductContext.Provider
    value={{
        products,
        addProduct,
        removeProduct
    }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}
