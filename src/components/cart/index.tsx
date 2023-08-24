import * as React from "react";
import { IProduct } from "../../interfaces/IProduct";
import { ICustomer } from "../../interfaces/ICustomer";
import DataTable from "../common/DataTable";
import { intToPriceStr } from "../../utils/Utils";

interface IProps {
  products: Map<string, IProduct>;
  totalPrice: number;
  totalDiscount: number;
  customer: ICustomer;
}
export default function Cart(props: IProps) {
  return (
    <div>
      <h4>Shipping to:</h4>
      <div>
        <h5>{props.customer.name}</h5>
        <h5>
          {props.customer.address.doorNo + "," + props.customer.address.street}
        </h5>
      </div>
      <DataTable
        columns={["Product", "Original Price", "Discount", "Final Price"]}
        data={props.products}
      />
      <h3>Price: {intToPriceStr(props.totalPrice)}</h3>
      <h3>Discount: {intToPriceStr(props.totalDiscount)}</h3>
      <h2>
        Net Price: {intToPriceStr(props.totalPrice - props.totalDiscount)}
      </h2>
    </div>
  );
}
