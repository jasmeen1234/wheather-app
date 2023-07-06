import React, { useEffect, useState } from 'react'
import './Header.css'

// import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';





function Header() {
  
  const [login,setLogin]=useState(false);
  const Logout="Logout";
  const Login="Login";

// eslint-disable-next-line
  useEffect(()=>{
    if(localStorage.getItem("name")){
      setLogin(true);
    }
  })
  const logout=()=>{
    localStorage.removeItem("name");
    
    window.location.reload(false);
  }
  return (
    
        
       <div className='header'>
<div className='img-contain'>
            
              <h1 className='logo-header'>Airbus</h1>
              </div>
              <div className='navbar'>
                <ul>
                  <li>Home</li>
                  <li>Tickets</li>
                </ul>
                </div>
              <Button  onClick={logout}>{login?Logout:Login}</Button>
              
         
              </div>
                
               
               
            
       
   

  );
}

export default Header