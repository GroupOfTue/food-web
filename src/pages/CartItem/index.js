import classNames from 'classnames/bind';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import images from '~/access/images';
import styles from './CartItem.module.scss';
import Item from './Item';

function CartItem() {
  const cx = classNames.bind(styles);
  const navigate = useNavigate();
  // const [priceTotal, setPriceTotal] = useState(() => {

  //   return JSON.parse(localStorage.getItem('totalPriceProductList')) ?? []
  // }
  //   );
  // const [productListAddToCart, setProductListAddToCart] = useState(
  //   JSON.parse(localStorage.getItem('productListAddToCart')),
  // );

  // //check the product list add to cart is empty
  // useEffect(() => {
  //   if (productListAddToCart.length === 0) {
  //     setPriceTotal(0);
  //     localStorage.setItem('totalPriceProductList', 0);
  //   }
  // }, [productListAddToCart]);

  // //handle when delete a product
  // const handleDelete = (id) => {
  //   const arr = JSON.parse(localStorage.getItem('productListAddToCart'));
  //   arr.splice(id, 1);
  //   localStorage.setItem('productListAddToCart', JSON.stringify(arr));
  //   setProductListAddToCart(arr);
  // };

  // //handle when product quantity change
  // const handelQuantityChange = (total) => {
  //   const totalPriceProductList = localStorage.getItem('totalPriceProductList');
  //   setPriceTotal(totalPriceProductList);
  // };
  return (
    <section className="section-content padding-y">
      <div className="container">
        <div className="row">
          <main className="col-md-9">
            <div className="card">
              <table className="table table-borderless table-shopping-cart">
                <thead className="text-muted">
                  <tr className="small text-uppercase">
                    <th scope="col">Product</th>
                    <th scope="col" width="120" style={{ textAlign: 'center' }}>
                      Quantity
                    </th>
                    <th scope="col" width="120" style={{ textAlign: 'center' }}>
                      Price
                    </th>
                    <th scope="col" className="text-right" width="200">
                      Total{' '}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* {productListAddToCart.map((item, index) => (
                    <Item
                      key={index}
                      id={index}
                      image={item.images}
                      title={item.title}
                      quantity={item.quantity}
                      price={item.price}
                      priceTotal={item.priceTotal}
                      deleteProduct={handleDelete}
                      quantityChange={handelQuantityChange}
                    />
                  ))} */}
                </tbody>
              </table>

              <div className="card-body border-top">
                <a
                  onClick={() => navigate('/checkout')}
                  className={clsx('btn btn-primary float-md-right', cx('purchase-btn'))}
                >
                  {' '}
                  Check Out <i className="fa fa-chevron-right"></i>{' '}
                </a>
                <a onClick={() => navigate(-1)} className="btn btn-light">
                  {' '}
                  <i className={clsx('fa fa-chevron-left', cx('continue-shopping-btn'))}></i> Continue shopping{' '}
                </a>
              </div>
            </div>

            <div className={clsx('alert alert-success mt-3', cx('icon-text'))}>
              <p className={cx('icon-text')}>
                <i className="icon text-success fa fa-truck"></i> Free Delivery within 1-2 weeks
              </p>
            </div>
          </main>
          <aside className="col-md-3">
            <div className="card mb-3">
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Have coupon?</label>
                    <div className="input-group">
                      <input type="text" className="form-control" name="" placeholder="Coupon code" />
                      <span className="input-group-append">
                        <button className="btn btn-primary">Apply</button>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="card">
              <div className={cx('card-body', cx('shopping-information'))}>
                <div className="dlist-align">
                  <dt>Total price:</dt>
                  <dd className="text-right">USD {}</dd>
                </div>
                <div className="dlist-align">
                  <dt>Discount:</dt>
                  <dd className="text-right">USD 0</dd>
                </div>
                <div className="dlist-align">
                  <dt>Total:</dt>
                  <dd className="text-right  h5">
                    <strong>{}</strong>
                  </dd>
                </div>
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

export default CartItem;
