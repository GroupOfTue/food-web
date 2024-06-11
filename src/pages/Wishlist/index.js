import classNames from 'classnames/bind';
import clsx from 'clsx';
import React, { useState, useEffect } from 'react';
import Item from './Item';

import images from '~/access/images';
import styles from './Wishlist.module.scss';
import { GetAllProduct } from '~/MockApi/GetAllProduct.js';

function Wishlist() {
  const cx = classNames.bind(styles);
  const [storedWishlist, setWishlist] = useState([JSON.parse(localStorage.getItem('wishlist'))]);

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
                  <th scope="col" style={{ textAlign: 'center' }} width="200">
                    Go to Product{' '}
                  </th>
                  <th scope="col" style={{ textAlign: 'center' }} width="125">
                    Remove{' '}
                  </th>
                </tr>
              </thead>
              <tbody>
                {storedWishlist.map((item, index) => (
                  // <tr key={index} id={index}>
                  //   <td>
                  //     <img src={item.image} alt={item.title} />
                  //   </td>

                  //   <td>{item.title}</td>

                  //   <td className={cx('price')}>{item.price}</td>
                  //   <td className="text-right">
                  //     <a onClick={() => {}} className={clsx('btn btn-primary', cx('cart-icon'))}>
                  //       <i className="fas fa-shopping-cart"></i> <span className="text">Add to cart</span>
                  //     </a>
                  //   </td>
                  //   <td
                  //     onClick={() => {
                  //       handleDelete();
                  //     }}
                  //     className="text-right"
                  //   >
                  //     <a className={clsx('btn btn-primary', cx('cart-icon'))}>
                  //       <i class="fas fa-trash"></i> <span className="text">Remove</span>
                  //     </a>
                  //   </td>
                  // </tr>
                  <Item
                    key={index}
                    id={index}
                    idProduct={item.id}
                    image={item.images}
                    title={item.title}
                    price={item.price}
                    deleteProduct={handleDelete}
                  />
                ))}

                {/* <tr>
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
                </tr> */}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
export default Wishlist;
