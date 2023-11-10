import React from 'react'

const Orders = () => {
  return (
    <div>
      <main>
    <div class="py-5 text-center">
      <h2>Flower Delivery Order</h2>
      <p class="lead">Please provide your delivery and payment information to order beautiful flowers for your loved ones.</p>
    </div>

    <div class="row g-5 ">
      <div class="col-md-5 col-lg-4 order-md-last">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-primary">Your Order</span>
          <span class="badge bg-primary rounded-pill">3</span>
        </h4>
        <ul class="list-group mb-3">
          <li class="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 class="my-0">Rose Bouquet</h6>
              <small class="text-body-secondary">A dozen red roses</small>
            </div>
            <span class="text-body-secondary">Rs39.99</span>
          </li>
          <li class="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 class="my-0">Mixed Flower Basket</h6>
              <small class="text-body-secondary">Assorted seasonal flowers</small>
            </div>
            <span class="text-body-secondary">Rs29.99</span>
          </li>
          <li class="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 class="my-0">Delivery Fee</h6>
              <small class="text-body-secondary">Standard delivery</small>
            </div>
            <span class="text-body-secondary">Rs5.00</span>
          </li>
          <li class="list-group-item d-flex justify-content-between bg-body-tertiary">
            <div class="text-success">
              <h6 class="my-0">Promo code</h6>
              <small>FLOWER10</small>
            </div>
            <span class="text-success">−Rs10.00</span>
          </li>
          <li class="list-group-item d-flex justify-content-between">
            <span>Total (Rs)</span>
            <strong>Rs64.99</strong>
          </li>
        </ul>

        <form class="card p-2">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Promo code"/>
            <button type="submit" class="btn btn-secondary">Apply</button>
          </div>
        </form>
      </div>
      <div class="col-md-7 col-lg-8">
        <h4 class="mb-3">Delivery Details</h4>
        <form class="needs-validation" novalidate="">
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="firstName" class="form-label">First Name</label>
              <input type="text" class="form-control" id="firstName" placeholder="" value="" required=""/>
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div class="col-sm-6">
              <label for="lastName" class="form-label">Last Name</label>
              <input type="text" class="form-control" id="lastName" placeholder="" value="" required=""/>
              <div class="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div class="col-12">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" id="email" placeholder="you@example.com" required=""/>
              <div class="invalid-feedback">
                Please enter a valid email address for order updates.
              </div>
            </div>

            <div class="col-12">
              <label for="address" class="form-label">Delivery Address</label>
              <input type="text" class="form-control" id="address" placeholder="1234 Main St" required=""/>
              <div class="invalid-feedback">
                Please enter the delivery address.
              </div>
            </div>

            <div class="col-md-6">
              <label for="city" class="form-label">City</label>
              <input type="text" class="form-control" id="city" placeholder="" required=""/>
              <div class="invalid-feedback">
                City is required.
              </div>
            </div>

            <div class="col-md-6">
              <label for="zip" class="form-label">Zip Code</label>
              <input type="text" class="form-control" id="zip" placeholder="" required=""/>
              <div class="invalid-feedback">
                Zip code is required.
              </div>
            </div>

            <div class="col-12">
              <label for="delivery-date" class="form-label">Delivery Date</label>
              <input type="date" class="form-control" id="delivery-date" required=""/>
              <div class="invalid-feedback">
                Please select a delivery date.
              </div>
            </div>

            <div class="col-12">
              <label for="message" class="form-label">Message to Recipient</label>
              <textarea class="form-control" id="message" rows="3" placeholder="Write a message to the recipient"></textarea>
            </div>
          </div>

          <hr class="my-4"/>

          <h4 class="mb-3">Payment</h4>

          <div class="my-3">
            <div class="form-check">
              <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked="" required=""/>
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

          <hr class="my-4"/>

          <button class="w-100 btn btn-primary btn-lg" type="submit">Place Order</button>
        </form>
      </div>
    </div>
  </main>
    </div>
  );
}

export default Orders