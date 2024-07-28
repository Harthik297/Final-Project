import React from 'react';
import './Profile.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div id='background'>
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column text-center ">

  <main class="px-3">
    <h1 id='text'>Sign Up Today.</h1>
    <p class="lead" id='text1'>Sign up today for exciting deals and offers on your first order.</p>
    <Link to='/profile/signin'><button id='login'>Login</button></Link>
    <Link to='/profile/signup'><button id='signup'>Signup</button></Link>
  </main>

  
</div>
</div>
  );
};

export default Profile;
