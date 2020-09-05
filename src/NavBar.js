import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <NavLink
        exact={true}
        style={{ margin: 20 }}
        activeClassName="active"
        to="/"
      >
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/category">
        Search by category
      </NavLink>
      <NavLink style={{ margin: 20 }} activeClassName="active" to="/search">
        Search by name
      </NavLink>
    </div>
  );
}

export default NavBar;
