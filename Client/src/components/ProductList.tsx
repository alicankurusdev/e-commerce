import { Iproduct } from "../Model/Iproduct";
import Product from "../components/Product";


interface Props {
  products: Iproduct[];
  addProduct: () => void;
}

const ProductList = ({ products, addProduct }: Props) => {
  return (
    <>
      <h2>Product List {products.length}</h2>
      {products.map((product: Iproduct) => (
        <Product key={product.productId} product={product} />
      ))}
      <button onClick={addProduct}>ADD PRODUCT</button>
    </>
  );
};

export default ProductList;
