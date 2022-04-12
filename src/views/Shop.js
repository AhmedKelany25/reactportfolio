import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./Shop.css";

const Home = (props) => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);

  const getProducts = () => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setLoading(false);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);
  console.log("products0", products);
  return (
    <div className="text-center m-5">
      <div className="row justify-content-center">
        {loading ? (
          <Spinner animation="grow" />
        ) : (
          products &&
          products.length &&
          products.map((product) => {
            return (
              <Card style={{ width: "18rem" }} className="card">
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ width: "100%", height: "15rem" }}
                />
                <Card.Body>
                  <Card.Title
                    style={{ width: "100%", height: "4rem", fontSize: "12px" }}
                    className="my-2"
                  >
                    {product.title}
                  </Card.Title>
                  <Card.Text
                    style={{
                      width: "100%",
                      height: "10rem",
                      overflow: "hidden",
                      fontSize: "18px",
                    }}
                  >
                    {product.description}
                  </Card.Text>
                  <Link
                    className="btn btn-primary"
                    to={`/products/${product.id}`}
                  >
                    show Details
                  </Link>
                </Card.Body>
              </Card>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Home;
