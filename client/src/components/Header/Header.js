import React from 'react';
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">P Blog</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link to="/"><a class="nav-link active" aria-current="page" href='/'>Home</a></Link>
        </li>
        <li class="nav-item">
        <Link to="/About"><a class="nav-link" aria-current="page" href="/about">about</a></Link>
        </li>
        <li class="nav-item">
        <Link to="/contactus"><a class="nav-link" aria-current="page" href="/contactus">contactus</a></Link>
        </li>
        <li class="nav-item">
        <Link to="/login"><a class="nav-link" aria-current="page" href="/login">Logout</a></Link>
        </li>
        </ul>
        
    </div>
  </div>
</nav>
  )
};

export default Header;