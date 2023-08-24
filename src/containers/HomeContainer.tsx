
import { DynamicStepper } from '../components/common';
import Products from '../components/products';
import ShippingInfo from '../components/shippingInfo';
import { useProductContext } from '../contexts/ProductProvider';
import { useShippingInfoContext } from '../contexts/ShippingInfoProvider';

export default function HomeContainer () {
  const {products,addProduct, removeProduct} = useProductContext();
  const {customer, dispatchCustomer, isValidCustomer}= useShippingInfoContext();
  const steps=[ {
    title:"Product Catalogue",
    children: <Products addProduct={addProduct} removeProduct={removeProduct} isItemSelected={isItemSelected} />
  },
  {
    title:"Shipping Details",
    children: <ShippingInfo customer={customer} dispatchCustomer={dispatchCustomer}/>,
    nextDisabled: !isValidCustomer(),
    error: "Enter the mandatory details to proceed!"
  },
  {
    title:"Confirm and Place Order",
    children: <div>Please confirm and place order</div>
  }]


  function isItemSelected (id: string): boolean {
    console.log(products)
    if(products.has(id)){
      return true;
    }
    return false;
  }
  return (
    <div style={{paddingLeft:"20px", paddingRight:"20px"}}>
      <DynamicStepper
        steps={steps}
      />
     </div>
  );
}
