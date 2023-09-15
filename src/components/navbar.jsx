import React from "react";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import Services from "./services";
import AboutUs from "./aboutUs";
import ApplyNow from "./applyNow";
import Home from "./home";
import ChannelPartner from "./channelPartner";

console.log(Services);

const Navbar = () => (
  <BrowserRouter>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/challelPartner">ChannelPartners</Link>
        </li>
        <li>
          <Link to="/applyNow">Apply Now</Link>
        </li>
        <li>
          <Link to="/aboutUs">About-Us</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="/challelPartner" element={<ChannelPartner />}></Route>
      <Route path="/applyNow" element={<ApplyNow />}></Route>
      <Route path="/aboutUs" element={<AboutUs />}></Route>
    </Routes>
  </BrowserRouter>
);

export default Navbar;
