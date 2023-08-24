import { Card, CardActionArea, CardContent, CardMedia, Container, Typography } from "@mui/material";

interface IProps{
  id: string;
  title:string;
  description:string;
  selected:boolean;
  image:string;
  onSelect :(id:string)=>void;
}

export default function CustomCard(props: IProps): JSX.Element {
  return (
    <Container fixed>
      <Card style={{ backgroundColor: props.selected ? "lightblue" : "transparent" }} onClick={() => props.onSelect(props.id)}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={props.image}
            height={"120vh"}
            width={"120vw"} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              ${props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}
