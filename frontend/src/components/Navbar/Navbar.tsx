import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
interface Props{
  isAuthenticated:boolean;
}
const Navbar = ({isAuthenticated}:Props) => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="header">
      <div className="nav-center">
        <div
          className="top-bar"
        >
 <AiOutlineMenu className="menu-icon" onClick={() => setToggle(true)} />
        <h2>Measurements</h2>
        </div>

       

        <nav className={`${toggle ? "nav-bar" : "hide-bar"}`}>
          <div className="toggle-header">
            <h2>Welcome</h2>
            <AiOutlineClose
              className="menu-icon"
              onClick={() => setToggle(false)}
            />
          </div>

          <ul className="nav-links">
            <li><Link to="/Measurements">Home</Link></li>
            <li><Link to="/AddNew">Add New</Link></li>
           {isAuthenticated ? <li>Log Out</li>:  <li><Link to="/Login">Login</Link></li> }
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
