import React, { useState } from 'react';
import "./LoginSignup.css";

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const LoginSignup = () => {

  // handling login-signup with javascript here
  const [action,setAction] = useState("Signin");

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
        <div className="inputs">
          {/* starts here */}
          {/* now here we want to hide lost password from the sign-up form and hide name input filed from the login form */}
          {action==="Login"?<div></div>:<div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder='Name' />
          </div>}
          {/* ends here */}
          
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder='Email Id' />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder='Password' />
          </div>
        </div>
        {/* we shall kid the lost PASSWORD from here */}
        {action==="Sign Up"?<div></div>: <div className="forgot-password">Lost Password?<span>Click here!</span></div>}
        <div className="submit-container">
          {/* the onlick,  onClick={()=>{setAction('Sign Up')}} will work on response to button clicked*/}
          <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction('Sign Up')}}>Sign Up</div>
          <div className={action==="Sign Up"?"submit gray":"submit"}  onClick={()=>{setAction('Login')}}>Login</div>
        </div>
    </div>
  )
}

export default LoginSignup