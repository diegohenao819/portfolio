import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import ConctactMe from "../pages/ContactMe";
import { Home } from "@mui/icons-material";

export const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ConctactMe />} />
      </Routes>
    </BrowserRouter>
  );
};
