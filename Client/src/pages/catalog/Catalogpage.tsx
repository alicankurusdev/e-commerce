import { useEffect, useState } from "react";
import { Iproduct } from "../../Model/Iproduct";
import ProductList from "./ProductList";

const Catalogpage = () => {
  const [products, setProducts] = useState<Iproduct[]>([]);

  useEffect(() => {
    fetch("http://localhost:5207/api/products")
      .then((response) => response.json())
      .then((data) => setProducts([...data]));
    console.log("datageldi");
  }, []);
  return <ProductList products={products} />
};

export default Catalogpage;
