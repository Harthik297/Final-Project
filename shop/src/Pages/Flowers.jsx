import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';
import './Flowers.css';

const Flowers = () => {
  const [quantity1, setQuantity1] = useState(0);
  const [quantity2, setQuantity2] = useState(0);
  const [quantity3, setQuantity3] = useState(0);
  const [quantity4, setQuantity4] = useState(0);
  const [quantity5, setQuantity5] = useState(0);
  const [quantity6, setQuantity6] = useState(0);

  const navigate = useNavigate();

  const handleConfirmOrder = () => {
    const orderDetails = [
      { name: 'Divine Beauty', quantity: quantity1, price: 1895 },
      { name: 'Floral Fiona', quantity: quantity2, price: 2445 },
      { name: 'A Walk in the Garden', quantity: quantity3, price: 2645 },
      { name: 'Dreaming of Red', quantity: quantity4, price: 1695 },
      { name: 'The Beloved', quantity: quantity5, price: 1845 },
      { name: 'Hues of Sky', quantity: quantity6, price: 1895 }
    ].filter(item => item.quantity > 0); // Filter out items with zero quantity

    const totalAmount = orderDetails.reduce((sum, item) => sum + (item.quantity * item.price), 0);

    navigate('/orders', { state: { orderDetails, totalAmount } });
  };

  return (
    <>
      <div>
        <button id='buy' onClick={handleConfirmOrder}>Buy</button>
      </div>
      <hr id='horizontal'/>
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {/* Repeat similar structure for each flower item */}
            <div className="col">
              <div className="card shadow-sm">
                <img className="bd-placeholder-img card-img-top" width="100%" height="100%" src="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt6prodlp/products/p-divine-beauty-202679-m.jpg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false" ></img>
                <div className="card-body">
                  <h1>Divine Beauty</h1>
                  <p className="card-text">Marshalled with a loving touch, the assortment is a dreamy delight that encases splendour and charm. And its oh-so-wonderous spirit makes it a felicitous floral surprise for friends and family too.</p>
                  <h1>₹ 1895.00</h1>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <button className="btn btn-danger" onClick={() => setQuantity1(prev => Math.max(prev - 1, 0))} disabled={quantity1 <= 0}>-</button>
                      <span className="mx-3">{quantity1}</span>
                      <button className="btn btn-success" onClick={() => setQuantity1(prev => prev + 1)}>+</button>
                      <button className="btn btn-secondary ms-3" onClick={() => setQuantity1(0)}>Reset</button>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img className="bd-placeholder-img card-img-top" width="100%" height="100%" src="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt6prodlp/products/p-floral-fiona-155098-m.jpg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false" ></img>
                <div className="card-body">
                  <h1>Floral Fiona</h1>
                  <p className="card-text">A soft and subtle display of affection - aqua pink roses, pink carnations, pink gypso, and kamini bring out the old familiar charm of love and adoration. Perfect to make someone's day splendid.</p>
                  <h1>₹ 2445.00</h1>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <button className="btn btn-danger" onClick={() => setQuantity2(prev => Math.max(prev - 1, 0))} disabled={quantity2 <= 0}>-</button>
                      <span className="mx-3">{quantity2}</span>
                      <button className="btn btn-success" onClick={() => setQuantity2(prev => prev + 1)}>+</button>
                      <button className="btn btn-secondary ms-3" onClick={() => setQuantity2(0)}>Reset</button>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img className="bd-placeholder-img card-img-top" width="100%" height="100%" src="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt6prodlp/products/p-a-walk-in-the-garden-basket-132899-m.jpg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false" ></img>
                <div className="card-body">
                  <h1>A Walk in the Garden</h1>
                  <p className="card-text">Glorious, luxurious yet humble - Lilac Roses, Saintiny Pink, Mauve Limonium and Leather Fern have the old Eden Garden charm. Give them to your loved ones on their special day.</p>
                  <h1>₹ 2645.00</h1>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <button className="btn btn-danger" onClick={() => setQuantity3(prev => Math.max(prev - 1, 0))} disabled={quantity3 <= 0}>-</button>
                      <span className="mx-3">{quantity3}</span>
                      <button className="btn btn-success" onClick={() => setQuantity3(prev => prev + 1)}>+</button>
                      <button className="btn btn-secondary ms-3" onClick={() => setQuantity3(0)}>Reset</button>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img className="bd-placeholder-img card-img-top" width="100%" height="100%" src="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt6prodlp/products/p-dreaming-of-red-201464-m.jpg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false" ></img>
                <div className="card-body">
                  <h1>Dreaming of Red</h1>
                  <p className="card-text">Red roses wrapped with love. A tender disposition of warmth and care, it's a romantic gesture that reveals all that which lays in the bottom of your heart. And makes your one and only feel like the luckiest in the world.</p>
                  <h1>₹ 1695.00</h1>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <button className="btn btn-danger" onClick={() => setQuantity4(prev => Math.max(prev - 1, 0))} disabled={quantity4 <= 0}>-</button>
                      <span className="mx-3">{quantity4}</span>
                      <button className="btn btn-success" onClick={() => setQuantity4(prev => prev + 1)}>+</button>
                      <button className="btn btn-secondary ms-3" onClick={() => setQuantity4(0)}>Reset</button>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img className="bd-placeholder-img card-img-top" width="100%" height="100%" src="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt6prodlp/products/p-the-beloved-155072-m.jpg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false" ></img>
                <div className="card-body">
                  <h1>The Beloved</h1>
                  <p className="card-text">A rosy tale of aqua pink roses, jumilla roses, pink roses and pink leather fern in a small round floral box exudes the hues of twilight. This stunning arrangement with a rosy vibe is bound to leave its recipient mesmerized.</p>
                  <h1>₹ 1845.00</h1>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <button className="btn btn-danger" onClick={() => setQuantity5(prev => Math.max(prev - 1, 0))} disabled={quantity5 <= 0}>-</button>
                      <span className="mx-3">{quantity5}</span>
                      <button className="btn btn-success" onClick={() => setQuantity5(prev => prev + 1)}>+</button>
                      <button className="btn btn-secondary ms-3" onClick={() => setQuantity5(0)}>Reset</button>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img className="bd-placeholder-img card-img-top" width="100%" height="100%" src="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt6prodlp/products/p-hues-of-sky-149690-m.jpg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false" ></img>
                <div className="card-body">
                  <h1>Hues of Sky</h1>
                  <p className="card-text">Hold the mighty sky in your hands, this arrangement of blue gypso gives you a glimpse of heaven. Tied with a blue net ribbon in a ceramic vase, this divine floral surprise is sure to make anyone's day bright and full of positivity.</p>
                  <h1>₹ 1895.00</h1>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <button className="btn btn-danger" onClick={() => setQuantity6(prev => Math.max(prev - 1, 0))} disabled={quantity6 <= 0}>-</button>
                      <span className="mx-3">{quantity6}</span>
                      <button className="btn btn-success" onClick={() => setQuantity6(prev => prev + 1)}>+</button>
                      <button className="btn btn-secondary ms-3" onClick={() => setQuantity6(0)}>Reset</button>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default Flowers;
