/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const NavLink = ({ name, path }) => {
  return <Link to={path}>{name}</Link>;
};

export default NavLink;
