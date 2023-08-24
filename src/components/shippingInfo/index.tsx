import { Container, FormControl, FormLabel, TextField } from "@mui/material";
import { ICustomer } from "../../interfaces/ICustomer";
import { IAction } from "../../contexts/ShippingInfoProvider";

interface IProps{
  customer: ICustomer;
  dispatchCustomer: (action:IAction)=>void;
}
export default function ShippingInfo (props:IProps) {
  console.log("customer:",props.customer)
  return (
    <Container>
          <FormControl>
            <FormLabel>Recipients Name</FormLabel>
            <TextField value={props.customer.name} onChange={(e)=>props.dispatchCustomer({field:"name",value:e.target.value})}>{props.customer.name}</TextField>
          </FormControl>
    
    </Container>
  );
}
