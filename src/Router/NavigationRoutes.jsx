import React from "react";
import { Routes, Route } from "react-router";
import Home from "../Pages/Home";
import Resume from "../Components/Resume";

const NavigationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Resume />} />
    </Routes>
  );
};

export default NavigationRoutes;
