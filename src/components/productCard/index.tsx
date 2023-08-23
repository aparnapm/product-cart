import { Card, CardActionArea, CardContent, CardMedia, Container, Typography } from "@mui/material";
import { IProduct } from "../../interfaces/IProduct";
interface Props{
  product: IProduct
  productSelectClick: (id:string)=>void;
}

export function ProductCard (props: Props): JSX.Element {
  return (
    <Container fixed>
       <Card style={{height:"30vh", width:"30vw", backgroundColor:props.product.selected?"lightblue":"transparent"}}  onClick={()=>props.productSelectClick(props.product.id)}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={props.product.thumbnail}
          height={"120vh"}
          width={"120vw"}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.product.title}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            ${props.product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Container>
  );
}
