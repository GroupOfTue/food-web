import classNames from 'classnames/bind';
import clsx from 'clsx';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import images from '~/access/images';
import styles from './Wishlist.module.scss';
import { GetAllProduct } from '~/MockApi/GetAllProduct.js';
function Wishlist() {
  const cx = classNames.bind(styles);

  //handle when product quantity change

  return (
    <div className="container">
      <div className="wishlist">
        <h2>Wishlist</h2>
        <main className="col-md-12">
          <div className="card">
            <table className="table table-borderless">
              <thead className="text-muted">
                <tr className="small text-uppercase">
                  <th scope="col">Image</th>
                  <th scope="col" className="text-left" style={{ textAlign: 'left' }}>
                    Product
                  </th>

                  <th scope="col" width="120" style={{ textAlign: 'center' }}>
                    Price
                  </th>
                  <th scope="col" style={{ textAlign: 'center' }} width="150">
                    ADD{' '}
                  </th>
                  <th scope="col" style={{ textAlign: 'center' }} width="125">
                    Remove{' '}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img className={cx('image-wishlist')} src="image-path" alt="image-description" />
                  </td>
                  <td>Sản phẩm 1</td>
                  <td className={cx('price')}>100 USD</td>
                  <td className="text-right">
                    <a
                      onClick={() => {
                        // addToCart();
                      }}
                      className={clsx('btn btn-primary', cx('cart-icon'))}
                    >
                      <i className="fas fa-shopping-cart"></i> <span className="text">Add to cart</span>
                    </a>
                  </td>
                  <td className="text-right">
                    <a className={clsx('btn btn-primary', cx('cart-icon'))}>
                      <i class="fas fa-trash"></i> <span className="text">Remove</span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img className={cx('image-wishlist')} src="image-path" alt="image-description" />
                  </td>
                  <td>Sản phẩm 2</td>
                  <td className={cx('price')}>200 USD</td>
                  <td className="text-right">
                    <a
                      onClick={() => {
                        // addToCart();
                      }}
                      className={clsx('btn btn-primary', cx('cart-icon'))}
                    >
                      <i className="fas fa-shopping-cart"></i> <span className="text">Add to cart</span>
                    </a>
                  </td>
                  <td className="text-right">
                    <a className={clsx('btn btn-primary', cx('cart-icon'))}>
                      <i class="fas fa-trash"></i> <span className="text">Remove</span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img className={cx('image-wishlist')} src="image-path" alt="image-description" />
                  </td>
                  <td>Sản phẩm 3</td>
                  <td className={cx('price')}>300 USD</td>
                  <td className="text-right">
                    <a
                      onClick={() => {
                        // addToCart();
                      }}
                      className={clsx('btn btn-primary', cx('cart-icon'))}
                    >
                      <i className="fas fa-shopping-cart"></i> <span className="text">Add to cart</span>
                    </a>
                  </td>
                  <td className="text-right">
                    <a className={clsx('btn btn-primary', cx('cart-icon'))}>
                      <i class="fas fa-trash"></i> <span className="text">Remove</span>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Wishlist;