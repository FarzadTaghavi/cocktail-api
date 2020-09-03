import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <NavLink activeClassName="active" exact={true} to="/">
        Homepage
      </NavLink>
      <NavLink activeClassName="active" to="/cocktails">
        Cocktails
      </NavLink>
    </div>
  );
}

export default Navigation;
