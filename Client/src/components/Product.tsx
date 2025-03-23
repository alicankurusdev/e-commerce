import { Iproduct } from "../Model/Iproduct";

interface Props{
    product:Iproduct
}
const Product =({product}: Props)=> {

    return (
      <>
      {product.isActive  ?
      <div> 
        <h3>{product.name} </h3>
        <p>{product.price}</p>
        </div>:
        <h2>Urun yok </h2>
        }
      </>
    );
  }

export default Product