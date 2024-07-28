import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    
    <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://th.bing.com/th/id/R.f71e112efebd27a193f5935b8720d6de?rik=i0FbnAUaN7warg&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fgYNxKEP.jpg&ehk=OPK9P%2b%2fFHvjptJii0S9%2fm%2f2g%2fTXLQ2kM7nSy3Muw1Qc%3d&risl=&pid=ImgRaw&r=0" class="d-block w-100" alt="..."></img>
      <div class="carousel-caption text-end">
                <h2 id= 'head'>Check out our variety of flowers</h2>
                <Link to="/flowers">
                <p><a class="btn btn-lg btn-warning" >Browse bouquet</a></p></Link>
              </div>
    </div>
   
  </div>

</div>
      <div class="text-white px-4 py-5 text-center bg-secondary " >
        <div class="py-5">
          <h1 class="display-5 fw-bold" >Why Buy Flower?</h1>
          <div class="col-lg-6 mx-auto">
            <p class="fs-5 mb-4" >Remember, flowers aren't just gifts; they're little bundles of well-being. Whether you buy them for yourself or share them with others, their positive effects are worth celebrating! 🌸😊. 
</p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
              
            </div>
          </div>
        </div>
      </div>
      <div class="container px-4 py-5" id="hanging-icons">
        <h2 class="pb-2 border-bottom" >Latest News</h2>
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div class="col d-flex align-items-start">
            <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                  </svg>
            </div>
            <div>
              <h3 class="fs-2 text-body-emphasis" >Get upto 20% off on first purchase</h3>
              <p>For our new customer we are giving flat 20% off on their first purchase</p>
              <Link to="/flowers">
              <a href="#" class="btn btn-warning">
                Click here
              </a></Link>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                  </svg>
            </div>
            <div>
              <h3 class="fs-2 text-body-emphasis" >Dasara Festival sale</h3>
              <p>Get upto 30% off on Mythological based books</p>
              <Link to="/flowers"><a href="#" class="btn btn-warning">
                Click here
              </a></Link>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                  </svg>
            </div>
            <div>
              <h3 class="fs-2 text-body-emphasis" >Login in to get special coupen</h3>
              <p>Log in to our website</p>
              <Link to="/profile"><a href="#" class="btn btn-warning">
                Click here
              </a></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home