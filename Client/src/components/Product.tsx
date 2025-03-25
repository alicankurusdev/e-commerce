import { Iproduct } from "../Model/Iproduct";
import { Card,CardContent, CardMedia, Typography } from "@mui/material";

interface Props {
  product: Iproduct;
}
const Product = ({ product }: Props) => {
  return (
    <Card>
      <CardMedia sx={{height:160, backgroundSize:"contain"}}  image={`http://localhost:5207/images/${product.imageUrl} `} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="h2"  color="text-secondary">
          {product.name}
        </Typography>
        <Typography variant="body2" color="secondary">
          {(product.price / 100).toFixed(2)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Product;
