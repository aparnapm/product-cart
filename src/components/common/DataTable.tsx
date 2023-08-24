import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { IProduct } from '../../interfaces/IProduct';

export interface IProps {
    columns:string[],
    data:Map<string,IProduct>
}

export default function DataTable (props: IProps) {
    const getTableRows = (): React.ReactNode[] =>{
        let rows:React.ReactNode[]=[]
        props.data.forEach((value:IProduct,key:string)=>{
            rows.push(
            <TableRow>
                <TableCell>{value.title}</TableCell>
                <TableCell>{"$"+value.price.toFixed(2)}</TableCell>
                <TableCell>{"$"+value.discountPercentage.toFixed(2)}</TableCell>
                <TableCell>{"$"+(value.price-value.discountPercentage).toFixed(2)}</TableCell>
            </TableRow>
            )
        })
        return rows
    }
  return (
    <TableContainer component={Paper}>
    <Table >
        <TableHead>
            {props.columns.map((str:string)=>{
                return <TableCell>{str}</TableCell>
            })}
        </TableHead>
        <TableBody>
        {getTableRows()}
        </TableBody>
    </Table>

    </TableContainer>
  );
}
