import React from 'react';
import c from './Login.module.scss'
import {FcGoogle} from "react-icons/fc";
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {auth} from "../../../../firebase";


function Login() {
  const provider = new GoogleAuthProvider()
  const handleLogin = e => {
    e.preventDefault()
    signInWithPopup(auth, provider)
  }
  return (
    <div className={c.container}>
      <div className={c.block}>
        <div className={c.forms}>
          <p className={c.btn}>
            Login with Google
          </p>
          <FcGoogle onClick={handleLogin}/>
        </div>
      </div>
    </div>
  );
}

export default Login;