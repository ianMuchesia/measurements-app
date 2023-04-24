import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
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
            <li>Log Out</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
