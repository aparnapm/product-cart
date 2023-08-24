import { Container, Grid } from "@mui/material";
import { ICustomer } from "../../interfaces/ICustomer";
import { IAction } from "../../contexts/ShippingInfoProvider";
import { InputField } from "../common";

interface IProps {
  customer: ICustomer;
  dispatchCustomer: (action: IAction) => void;
}
export default function ShippingInfo(props: IProps) {
  console.log("customer:", props.customer);
  return (
    <Container style={{ padding: "50px" }}>
      <InputField
        label={"Recipients Name"}
        fieldName={"name"}
        onClick={props.dispatchCustomer}
        required={true}
        value={props.customer.name}
        width={"50vw"}
      />

      <InputField
        label={"Door Number/Aparment"}
        fieldName={"address.doorNo"}
        onClick={props.dispatchCustomer}
        value={props.customer.address.doorNo}
        width={"50vw"}
      />
      <InputField
        label={"Street/Locality"}
        fieldName={"address.street"}
        onClick={props.dispatchCustomer}
        value={props.customer.address.street}
        width={"50vw"}
      />
      <Grid container>
        <Grid item lg={6}>
          <InputField
            label={"District"}
            fieldName={"address.district"}
            onClick={props.dispatchCustomer}
            value={props.customer.address.district}
            width={"30vw"}
          />
        </Grid>
        <Grid item lg={6}>
          <InputField
            label={"State"}
            fieldName={"address.state"}
            onClick={props.dispatchCustomer}
            value={props.customer.address.state}
            width={"30vw"}
          />
        </Grid>
      </Grid>
      <InputField
        label={"Pin Code"}
        fieldName={"address.pinCode"}
        onClick={props.dispatchCustomer}
        value={props.customer.address.pinCode}
        required={true}
        width={"50vw"}
      />
      <InputField
        label={"Contact Number"}
        required={true}
        fieldName={"contactNo"}
        onClick={props.dispatchCustomer}
        value={props.customer.contactNo}
        width={"50vw"}
      />
    </Container>
  );
}
