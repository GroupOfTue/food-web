import React from 'react';
import classNames from 'classnames/bind';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

import images from '~/access/images';
import styles from './Checkout.module.scss';

function Checkout() {
  const cx = classNames.bind(styles);
  const navigate = useNavigate();

  return (
    <section className="section-content padding-y">
      <div className="container">
        <div className="row">
          <main className="col-md-9">
            <div className="card">
              <div className="card-body border-top">
                <form className="form">
                  <div className="containerx">
                    <div className="col-50">
                      <BillingInfo /> {/* Call BillingInfo component */}{' '}
                      <label for="fullname">
                        <i className="fa fa-user">&nbsp;</i>Full Name
                      </label>
                      <input type="text" id="fullname" placeholder="Mr John" />
                      <label for="email">
                        <i className="fa fa-envelope">&nbsp;</i>Your Email
                      </label>
                      <input type="text" id="email" placeholder="John_admin@mail.com" />
                      <label for="address">
                        <i className="fa fa-address-card">&nbsp;</i>Address
                      </label>
                      <input type="text" id="address" placeholder="542 st sant serit" />
                      <label for="city">
                        <i className="fa fa-phone">&nbsp;</i>Phone number
                      </label>
                      <input type="phone" id="city" placeholder="Your phone" />
                      <div className="containerx">
                        <div className="col-50">
                          <label for="note">Note</label>

                          <textarea className={cx('text-area')} rows="7" cols="117" name="myTextarea"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>

                <a href="#" className={clsx('btn btn-primary float-md-right', cx('checkout-btn'))}>
                  Finish <i className="fa fa-chevron-right"></i>
                </a>
                <a onClick={() => navigate(-1)} className="btn btn-light">
                  <i className={clsx('fa fa-chevron-left', cx('back-to-cart-btn'))}></i>
                  Back to Cart
                </a>
              </div>
            </div>

            <div className={clsx('alert alert-success mt-3', cx('icon-text'))}>
              <p className={cx('icon-text')}>
                <i className="icon text-success fa fa-truck"></i> Free if within 5km radius
              </p>
            </div>
          </main>
          <aside className="col-md-3">
            <div className="card mb-3">
              <div className="card-body">
                <div className="col-25">
                  <div className="cart">
                    <h4>
                      Cart{' '}
                      <span className={cx('right')}>
                        <i className="fa fa-shopping-cart">&nbsp;</i>4
                      </span>
                    </h4>
                    <p>
                      <a href="#">Product 1</a>
                      <span className={cx('right')}>$15</span>
                    </p>
                    <p>
                      <a href="#">Product 2</a>
                      <span className={cx('right')}>$5</span>
                    </p>
                    <p>
                      <a href="#">Product 3</a>
                      <span className={cx('right')}>$8</span>
                    </p>
                    <p>
                      <a href="#">Product 4</a>
                      <span className={cx('right')}>$2</span>
                    </p>
                    <p>&nbsp;</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className={cx('card-body', cx('shopping-information'))}>
                {/* Your total price calculation logic here */}
                <div className="dlist-align">
                  <dt>Total price:</dt>
                  <dd className="text-right">USD {/* Total price */}</dd>
                </div>
                {/* ... other price details ... */}
                <hr />
                <p className="text-center mb-3">
                  <img src={images.misc.payments} height="26" />
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function BillingInfo() {
  // Implement your billing info form logic here
  return (
    <div className="col-md-6">
      <h3>Billing Address</h3>
      {/* Billing info form fields */}
    </div>
  );
}

function PaymentInfo() {
  // Implement your payment info form logic here
  return (
    <div className="col-md-6">
      <h3>Payment</h3>
      {/* Payment info form fields */}
    </div>
  );
}

export default Checkout;
