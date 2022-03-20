import React from "react";
import '../styles/Navbar.css';

// import { Container } from './styles';

function Navbar() {
  return (
      <div className="navbar">
        <div className="myTitle"><h1>AslanPedia</h1></div>
        <div className="Links"> 
          <a href="/home" class="active">Home</a>
          <a href="/pricing">Pricing</a>
          <a href="/service">Service</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
  );
}

export default Navbar;