import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './Order.css'
const OrderPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { orderDetails = [], totalAmount = 0 } = location.state || {};

  const [step, setStep] = useState(1);
  const [deliveryDetails, setDeliveryDetails] = useState({
    name: '',
    phone: '',
    address: ''
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleNextStep = () => {
    if (step === 2 && (!deliveryDetails.name || !deliveryDetails.phone || !deliveryDetails.address)) {
      alert('Please fill in all delivery details');
      return;
    }
    setStep(step + 1);
  };

  const handlePreviousStep = () => {

    if (step === 2){
    setStep(step - 1);
}
    else{
      navigate('/flowers');
    }
};

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDeliveryDetails({
      ...deliveryDetails,
      [name]: value
    });
  };

  const handlePayment = () => {
    // Simulate payment processing
    setTimeout(() => {
      setShowSuccessMessage(true);
    }, 1000);
  };

  const handleReturnHome = () => {
    setShowSuccessMessage(false);
    navigate('/');
  };

  return (
    <div className="container mt-4 me-md-7">
      {showSuccessMessage ? (
        <div className="alert alert-success" role="alert">
          Your payment is successful. The package is on the way. 
          <a  id='return' onClick={handleReturnHome}>Return to Home</a>
        </div>
      ) : (
        <>
          {step === 1 && (
            <div>
              <h2>Confirm Order</h2>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Flower Name</th>
                    <th>Quantity</th>
                    <th>Price (Per Item)</th>
                    <th>Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  {orderDetails.map((item, index) => (
                    item.quantity > 0 && (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>₹ {item.price}</td>
                        <td>₹ {item.quantity * item.price}</td>
                      </tr>
                    )
                  ))}
                  <tr>
                    <td colSpan="3" className="text-end"><strong>Total Amount</strong></td>
                    <td><strong>₹ {totalAmount}</strong></td>
                  </tr>
                </tbody>
              </table>
              <div>
              <button id='back' onClick={handlePreviousStep}>Cancel</button>
              <button id='next' onClick={handleNextStep}>Confirm</button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2>Delivery Details</h2>
              <form>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={deliveryDetails.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    value={deliveryDetails.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <textarea
                    className="form-control"
                    name="address"
                    value={deliveryDetails.address}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              </form>
              <button id='back'  onClick={handlePreviousStep}>Back</button>
              <button id='next' onClick={handleNextStep}>Next</button>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2>Payment</h2>
              <p>Please enter your payment details.</p>
              <div class="my-3">
            <div class="form-check">
              <input id="credit" name="paymentMethod" type="radio" class="form-check-input"  required=""/>
              <label class="form-check-label" for="credit">Credit card</label>
            </div>
            <div class="form-check">
              <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required=""/>
              <label class="form-check-label" for="debit">Debit card</label>
            </div>
            <div class="form-check">
              <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required=""/>
              <label class="form-check-label" for="paypal">PayPal</label>
            </div>
          </div>

          <div class="row gy-3">
            <div class="col-md-6">
              <label for="cc-name" class="form-label">Name on Card</label>
              <input type="text" class="form-control" id="cc-name" placeholder="" required=""/>
              <small class="text-body-secondary">Full name as displayed on card</small>
              <div class="invalid-feedback">
                Name on card is required.
              </div>
            </div>

            <div class="col-md-6">
              <label for="cc-number" class="form-label">Credit Card Number</label>
              <input type="text" class="form-control" id="cc-number" placeholder="" required=""/>
              <div class="invalid-feedback">
                Credit card number is required.
              </div>
            </div>

            <div class="col-md-3">
              <label for="cc-expiration" class="form-label">Expiration</label>
              <input type="text" class="form-control" id="cc-expiration" placeholder="" required=""/>
              <div class="invalid-feedback">
                Expiration date is required.
              </div>
            </div>

            <div class="col-md-3">
              <label for="cc-cvv" class="form-label">CVV</label>
              <input type="text" class="form-control" id="cc-cvv" placeholder="" required=""/>
              <div class="invalid-feedback">
                CVV is required.
              </div>
            </div>
          </div>
              <button id='back' onClick={handlePreviousStep}>Cancel</button>
              <button id='pay' onClick={handlePayment}>Pay</button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default OrderPage;
