import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div class="container border-top">
  <footer class="py-5">
    <div class="row">
      <div class="col-6 col-md-2 mb-3">
        <h5>Navbar</h5>
        <ul class="nav flex-column ">
          <li class="nav-item mb-2"><Link to='/' class="nav-link p-0 text-black">Home</Link></li>
          <li class="nav-item mb-2"><Link to='/flowers' class="nav-link p-0 text-black">Flowers</Link></li>
          <li class="nav-item mb-2"><Link to='/orders' class="nav-link p-0 text-black">Orders</Link></li>
          <li class="nav-item mb-2"><Link to='/about' class="nav-link p-0 text-black">About</Link></li>
          <li class="nav-item mb-2"><Link to='/services' class="nav-link p-0 text-black">Services</Link></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <h5>Contacts</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><Link to='/' class="nav-link p-0 text-black">Facebook</Link></li>
          <li class="nav-item mb-2"><Link to='/' class="nav-link p-0 text-black">Instagram</Link></li>
          <li class="nav-item mb-2"><Link to='/' class="nav-link p-0 text-black">Youtube</Link></li>
          <li class="nav-item mb-2"><Link to='/' class="nav-link p-0 text-black">EMail</Link></li>
          <li class="nav-item mb-2"><Link to='/' class="nav-link p-0 text-black">Phone</Link></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><Link to='' class="nav-link p-0 text-black">Home</Link></li>
          <li class="nav-item mb-2"><Link to='' class="nav-link p-0 text-black">Features</Link></li>
          <li class="nav-item mb-2"><Link to='' class="nav-link p-0 text-black">Pricing</Link></li>
          <li class="nav-item mb-2"><Link to='' class="nav-link p-0 text-black">FAQs</Link></li>
          <li class="nav-item mb-2"><Link to='' class="nav-link p-0 text-black">About</Link></li>
        </ul>
      </div>

      <div class="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div class="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" class="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" class="form-control" placeholder="Email address"/>
            <button class="btn button" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>© 2023 Company, Inc. All rights reserved.</p>
      <ul class="list-unstyled d-flex">
        <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"></svg></a></li>
        <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"></svg></a></li>
        <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"></svg></a></li>
      </ul>
    </div>
  </footer>
</div>
    </div>
  )
}

export default Footer;
