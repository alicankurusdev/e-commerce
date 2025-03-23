import { useEffect, useState } from "react";
import { Iproduct } from "../Model/Iproduct";
import  Header  from "../components/Header";
import ProductList from "./ProductList";
import ButtonUsage from "./ButtonUsage";

function App() {
  const [products, setProducts] = useState<Iproduct[]>([
 
  ]);

  useEffect(()=>{

  fetch("http://localhost:5207/api/products")
  .then(response => response.json())
  .then(data =>  setProducts([...data]));
  console.log("datageldi");
  
  },[])  
  

  const addProduct = () => {
    setProducts((previousProducts) => [
      ...previousProducts,
      {
        productId: previousProducts.length + 1,
        name: "product 4",
        price: 7000,
        isActive: true,
      },
    ]);
  };
console.log("render 1");
console.log(products);

  return (
    <>
     
      <Header />
      <ProductList products ={products} addProduct={addProduct} />
      <ButtonUsage/>
    </>
  );
}



export default App;
