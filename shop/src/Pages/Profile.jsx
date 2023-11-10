import React from 'react';
import './Profile.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div id='background'>
      <h1 id='head'>Sign up today</h1>
      <div class="text-center" >
          <button type="button" class="btn  me-2" id='login'><Link class="nav-link" to='/profile/signin'>Sign-in</Link></button>
          <button type="button" class="btn me-3" id='signup'><Link class="nav-link" to='/profile/signup'>Sign-up</Link></button>
        </div>
    </div>
  );
};

export default Profile;
