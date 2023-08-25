import React, { Reducer, useReducer } from "react";
import { ICustomer } from "../interfaces/ICustomer";
import { CUSTOMER_CONTACTNO, CUSTOMER_DISTRICT, CUSTOMER_DOORNO, CUSTOMER_NAME, CUSTOMER_PINCODE, CUSTOMER_STATE, CUSTOMER_STREET } from "../utils/Constants";
import { validNumber } from "../utils/Utils";

interface ShippingInfoProviderProps {
  children: React.ReactNode;
}
interface IShippingInfoContext {
  customer: ICustomer;
  dispatchCustomer: (action: IAction) => void;
  isValidCustomer: () => boolean;
}
const defaultCustomer = {
  name: "",
  address: {
    doorNo: "",
    street: "",
    locality: "",
    district: "",
    state: "",
    pinCode: "",
  },
  contactNo: "",
};

const ShippingInfoContext = React.createContext<IShippingInfoContext>({
  customer: defaultCustomer,
  dispatchCustomer: (action: IAction) => {
  },
  isValidCustomer: () => {
    return false;
  },
});
export interface IAction {
  field: string;
  value: string;
}
const reducer: Reducer<ICustomer, IAction> = (
  state: ICustomer,
  action: IAction
): ICustomer => {
  console.log(action);
  switch (action.field) {
    case CUSTOMER_NAME:
      return { ...state, name: action.value };
    case CUSTOMER_CONTACTNO:
      return { ...state, contactNo: action.value };
    case CUSTOMER_DOORNO:
      return { ...state, address: { ...state.address, doorNo: action.value } };
    case CUSTOMER_STREET:
      return { ...state, address: { ...state.address, street: action.value } };
    case CUSTOMER_DISTRICT:
      return {
        ...state,
        address: { ...state.address, district: action.value },
      };
    case CUSTOMER_STATE:
      return { ...state, address: { ...state.address, state: action.value } };
    case CUSTOMER_PINCODE:
      return { ...state, address: { ...state.address, pinCode: action.value } };
  }
  return state;
};
const ShippingInfoProvider = (
  props: ShippingInfoProviderProps
): JSX.Element => {
  const [customer, dispatchCustomer] = useReducer(reducer, defaultCustomer);
  const isValidCustomer = () => {
    if (
      customer.name.length > 0 &&
      validNumber(customer.contactNo) &&
      validNumber(customer.address.pinCode)
    ) {
      return true;
    }
    return false;
  };
  return (
    <ShippingInfoContext.Provider
      value={{
        customer,
        dispatchCustomer,
        isValidCustomer,
      }}
    >
      {props.children}
    </ShippingInfoContext.Provider>
  );
};

const useShippingInfoContext = (): IShippingInfoContext =>
  React.useContext(ShippingInfoContext);
export { ShippingInfoProvider, useShippingInfoContext };
