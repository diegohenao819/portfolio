import AppBar from "@mui/material/AppBar";

import Typography from "@mui/material/Typography";


import CoffeeIcon from "@mui/icons-material/Coffee";
import ConctactMe from "./ContactMe";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import "../Styles/navbar.css";
import { Projects } from "./Projects";

function NavBar() {
  return (
    <BrowserRouter>
      <div className="navbar">
        <AppBar
          position="static"
          sx={{ backgroundColor: "#262742" }}
          className="appbar"
        >
          <CoffeeIcon sx={{ mr: 2 }} className="coffee"/>
          <h2>DIEGO HENAO</h2>
          <ul>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "noActive")}
            >
              Home
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active navButton" : "noActive")} 
            >
              Contact Me
            </NavLink>
            <NavLink
              to="/project"
              className={({ isActive }) => (isActive ? "active" : "noActive")}
            >
              Projects
            </NavLink>
          </ul>
        </AppBar>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ConctactMe />} />
        <Route path="/project" element={<Projects/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default NavBar;
