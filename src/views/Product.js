import "./Product.css";

import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";

const Product = (props) => {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const getProduct = () => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
      });
  };
  useEffect(() => {
    getProduct();
  }, []);
  console.log("p", product);
  return (
    <div className="container ">
      {product ? (
        <div className="m-4 product_container">
          <img src={product.image} className="img" />
          <div className="product-details">
            <h3>{product.price}</h3>
            <h6>{product.title}</h6>
            <p>{product.description}</p>
          </div>
        </div>
      ) : (
        <Spinner animation="grow" />
      )}
    </div>
  );
};

export default Product;
