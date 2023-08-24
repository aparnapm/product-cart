import React, { Reducer, useReducer } from "react";
import { ICustomer } from "../interfaces/ICustomer";

interface ShippingInfoProviderProps{
    children: React.ReactNode;
}
interface IShippingInfoContext {
    customer:ICustomer;
    dispatchCustomer:(action:IAction)=>void;
}
const defaultCustomer={name:"",address:{doorNo:"",street:"",locality:"",district:"",state:"",pinCode:""},contactNo:""}

const ShippingInfoContext = React.createContext<IShippingInfoContext>({
    customer: defaultCustomer,
    dispatchCustomer: (action:IAction) =>{
        console.log("set customer");
    }

})
export  interface IAction{
    field: string;
    value:string;
}
const reducer: Reducer<ICustomer,IAction>= (state:ICustomer, action:IAction): ICustomer=>{
    console.log(action)
    switch(action.field){
        case "name": return {...state, name:action.value};
        case "contactNo": return {...state, contactNo : action.value};
        case "address.doorNo": return {...state, address:{...state.address, doorNo:action.value}};
        case "address.street": return {...state, address:{...state.address, street:action.value}};
        case "address.district": return {...state, address:{...state.address, district:action.value}};
        case "address.state": return {...state, address:{...state.address, state:action.value}};
        case "address.pinCode": return {...state, address:{...state.address, pinCode:action.value}};
    }
    return state;
}
const ShippingInfoProvider = (props: ShippingInfoProviderProps): JSX.Element => {
    const [customer, dispatchCustomer]= useReducer(reducer,defaultCustomer);

  return (
    <ShippingInfoContext.Provider
    value={{
        customer,
        dispatchCustomer
    }}
    >
      {props.children}
    </ShippingInfoContext.Provider>
  );
}

const useShippingInfoContext = (): IShippingInfoContext => React.useContext(ShippingInfoContext);
export{ShippingInfoProvider, useShippingInfoContext};

