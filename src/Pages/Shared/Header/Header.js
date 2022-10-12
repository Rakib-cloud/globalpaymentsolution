import React from 'react';

import './Header.css';
const Header = () => {
  return (
    //         <div >
    //         <nav class="navbar navbar-expand-lg navbar-light navcolor ">
             
    //   <div class="container-fluid">
    //   <a class="navbar-brand" href="/">
    //       {/* <img src="https://i.ibb.co/sFRh0Rk/logo-e.jpg" alt="" width="50" height="18" class="d-inline-block "/> */}
    //       <span className='text-white mt-2 logo' >DSDPT.COM</span>
    //     </a>
    //     <div className='d-flex navmar'>
    //     <div class="collapse navbar-collapse" id="navbarNav">
    //       <ul class="navbar-nav">
    //         <li class="nav-item">
    //           <a class="nav-link active navmar text-white" aria-current="page" href="/">Home</a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link navmar text-white" href="/about">About</a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link navmar text-white" href='/career'>Career</a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link navmar text-white" href="https://dsl.sg/contact" tabindex="-1" target="_blank">Contact</a>
    //         </li>
    //       </ul>
    //     </div>
    //     </div>
    //   </div>
    // </nav>
    // <section></section>

    //         </div>
   <div class="backx">
    <div class="navx">
        <input type="checkbox" id="navx-check"/>
        <div class="navx-header">
          <div class="navx-title">
          DSDPT.COM
          </div>
        </div>
        <div class="navx-btn">
          <label for="navx-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        
        <div class="navx-links ">
            <ul>
          <li><a href="/"  class="navxmar">Home</a></li>
          <li><a href="/about"  class="navxmar">About</a></li>
          <li><a href="/career"  class="navxmar">Career</a></li>
          
          <li><a href="https://dsl.sg/contact" target="_blank" class="navxmar">Contact</a></li>

          <li><a href="/"  class="navxmar"> <span className='pclogin me-4 bg-danger px-1 py-1 text-white d-inline-block rounded'>Login With Wallet <i class="fa-solid fa-wallet"></i></span></a></li>
       
            </ul>
        </div>
       
      </div>
      {/* after nav */}
      
   </div>

  );
};

export default Header;