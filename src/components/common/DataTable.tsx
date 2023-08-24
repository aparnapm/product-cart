import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { IProduct } from "../../interfaces/IProduct";
import { intToPriceStr } from "../../utils/Utils";

export interface IProps {
  columns: string[];
  data: Map<string, IProduct>;
}

export default function DataTable(props: IProps) {
  const getTableRows = (): React.ReactNode[] => {
    let rows: React.ReactNode[] = [];
    props.data.forEach((value: IProduct, key: string) => {
      rows.push(
        <TableRow>
          <TableCell>{value.title}</TableCell>
          <TableCell>{intToPriceStr(value.price)}</TableCell>
          <TableCell>{intToPriceStr(value.discountPercentage)}</TableCell>
          <TableCell>
            {intToPriceStr(value.price - value.discountPercentage)}
          </TableCell>
        </TableRow>
      );
    });
    return rows;
  };
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          {props.columns.map((str: string) => {
            return <TableCell>{str}</TableCell>;
          })}
        </TableHead>
        <TableBody>{getTableRows()}</TableBody>
      </Table>
    </TableContainer>
  );
}
