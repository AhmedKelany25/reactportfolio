import { Link } from "react-router-dom";
import "./Nav.css";
const Nav = (props) => {
  return (
    <nav className="nav">
      <h3>Logo</h3>

      <ul className="items">
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/about">About</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/products">Shop</Link>
        </li>
        <li>
          {" "}
          <Link to="/counter">Counter</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
