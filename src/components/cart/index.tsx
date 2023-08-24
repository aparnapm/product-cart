import * as React from 'react';
import { IProduct } from '../../interfaces/IProduct';
import { ICustomer } from '../../interfaces/ICustomer';
import DataTable from '../common/DataTable';

interface IProps{
    products:Map<string,IProduct>,
    totalPrice: number,
    totalDiscount: number,
    customer: ICustomer
}
export default function Cart (props: IProps) {
  return (
    <div>
            <h4>Shipping to:</h4>
            <div>
            <h5>{props.customer.name}</h5>
            <h5>{props.customer.address.doorNo+","+props.customer.address.street}</h5>
        </div>
      <DataTable columns={["Product","Original Price","Discount","Final Price"]} data={props.products}/>
      <h3>Price: {"$"+props.totalPrice.toFixed(2)}</h3>
      <h3>Discount: {"$"+props.totalDiscount.toFixed(2)}</h3>
      <h2>Net Price: {"$"+(props.totalPrice-props.totalDiscount).toFixed(2)}</h2>
    </div>
  );
}
