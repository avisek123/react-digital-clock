import React from 'react';
import {  NavLink } from 'react-router-dom';
//import './index.css';
const Nabvar=()=>{
    return(
        <>
        <div className='container-fluid nav_bg'>
        <div className='row'>
        <div className='col-10 mx-auto'>


       
      
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink  class="navbar-brand" to="#">Ne-sTack</NavLink>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <NavLink  activeClassName='menu_active_Home' className="nav-link" to="/home">Home <span class="sr-only">(current)</span></NavLink>
      </li>
      <li class="nav-item">
        <NavLink activeClassName='menu_active'  className="nav-link " to="/services"><span className='link'>Services</span></NavLink>
      </li>
      <li class="nav-item">
        <NavLink activeClassName='menu_active'  className="nav-link " to="/about"><span className='link'>About</span></NavLink>
      </li>
      <li class="nav-item">
        <NavLink activeClassName='menu_active'  className="nav-link " to="/contact"><span className='link'>Contact</span></NavLink>
      </li>
      
     
    </ul>
    
  </div>
</nav>
</div>


</div>

        </div>
        </>
    );
}
export default Nabvar;