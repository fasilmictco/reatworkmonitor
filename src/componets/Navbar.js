import React from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Login from "./Login";

function Navbar()
{
    return(
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">

      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link className="nav-link" to="/home">Home</Link>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="#" className="nav-link">Contact<Route path="/home"><Login/></Route></a>
        </li>
      </ul>
      </nav>
    );

}
export default Navbar;