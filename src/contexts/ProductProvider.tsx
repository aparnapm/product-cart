import React from "react";
import { IProduct } from "../interfaces/IProduct";

interface ProductProviderProps{
    children: React.ReactNode;
}
interface IProductContext {
    products: Map<string,IProduct>;
    addProduct : (obj: IProduct) => void;
    removeProduct: (obj: IProduct) => void;
    totalPrice: number;
    totalDiscount:  number;
}
const ProductContext = React.createContext<IProductContext>({
    products: new Map(),
    addProduct: () =>{
        console.log("add product");
    },
    removeProduct: () =>{
        console.log("remove product");
    },
    totalPrice: 0,
    totalDiscount:0
})

const ProductProvider = (props: ProductProviderProps): JSX.Element => {
    const [products]= React.useState<Map<string,IProduct>>(new Map());
    const [totalPrice, setTotalPrice]=React.useState<number>(0);
    const [totalDiscount, setTotalDiscount]=React.useState<number>(0);

    const addProduct = (obj: IProduct)=> {
        console.log("added product", obj)
        if(!products.has(obj.id)){
            setTotalPrice(totalPrice+ obj.price);
            setTotalDiscount(totalDiscount+ obj.discountPercentage);
            products.set(obj.id, obj);
        }
    }
    const removeProduct = (obj: IProduct)=> {
        console.log("removed product", obj)
        if(products.has(obj.id)){
            setTotalPrice(totalPrice-obj.price);
            setTotalDiscount(totalDiscount-obj.discountPercentage);
            products.delete(obj.id);
        }
    }

  return (
    <ProductContext.Provider
    value={{
        products,
        addProduct,
        removeProduct,
        totalDiscount,
        totalPrice
    }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}

const useProductContext = (): IProductContext => React.useContext(ProductContext);
export{ProductProvider, useProductContext};

