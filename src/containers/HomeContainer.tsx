
import { DynamicStepper } from '../components/common';
import Products from '../components/products';
import { useProductContext } from '../contexts/ProductProvider';

export default function HomeContainer () {
  const {addProduct, removeProduct} = useProductContext();
  const steps=[
    {
      title:"Product Catalogue",
      children: <Products addProduct={addProduct} removeProduct={removeProduct}/>
    },
    {
      title:"Shipping Details",
      children: <div>Please enter shipping info</div>
    },
    {
      title:"Confirm and Place Order",
      children: <div>Please confirm and place order</div>
    }
  ]
  return (
    <div>
      <DynamicStepper
        steps={steps}
      />
     </div>
  );
}
