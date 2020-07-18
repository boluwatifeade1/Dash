import React from 'react';
import './SignIn.css'


const SignIn = () => {
  return (
    <div className="SignInWrapper">
      <div className="SignIn">
        <span className="SignIn__header">Welcome Back</span>
        <span className="SignIn__header--secondary">Fill in your details to login to your account</span>
        <form>
          <div>
            <label>Email Address</label>
            <input type="email" required placeholder="mail@mail.com"/>
          </div>
          <div>
            <label>Password</label>
            <input type="password" required/>
          </div>
          <div>
            <input className="checkbox" type="checkbox" />
            <label>Remember me</label>
          </div>
          <button className="btn">Login to my Account</button>
          <span>Forgot Passsword ?</span>
        </form>
      </div>
    </div>
  );
};

export default SignIn;