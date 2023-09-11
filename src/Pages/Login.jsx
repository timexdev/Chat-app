import React from "react";
import Add from "../Pages/Images/add profile pic icon.png";

const Login = () => {
  return (
    <div className="formPage">
      <div className="formContainer">
        <div className="logo text-success">Timex Chat</div>
        <div className="pageTitle text-success">Login</div>
        <form action="">
          <input className="form-control" type="email" placeholder="Email" />
          <input className="form-control" type="password" placeholder="Password" />
         
          <button className="btn btn-success">Sign In</button>
        </form>
        <p className="text-success">Don't have an account? Register</p>
      </div>
    </div>
  );
};

export default Login;
