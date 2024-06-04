import classNames from 'classnames/bind';
import clsx from 'clsx';
import React, { useState, useEffect } from 'react';
import styles from './Item.module.scss';
import images from '~/access/images';

function Item({
  id,
  newProduct,
  image,
  title,
  starRating,
  year,
  reviewer,
  country,
  discription,
  priceTotal,
  deleteProduct,
  quantity,
  price,
  quantityChange,
  idProduct,
}) {
  const cx = classNames.bind(styles);

  //handle when product quantity change
  useEffect(() => {
    const arr = JSON.parse(localStorage.getItem('productListAddToCart'));
    arr[id].quantity = quantity;
    localStorage.setItem('productListAddToCart', JSON.stringify(arr));
  }, [quantity]);

  //get and update the total product price of product list add to cart
  const totalPriceChange = price * quantity;
  const arr = JSON.parse(localStorage.getItem('productListAddToCart'));
  arr[id].priceTotal = totalPriceChange;
  localStorage.setItem('productListAddToCart', JSON.stringify(arr));

  //handle when delete a product
  const handleRomoveProduct = () => {
    const arr = JSON.parse(localStorage.getItem('productListAddToCart'));
    arr = [];
    localStorage.setItem('productListAddToCart', JSON.stringify(arr));
  };
//calculate total price
const totalPriceProductList = arr.reduce((total, item) => total + item.priceTotal, 0);
localStorage.setItem('totalPriceProductList', JSON.stringify(totalPriceProductList));

  return (
    <tr className={cx('grap-content')}>
      <td className={cx('item')}>
        <figure className={cx('itemside')}>
          <div className="aside">
            <img src={images['items'][image]} className={cx('img-sm')} />
          </div>
          <figcaption className="info">
            <a href="#" className="title text-dark">
              Some name of item goes here nice
            </a>
            <p className="text-muted small">
              Size: XL, Color: blue, <br /> Brand: Gucci
            </p>
          </figcaption>
        </figure>
      </td>
      <td>
        <div className={clsx('input-group mb-3', cx('input-spinner'))}>
          <div className="input-group-prepend">
            {quantity > 1 ? (
              <button
                onClick={() => {
                  quantityChange(idProduct,quantity - 1);
                }}
                className="btn btn-light"
                type="button"
                id="button-plus"
              >
                {' '}
                &minus;{' '}
              </button>
            ) : (
              <button className="btn btn-light" type="button" id="button-plus">
                {' '}
                &minus;{' '}
              </button>
            )}
          </div>
          <input
            type="text"
            className="form-control"
            onChange={(e) => {
              quantityChange(+e.target.value);
            }}
            value={quantity}
          />
          <div className="input-group-append">
            <button
              onClick={() => {
                quantityChange(idProduct, quantity+1);
              }}
              className="btn btn-light"
              type="button"
              id="button-minus"
            >
              +{' '}
            </button>
          </div>
        </div>
      </td>
      <td>
        <div className="priceTotal-wrap" style={{ textAlign: 'center' }}>
          <span className={cx('priceTotal')}>{totalPriceChange}</span>
        </div>
      </td>
      <td className="text-right">
        <a onClick={() => deleteProduct(id)} className="btn btn-light">
          {' '}
          Remove
        </a>
      </td>
    </tr>
  );
}

export default Item;
