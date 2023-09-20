import React from "react";

/* REACT BOOTSTRAP */
import { NavDropdown } from "react-bootstrap";

/* REACT ROUTER BOOTSTRAP */
import { LinkContainer } from "react-router-bootstrap";

import { useDispatch, useSelector } from "react-redux";

function Admin() {
  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  return (
    <div className="text-center  d-md-block">
      {userInfo && userInfo.isAdmin && (
        <NavDropdown
          title={<i class="mx-2 fa fa-cog fa-lg" aria-hidden="true"></i>}
          id="adminmenu"
          className="mx-2 "
        >
          <LinkContainer className=" text-center " to="/admin/productlist">
            <NavDropdown.Item>Products</NavDropdown.Item>
          </LinkContainer>

          <LinkContainer className=" text-center " to="/admin/userlist">
            <NavDropdown.Item>Users</NavDropdown.Item>
          </LinkContainer>

          <LinkContainer className=" text-center " to="/admin/orderlist">
            <NavDropdown.Item>Orders</NavDropdown.Item>
          </LinkContainer>
        </NavDropdown>
      )}
    </div>
  );
}

export default Admin;
