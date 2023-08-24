import Cart from "../components/productCart";
import { DynamicStepper } from "../components/common";
import Products from "../components/products";
import ShippingInfo from "../components/shippingInfo";
import { useProductContext } from "../contexts/ProductProvider";
import { useShippingInfoContext } from "../contexts/ShippingInfoProvider";
import { POST_ORDER } from "../utils/ApiUrls";
import { toast } from "react-toastify";
import axios from "axios";
import { FINAL_NOTE, ORDER_FAILED, ORDER_SUCCESS, PLACE_ORDER, SELECT_PRODUCT, SHIPPING_DETAILS, SHIPPING_DETAILS_ERROR } from "../utils/Constants";

export default function HomeContainer() {

  const { products, addProduct, removeProduct, totalDiscount, totalPrice } =
    useProductContext();

  const { customer, dispatchCustomer, isValidCustomer } =
    useShippingInfoContext();

  const steps = [
    {
      title: SELECT_PRODUCT,
      children: (
        <Products
          addProduct={addProduct}
          removeProduct={removeProduct}
          isItemSelected={isItemSelected}
        />
      ),
    },
    {
      title: SHIPPING_DETAILS,
      children: (
        <ShippingInfo customer={customer} dispatchCustomer={dispatchCustomer} />
      ),
      nextDisabled: !isValidCustomer(),
      error: SHIPPING_DETAILS_ERROR,
    },
    {
      title: PLACE_ORDER,
      children: (
        <Cart
          products={products}
          totalPrice={totalPrice}
          totalDiscount={totalDiscount}
          customer={customer}
        />
      ),
    },
  ];

  function submitOrder(){
    axios.get(POST_ORDER)
    .then((res:any)=>toast.info(ORDER_SUCCESS))
    .catch((err:Error)=> toast.error(ORDER_FAILED))
  }
  function isItemSelected(id: string): boolean {
    console.log(products);
    if (products.has(id)) {
      return true;
    }
    return false;
  }
  return (
    <div className="paddedBox">
      <DynamicStepper
        steps={steps}
        completedResponse={FINAL_NOTE}
        onComplete={submitOrder}
      />
    </div>
  );
}
