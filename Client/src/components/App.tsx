import { useEffect, useState } from "react";
import { Iproduct } from "../Model/Iproduct";
import Header from "../components/Header";
import ProductList from "./ProductList";
import { CssBaseline, Container } from "@mui/material";

function App() {
  const [products, setProducts] = useState<Iproduct[]>([]);

  useEffect(() => {
    fetch("http://localhost:5207/api/products")
      .then((response) => response.json())
      .then((data) => setProducts([...data]));
    console.log("datageldi");
  }, []);



  return (
    <>
      <CssBaseline />
      <Header />
      <Container>
        <ProductList products={products}  />
      </Container>
     
    </>
  );
}

export default App;
