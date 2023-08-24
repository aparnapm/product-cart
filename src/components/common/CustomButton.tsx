import { Button } from '@mui/material';
import * as React from 'react';

interface Props {
    text: string;
    onClick : ()=> void;
    disabled?: boolean;
}

export default function CustomButton (props: Props) : JSX.Element{
  return (
    <Button onClick={props.onClick} disabled={props.disabled?props.disabled:false}>
      {props.text}
    </Button>
  );
}
