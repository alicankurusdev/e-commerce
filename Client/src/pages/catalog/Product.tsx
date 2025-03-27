import { Iproduct } from "../../Model/Iproduct";
import {
  Card,
  CardActions,
  Button,
  CardContent,
  CardMedia,
  Typography,
  
} from "@mui/material";
import {AddShoppingCart } from "@mui/icons-material";
import SearchIcon  from "@mui/icons-material/Search";
import { Link } from "react-router";



interface Props {
  product: Iproduct;
}
const Product = ({ product }: Props) => {
  console.log(product)
  return (
    <Card>
      <CardMedia
        sx={{ height: 160, backgroundSize: "contain" }}
        image={`http://localhost:5207/images/${product.imageUrl} `}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="h2"
          color="text-secondary"
        >
          {product.name}
        </Typography>
        <Typography variant="body2" color="secondary">
          {(product.price / 100).toFixed(2)} $
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small" startIcon={<AddShoppingCart/>} color="success" >Add to Cart</Button>
        <Button component={Link} to={`/catalog/${product.productId}`}
         variant="outlined" size="small" startIcon={<SearchIcon/>} color="primary">View</Button>
      </CardActions>
    </Card>
  );
};

export default Product;
