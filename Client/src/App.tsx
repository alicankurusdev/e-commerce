import { useEffect, useState } from "react";

function App() {
  return (
    <>
      <Header />
      <ProductList />
    </>
  );
}

function Header() {
  return <h1>Header </h1>;
}

function ProductList() {

  const [products, setProducts] = useState([
    { productId: 4, name: "product 1", price: 3000, isActive: true },
    { productId: 5, name: "product 2", price: 4000, isActive: false },
    { productId: 6, name: "product 3", price: 6000, isActive: true },
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
      <h2>Product List {products.length}</h2>
      {products.map((product) =>  <Product key={product.productId } product={product} />)}
      <button onClick={addProduct}>ADD PRODUCT</button>
    </>
  );
}

function Product(props: any) {

  return (
    <>
    {props.product.isActive  ?
    <div> 
      <h3>{props.product.name} </h3>
      <p>{props.product.price}</p>
      </div>:
      <h2>Urun yok </h2>
      }
    </>
  );
}

export default App;
