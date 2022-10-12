import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
const Header = () => {
    return (
        <div >
        <nav class="navbar navbar-expand-lg navbar-light navcolor ">
  <div class="container-fluid">
  <a class="navbar-brand" href="/">
      {/* <img src="https://i.ibb.co/sFRh0Rk/logo-e.jpg" alt="" width="50" height="18" class="d-inline-block "/> */}
      <span className='text-white mt-2' width="50" height="25">DSDPT.COM</span>
    </a>
    <div className='d-flex navmar'>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active navmar text-white" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link navmar text-white" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link navmar text-white" href='/career'>Career</a>
        </li>
        <li class="nav-item">
          <a class="nav-link navmar text-white" href="https://dsl.sg/contact" tabindex="-1" target="_blank">Contact</a>
        </li>
      </ul>
    </div>
    </div>
  </div>
</nav>

        </div>
    );
};

export default Header;