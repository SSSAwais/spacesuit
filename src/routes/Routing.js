import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Home, FilterCar, Gensil, Checkout } from "../pages/Pages";
const Routing = () => {
  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="pricing" element={<FilterCar />} />
      <Route path="Gensil" element={<Gensil />} />
      <Route path="Checkout" element={<Checkout />} />
    </Routes>
  );
};

export default Routing;
