import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Logo_CSU_Suceava from "../assets/logo192.png";

export default function header() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img src={Logo_CSU_Suceava} alt="Logo" className="logo"></img>
      </Link>
      <ul>
        <CustomLink to="/"> Home </CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
