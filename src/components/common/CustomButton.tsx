import { Button } from "@mui/material";
import * as React from "react";

interface Props {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

export default function CustomButton(props: Props): JSX.Element {
  return (
    <Button
      variant="contained"
      style={{ opacity: props.disabled ? 0.4 : 1 }}
      onClick={props.onClick}
    >
      {props.text}
    </Button>
  );
}
