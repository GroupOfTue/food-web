import React, { useState } from 'react';
import classNames from 'classnames/bind';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

import styles from './Checkout.module.scss';
import {addOrderApi} from '~/api/order'

function Checkout() {
  const cx = classNames.bind(styles);
  const navigate = useNavigate();
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [note, setNote] = useState('');

  const [priceTotal] = useState(() => {
    return JSON.parse(localStorage.getItem('totalPriceProductList')) ?? [];
  });
  const [productListAddToCart, setProductListAddToCart] = useState(
    JSON.parse(localStorage.getItem('productListAddToCart')),
  );

  const arrProductCart = JSON.parse(localStorage.getItem('productListAddToCart'))

  const handleSubmit = async (event) => {
    event.preventDefault();
    arrProductCart.map((item) => {
      console.log("item", item);
      handleAddToOrderApi( item.id, item.priceTotal, item.quantity)
    })

    async function handleAddToOrderApi(productId, totalPrice, quantity) {
      try {
        const response = await addOrderApi(1, address, email, phone, note, 0, productId, totalPrice, quantity);
        console.log("call");
        if (response === 'data inserted') {
          localStorage.removeItem('productListAddToCart')
          navigate('/Order');
        }
      } catch (error) {
        console.error("Lỗi đăng nhập:", error);
      }
    }
  };

  return (
    <section className="section-content padding-y">
      <div className="container">
        <div className="row">
          <main className="col-md-12">
            <div className="card">
              <div className="card-body border-top">
                <form className="form" onSubmit={handleSubmit}>
                  <div className="containerx">
                    <div className="col-50">
                      <BillingInfo /> {/* Call BillingInfo component */}{' '}
                      <label for="fullname">
                        <i className="fa fa-user">&nbsp;</i>Full Name
                      </label>
                      <input
                        type="text"
                        id="fullname"
                        placeholder="Mr John"
                        value={fullname}
                        onChange={(e) => {
                          setFullname(e.target.value);
                        }}
                      />
                      <label for="email">
                        <i className="fa fa-envelope">&nbsp;</i>Your Email
                      </label>
                      <input
                        type="text"
                        id="email"
                        placeholder="John_admin@mail.com"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                      <label for="address">
                        <i className="fa fa-address-card">&nbsp;</i>Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        placeholder="542 st sant serit"
                        value={address}
                        onChange={(e) => {
                          setAddress(e.target.value);
                        }}
                      />
                      <label for="city">
                        <i className="fa fa-phone">&nbsp;</i>Phone number
                      </label>
                      <input
                        type="phone"
                        id="city"
                        placeholder="Your phone"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                      />
                      <div className="containerx">
                        <div className="col-50">
                          <label for="note">Note</label>

                          <textarea
                            className={cx('text-area')}
                            rows="7"
                            cols="117"
                            name="myTextarea"
                            value={note}
                            onChange={(e) => {
                              setNote(e.target.value);
                            }}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                <button type='submit' className={clsx('btn btn-primary float-md-right', cx('checkout-btn'))}>
                  Finish <i className="fa fa-chevron-right"></i>
                </button>
                </form>

                <a onClick={() => navigate(-1)} className={cx('btn btn-light')}>
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
