import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Flowers.css';

const Flowers = () => {
  return (
    <>
    <h2 class="pb-2 border-bottom" >Flowers</h2>
      <div class="card" id="flower1">
  <img src="https://www.fnp.com/images/pr/s/v20201121001645/scintillating-floral-mix_1.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Scintillating Floral Mix Vase</h5>
    <a href="#" class="btn btn-primary">Buy</a>
  </div>
</div>
<div class="card" id='flower2'>
  <img src="https://www.fnp.com/images/pr/l/v20200120192705/luxurious-flower-arrangement_1.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Luxurious Flower Arrangement</h5>
    <a href="#" class="btn btn-primary">Buy</a>
  </div>
</div>
    </>
  )
}

export default Flowers