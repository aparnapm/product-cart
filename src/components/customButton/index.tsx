import { Button } from '@mui/material';
import * as React from 'react';

interface Props {
    text: string;
    onClick : ()=> void;
}

export function CustomButton (props: Props) {
  return (
    <Button onClick={props.onClick}>
      {props.text}
    </Button>
  );
}
