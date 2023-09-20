import React, { useState } from "react";

import { Button, Form } from "react-bootstrap";

import { useHistory } from "react-router-dom";

function SearchBox() {
  const [keyword, setKeyword] = useState("");

  let history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();

    if (keyword) {
      history.push(`/?keyword=${keyword}&page=1`);
    } else {
      history.push(history.push(history.location.pathname));
    }
  };

  return (
    <div className=" d-md-block  ">
      <Form onSubmit={submitHandler} className="d-flex">
        <Form.Control
          type="text"
          name="q"
          placeholder="search"
          onChange={(e) => setKeyword(e.target.value)}
          className="mr-2 ml-2 bg-light"
          style={{ width: "80%", borderRadius: "20rem" }}
        ></Form.Control>

        <Button
          type="submit"
          variant="outline-danger"
          className="btn btn-light mx-2 button-focus-css "
          style={{ borderRadius: "3rem" }}
        >
          <i className="fas fa-search"></i>
        </Button>
      </Form>
    </div>
  );
}

export default SearchBox;
