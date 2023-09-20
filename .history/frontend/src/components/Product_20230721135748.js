import React from "react";

/* REACT-BOOTSTRAP */
import { Card } from "react-bootstrap";

/* REACT ROUTER */
import { Link } from "react-router-dom";

/* COMPONENTS */
import Rating from "./Rating";

// hover
import "./Product.css";
function Product({ product }) {
  return (
    <Card className="card my-3 p-3"

    >
      <Link to={`/product/${product._id}`}>
        <Card.Img variant="top" src={product.image}  className="img p-3" />
      </Link>

      <Card.Body>
        <Link className="link" to={`/product/${product._id}`}>
          <Card.Title as="div" >
            <strong style={{textOverflow:""}}>ddddn{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
            color={"#f8e825"}
          />
        </Card.Text>

        <Card.Text className="h4 text-center" >฿{product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
