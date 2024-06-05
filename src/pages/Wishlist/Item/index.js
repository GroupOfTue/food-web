import classNames from 'classnames/bind';
import clsx from 'clsx';
import React, { useState, useEffect } from 'react';
import styles from './Item.module.scss';
import images from '~/access/images';
import { useNavigate } from 'react-router-dom';
import ProductList from '~/pages/ProductList';
function Item({
  id,
  newProduct,
  image,
  title,
  starRating,
  year,
  reviewer,
  address,
  description, // Corrected typo from 'discription' to 'description'
  priceTotal,
  quantity, // Not used in wishlist functionality, can be removed
  price, // Not used in wishlist functionality, can be removed
  quantityChange, // Not used in wishlist functionality, can be removed
  idProduct, // Not used in wishlist functionality, can be removed
}) {
  const cx = classNames.bind(styles);
  const [storedWishlist, setWishlist] = useState([JSON.parse(localStorage.getItem('wishlist'))]);
  const navigate = useNavigate();
  // Handle removing a product from the wishlist

  useEffect(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, [storedWishlist]);

  const handleDelete = (id) => {
    const arr = JSON.parse(localStorage.getItem('wishlist'));
    arr.splice(id, 1);
    localStorage.setItem('wishlist', JSON.stringify(arr));
    setWishlist(arr);
  };

  return (
    <tr className={cx('grap-content')}>
      <td className={cx('item')}>
        <figure className={cx('itemside')}>
          <div className="aside">
            <img src={images['items'][image]} className={cx('img-sm')} />
          </div>
        </figure>
      </td>
      <td>
        <figcaption className="info">
          <a href="#" className="title text-dark">
            {title}
          </a>
          {/* <p className="text-muted small">
            {address} <br /> Brand: Gucci
          </p> */}
        </figcaption>
      </td>

      <td className={cx('price')}>{price}</td>
      <td className="text-right">
        <a
          onClick={() => {
            navigate(`/ItemDetails/${idProduct}`);
          }}
          className={clsx('btn btn-primary', cx('cart-icon'))}
        >
          <i className="fas fa-shopping-cart"></i> <span className="text">Back to Product</span>
        </a>
      </td>
      <td
        onClick={() => {
          handleDelete();
        }}
        className="text-right"
      >
        <a className={clsx('btn btn-primary', cx('cart-icon'))}>
          <i class="fas fa-trash"></i> <span className="text">Remove</span>
        </a>
      </td>
    </tr>
  );
}

export default Item;
