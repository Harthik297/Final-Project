import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "react-toastify/dist/ReactToastify.css"
import axios from "axios";
import {toast,ToastContainer} from "react-toastify";


function Signin() {
  const [Name, setName]=useState("");
  const [Email,setEmail]=useState("");
  const [Password, setPassword]=useState("");
  const [Mobile, setMobile]=useState("");

  const handleRegister = async() =>{
    try{
      console.log("working")
      const response = await axios.post("http://localhost:5000/register",{
        Name,
        Email,
        Password,
        Mobile,
        
      });
      console.log(response.data);
      toast.success(response.data.message);
      
    }catch(error){
      toast.error("Log in successfully");
    }
  }
  

  return (
   <div>
    <div class="card-body p-md-5">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                  <p class="text-center h1 fw-bold mb-5 mt-4">Sign up</p>

                  <form onSubmit={handleRegister} >

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input type="text" id="form3Example1c" class="form-control" value={Name} onChange={(e) => setName(e.target.value)}/>
                        <label class="form-label" for="form3Example1c" >Your Name</label>
                      <div class="form-notch"><div class="form-notch-leading" ></div><div class="form-notch-middle" ></div><div class="form-notch-trailing"></div></div></div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input type="email" id="form3Example3c" class="form-control" value={Email} onChange={(e) => setEmail(e.target.value)}/>
                        <label class="form-label" for="form3Example3c" >Your Email</label>
                      <div class="form-notch"><div class="form-notch-leading" ></div><div class="form-notch-middle"></div><div class="form-notch-trailing"></div></div></div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input type="password" id="form3Example4c" class="form-control" value={Password} onChange={(e) => setPassword(e.target.value)}/>
                        <label class="form-label" for="form3Example4c" >Password</label>
                      <div class="form-notch"><div class="form-notch-leading" ></div><div class="form-notch-middle" ></div><div class="form-notch-trailing"></div></div></div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input type="Mobile" id="form3Example4cd" class="form-control" value={Mobile} onChange={(e) => setMobile(e.target.value)}/>
                        <label class="form-label" for="form3Example4cd" >Mobile</label>
                      <div class="form-notch"><div class="form-notch-leading" ></div><div class="form-notch-middle" ></div><div class="form-notch-trailing"></div></div></div>
                    </div>

                    <div class="form-check d-flex justify-content-center mb-5">
                      <input class="form-check-input me-2" type="checkbox" id="form2Example3c"/>
                      <label class="form-check-label" for="form2Example3">
                        I agree all statements in <a href="#!">Terms of service</a>
                      </label>
                    </div>

                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="button" class="btn btn-primary btn-lg" onClick={handleRegister} >Register</button>
                    </div>

                  </form>

                </div>
                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" class="img-fluid" alt="Sample image"/>

                </div>
              </div>
            </div>
          <ToastContainer/>
   </div>
  )
}

export default Signin;