import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const [Email, setEmail]=useState("");
  const [Password, setPassword]=useState("");

  const handleLogin = () =>{
    if (Email==="yourEmail" && Password==="yourPassword"){
      toast.success("Login successful!");
    }else{
      toast.error("Invalid");
    }
  }

  return (
    <div class="col-md-10 mx-auto col-lg-5">
        <form class="p-4 p-md-5 border rounded-3 bg-body-tertiary">
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" value={Email} onChange={(e) => setEmail(e.target.value)}/>
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" value={Password} onChange={(e) => setPassword(e.target.value)}/>
            <label for="floatingPassword">Password</label>
          </div>
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"/> 
              <p>Remember me </p>
            </label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" type="submit" onClick={handleLogin}>Sign up</button>
          <hr class="my-4"/>
          <small class="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
        </form>
        <ToastContainer/>
      </div>
      

  );
}

export default Signup;