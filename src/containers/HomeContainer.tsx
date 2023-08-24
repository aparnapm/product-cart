import Cart from "../components/productCart";
import { DynamicStepper } from "../components/common";
import Products from "../components/products";
import ShippingInfo from "../components/shippingInfo";
import { useProductContext } from "../contexts/ProductProvider";
import { useShippingInfoContext } from "../contexts/ShippingInfoProvider";
import { POST_ORDER } from "../utils/ApiUrls";
import { toast } from "react-toastify";
import axios from "axios";

export default function HomeContainer() {

  const { products, addProduct, removeProduct, totalDiscount, totalPrice } =
    useProductContext();

  const { customer, dispatchCustomer, isValidCustomer } =
    useShippingInfoContext();

  const steps = [
    {
      title: "Product Catalogue",
      children: (
        <Products
          addProduct={addProduct}
          removeProduct={removeProduct}
          isItemSelected={isItemSelected}
        />
      ),
    },
    {
      title: "Shipping Details",
      children: (
        <ShippingInfo customer={customer} dispatchCustomer={dispatchCustomer} />
      ),
      nextDisabled: !isValidCustomer(),
      error: "Enter the mandatory details to proceed!",
    },
    {
      title: "Confirm and Place Order",
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
    .then((res:any)=>toast.info("Order placed successfully!"))
    .catch((err:Error)=> toast.error("Error placing order, try again!"))
  }
  function isItemSelected(id: string): boolean {
    console.log(products);
    if (products.has(id)) {
      return true;
    }
    return false;
  }
  return (
    <div
      style={{
        paddingLeft: "20px",
        paddingRight: "20px",
        paddingBottom: "20px",
      }}
    >
      <DynamicStepper
        steps={steps}
        completedResponse="Thank you for shopping with us us!"
        onComplete={submitOrder}
      />
    </div>
  );
}
