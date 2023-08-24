import { Container, Grid } from "@mui/material";
import { ICustomer } from "../../interfaces/ICustomer";
import { IAction } from "../../contexts/ShippingInfoProvider";
import { InputField } from "../common";
import { CUSTOMER_CONTACTNO, CUSTOMER_DISTRICT, CUSTOMER_DOORNO, CUSTOMER_NAME, CUSTOMER_PINCODE, CUSTOMER_STATE, CUSTOMER_STREET } from "../../utils/Constants";

interface IProps {
  customer: ICustomer;
  dispatchCustomer: (action: IAction) => void;
}
export default function ShippingInfo(props: IProps) {
  return (
    <Container style={{ padding: "50px" }}>
      <InputField
        label={"Recipients Name"}
        fieldName={CUSTOMER_NAME}
        onClick={props.dispatchCustomer}
        required={true}
        value={props.customer.name}
        width={"50vw"}
      />

      <InputField
        label={"Door Number/Aparment"}
        fieldName={CUSTOMER_DOORNO}
        onClick={props.dispatchCustomer}
        value={props.customer.address.doorNo}
        width={"50vw"}
      />
      <InputField
        label={"Street/Locality"}
        fieldName={CUSTOMER_STREET}
        onClick={props.dispatchCustomer}
        value={props.customer.address.street}
        width={"50vw"}
      />
      <Grid container>
        <Grid item lg={6}>
          <InputField
            label={"District"}
            fieldName={CUSTOMER_DISTRICT}
            onClick={props.dispatchCustomer}
            value={props.customer.address.district}
            width={"30vw"}
          />
        </Grid>
        <Grid item lg={6}>
          <InputField
            label={"State"}
            fieldName={CUSTOMER_STATE}
            onClick={props.dispatchCustomer}
            value={props.customer.address.state}
            width={"30vw"}
          />
        </Grid>
      </Grid>
      <InputField
        label={"Pin Code"}
        fieldName={CUSTOMER_PINCODE}
        onClick={props.dispatchCustomer}
        value={props.customer.address.pinCode}
        required={true}
        width={"50vw"}
      />
      <InputField
        label={CUSTOMER_CONTACTNO}
        required={true}
        fieldName={"contactNo"}
        onClick={props.dispatchCustomer}
        value={props.customer.contactNo}
        width={"50vw"}
      />
    </Container>
  );
}
