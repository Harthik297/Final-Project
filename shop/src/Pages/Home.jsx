import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


const Home = () => {
  return (
    <>
      <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class="active" aria-current="true"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item">
            <div class="container">
              <img src="https://th.bing.com/th/id/R.411396a6fb996e8bfe4b473f23ad7974?rik=wjDEixLDj2%2fQCQ&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fd%2fdd%2fRed_flower_open.jpg&ehk=E%2bAEiViLeXxg3wr1IN03epDXRIey%2b9CRwjYPhNoz40E%3d&risl=&pid=ImgRaw&r=0" alt="" height="100%" width="100%"/>
              <div class="carousel-caption text-start">
                <h1 >Sign Up today</h1>
                <p><a class="btn btn-lg btn-warning" href="#" >Sign up today</a></p>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <img src="https://wallpapercave.com/wp/wp2213316.jpg" alt="" height="100%" width="100%"/>
            <div class="container">
              <div class="carousel-caption">
                <h1 >Read our variety of non fictional books</h1>
                <p>Learn more about our latest collection</p>
                <p><a class="btn btn-lg btn-warning" href="#" >Learn more</a></p>
              </div>
            </div>
          </div>
          <div class="carousel-item active">
            
            <div class="container">
              <img src="https://th.bing.com/th/id/R.33a9a1e1398095e2873d8fb5d8dd2f37?rik=7w1QkZSIEHlACA&riu=http%3a%2f%2fwww.wallpaperbetter.com%2fwallpaper%2f207%2f648%2f901%2fa-bouquet-roses-beautiful-flowers-2K-wallpaper.jpg&ehk=O3jJeY9Yy9a8X5MUk%2fDnHVvSJst7OYwx589MmbwQ9n4%3d&risl=&pid=ImgRaw&r=0" alt="" height="100%" width="100%"/>
              <div class="carousel-caption text-end">
                <h1 >Browse our Flowers</h1>
                <p>Check out our latest Flowers</p>
                <p><a class="btn btn-lg btn-warning" href="#"  >Browse Library</a></p>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="text-white px-4 py-5 text-center bg-secondary " >
        <div class="py-5">
          <h1 class="display-5 fw-bold" >Why Buy Flower?</h1>
          <div class="col-lg-6 mx-auto">
            <p class="fs-5 mb-4" >A flower, sometimes known as a bloom or blossom, is the reproductive structure found in flowering plants (plants of the division Angiospermae). Flowers produce gametophytes, which in flowering plants consist of a few haploid cells which produce gametes.</p>
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
              <a href="#" class="btn btn-warning">
                Click here
              </a>
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
              <a href="#" class="btn btn-warning">
                Click here
              </a>
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
              <a href="#" class="btn btn-warning">
                Click here
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home