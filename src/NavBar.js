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
      <NavLink activeClassName="active" to="/cocktails">
        Cocktails
      </NavLink>
    </div>
  );
}

export default NavBar;
