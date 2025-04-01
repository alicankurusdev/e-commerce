import { useParams } from "react-router";
import type { Iproduct } from "../../Model/Iproduct";
import { useEffect, useState } from "react";
import {
  CircularProgress,
  Divider,
  Grid2,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import requests from "../../api/request";

const ProductDetails = () => {
  const [product, setProduct] = useState<Iproduct | null>(null);
  const { id } = useParams<{id:string}>();
  console.log(id);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   id && requests.Catalog.details(parseInt(id))
      .then((data) => setProduct(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);
  console.log(product);

  if (loading) return <CircularProgress />;

  if (!product) return <h5> Product Not Found</h5>;

  return (
    <Grid2 container spacing={6}>
      <Grid2 size={{ xl: 3, lg: 4, md: 5, sm: 6, xs: 12 }}>
        <img
          src={`http://localhost:5207/images/${product.imageUrl}`}
          style={{ width: "100%" }}
          alt=""
        />
      </Grid2>
      <Grid2 size={{ xl: 9, lg: 8, md: 7, sm: 6, xs: 12 }}>
        <Typography variant="h3" color="initial">
          {product.name}
        </Typography>
        <Divider sx={{ mb: 2 }}></Divider>
        <Typography variant="h4" color="warning">
          {(product.price / 100).toFixed(2)} $
        </Typography>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>{product.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Description</TableCell>
              <TableCell>{product.description}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Stock</TableCell>
              <TableCell>{product.stock}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid2>
    </Grid2>
  );
};

export default ProductDetails;
