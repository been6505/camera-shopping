import React from "react";

/* REACT-BOOTSTRAP */
import { Card, Container } from "react-bootstrap";

/* REACT ROUTER */
import { Link } from "react-router-dom";

/* COMPONENTS */
import Rating from "./Rating";

// hover
import "./Product.css";
function Product({ product }) {
  return (
    <div >

    
    <Card className="card my-3 p-3">
      <Link to={`/product/${product._id}`}>
        <Card.Img variant="top" src={product.image} className="img p-3" />
      </Link>

      <Card.Body>
        <Link
          className="link my-5"
          to={`/product/${product._id}`}
          style={{ textDecoration: "none",textOverflow: "clip" }}
        >
          <Card.Title as="div" >
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div" className="my-2 text-center">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
            color={"#f8e825"}
          />
        </Card.Text>

        <Card.Text className="h3 mr-3 text-center">฿{product.price}</Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Product;
