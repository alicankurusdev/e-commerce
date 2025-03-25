import { Iproduct } from "../Model/Iproduct";
import Product from "../components/Product";
import { Grid2 } from "@mui/material";

interface Props {
  products: Iproduct[];
}

const ProductList = ({ products }: Props) => {
  return (
    <>
      <Grid2 container spacing={2}>
        {products.map((product: Iproduct) => (
          <Grid2 key={product.productId} size={{ xs: 6, md: 4, lg: 3 }}>
            <Product  product={product} />
          </Grid2>
        ))}
      </Grid2>
    </>
  );
};

export default ProductList;
