import { useEffect, useState } from "react";
import { Iproduct } from "../../Model/Iproduct";
import ProductList from "./ProductList";
import requests from "../../api/request";

const Catalogpage = () => {
  const [products, setProducts] = useState<Iproduct[]>([]);

  useEffect(() => {
    requests.Catalog.list()
      .then((data) => setProducts([...data]));
    console.log("datageldi");
  }, []);
  return <ProductList products={products} />
};

export default Catalogpage;
