import { FormControl, FormHelperText, TextField } from "@mui/material";
import { IAction } from "../../contexts/ShippingInfoProvider";
import { useState } from "react";

interface Props {
  label: string;
  fieldName: string;
  onClick: (obj: IAction) => void;
  disabled?: boolean;
  value: string;
  width: string;
  required?: boolean;
}

export default function InputField(props: Props): JSX.Element {
  const [error, setError] = useState<boolean>(false);
  const onInput = (value: string) => {
    if (value.trim() === "") {
      setError(true);
    } else {
      setError(false);
    }
    props.onClick({ field: props.fieldName, value: value });
  };
  return (
    <FormControl required={props.required}>
      <TextField
        id="outlined-basic"
        label={props.label}
        style={{ minWidth: props.width }}
        value={props.value}
        onChange={(e) => onInput(e.target.value)}
      >
        {props.value}
      </TextField>
      <FormHelperText
        error={true}
        style={{ visibility: error && props.required ? "visible" : "hidden" }}
      >
        This is a mandatory field
      </FormHelperText>
    </FormControl>
  );
}
