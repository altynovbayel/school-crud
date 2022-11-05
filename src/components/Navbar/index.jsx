import React from 'react';
import c from './Navbar.module.scss'
import {NavLink, useNavigate} from "react-router-dom";
import {signOut} from "firebase/auth";
import {auth} from "../../firebase";

function Navbar() {
  const navigate = useNavigate()
  return (
    <div className={c.navbar}>
      <div className={c.container}>
        <div className={c.nav}>
          <h1>CRYXXEN</h1>
          <div className={c.nav_btns}>
            <NavLink
              className={({isActive}) => isActive ? c.active : ''}
              to={'/admin'}>
              Admin
            </NavLink>
        
            <NavLink
              className={({isActive}) => isActive ? c.active : ''}
              to={'/main'}>
              Main
            </NavLink>
          </div>
      
          <button
            className={c.btn}
            onClick={() => {
              signOut(auth).then(() => navigate('/auth/login'))
              window.location.reload();
            }}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;