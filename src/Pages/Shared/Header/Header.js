import React from 'react';
import Hero from '../../Hero/Hero';
import './Header.css';
const Header = () => {
    return (
        <div >
        <nav class="navbar navbar-expand-lg navbar-light bg-dark ">
  <div class="container-fluid">
  <a class="navbar-brand" href="#">
      <img src="https://i.ibb.co/sFRh0Rk/logo-e.jpg" alt="" width="150" height="24" class="d-inline-block align-text-top"/>
      DSDPT.COM
    </a>
    <div className='d-flex navmar'>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active navmar text-white" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link navmar text-white" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link navmar text-white" href="#">Career</a>
        </li>
        <li class="nav-item">
          <a class="nav-link navmar text-white" href="#" tabindex="-1" >Contact</a>
        </li>
      </ul>
    </div>
    </div>
  </div>
</nav>
<Hero></Hero>
        </div>
    );
};

export default Header;