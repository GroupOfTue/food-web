import classNames from 'classnames/bind';
import clsx from 'clsx';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import styles from './ItemDetails.module.scss';
import Review from './Review';
import images from '~/access/images';
import { getProductDetails } from '~/api/product';
import { GetAllProduct } from '~/MockApi/GetAllProduct.js';

function ItemDetails() {
  const cx = classNames.bind(styles);
  const { id } = useParams();
  // let itemDetails = {};
  const [quantity, setQuantity] = useState(1);
  const [itemDetails, setItemDetails] = useState({});

  //tạo dữ liệu đánh giá fake
  const reviews = [
    {
      id: 1,
      authorName: 'John Doe',
      date: '2024-06-01 8:53',
      rating: 5,
      content: 'Sản phẩm này tuyệt vời!',
    },
    {
      id: 2,
      authorName: 'John Doe2',
      date: '2024-06-0 27:29',
      rating: 3,
      content: 'Sản phẩm này chưa được đẹp với tôi!',
    },
    {
      id: 3,
      authorName: 'John wtich',
      date: '2024-06-04  9:40',
      rating: 4,
      content: 'Sản phẩm này chưa được đẹp với tôi!',
    },
    {
      id: 4,
      authorName: 'Jim',
      date: '2024-06-10',
      rating: 4,
      content: 'Sản phẩm này  đẹp với tôi!',
    },
  ];
  //call api fake
  // const productList = GetAllProduct;
  // productList.forEach((e) => {
  //   if (e.id === +id) {
  //     itemDetails = e;
  //   }
  // });

  useEffect(() => {
    try {
      getProductDetails(id)
        .then((result) => {
          console.log('itemdetails: ', result);
          setItemDetails(result);
        })
        .catch((error) => {
          console.log('loi get product: ', error);
        });
    } catch (error) {
      console.error('Lỗi đăng nhập:', error);
    }
  }, []);

  //handle when adding products to the cart
  const addToCart = () => {
    const productListAddToCart = localStorage.getItem('productListAddToCart');
    if (productListAddToCart) {
      const arr = JSON.parse(productListAddToCart);
      if (arr && itemDetails) {
        const item = arr.find((item) => item.id === itemDetails.id);
        if (item) {
          item.quantity += quantity;
          item.priceTotal = item.quantity * item.price;
        } else {
          arr.push({ ...itemDetails, priceTotal: quantity * itemDetails.price, quantity: quantity });
        }
      }

      const totalPriceProductList = arr.reduce((total, item) => total + item.priceTotal, 0);
      localStorage.setItem('productListAddToCart', JSON.stringify(arr));
      localStorage.setItem('totalPriceProductList', JSON.stringify(totalPriceProductList));
    } else {
      localStorage.setItem('productListAddToCart', JSON.stringify([itemDetails]));
      localStorage.setItem('totalPriceProductList', JSON.stringify([itemDetails.priceTotal]));
    }
  };
  // Add item to wishlist
  const addToWishlist = (itemDetails) => {
    const wishlist = localStorage.getItem('wishlist');

    // Parse wishlist data (handle potential errors)
    let wishlistArr = [];
    try {
      wishlistArr = wishlist ? JSON.parse(wishlist) : [];
    } catch (error) {
      console.error('Error parsing wishlist:', error);
      // Optionally notify user about the error
    }

    // Check if item already exists, display message if so
    const existingItem = wishlistArr.find((item) => item.id === itemDetails.id);
    if (existingItem) {
      console.info('Item already in wishlist!');
      // Optionally display a message to the user
      return;
    }

    // Add new item to wishlist
    wishlistArr.push({ ...itemDetails });

    // Update wishlist in localStorage
    localStorage.setItem('wishlist', JSON.stringify(wishlistArr));

    console.info('Item added to wishlist successfully!');
    const wishlistButton = document.querySelector('.love-icon'); // Replace with actual element id
    if (wishlistButton) {
      wishlistButton.style.display = 'none';
    } else {
      console.warn("Element with id='heart' not found. Please check the element's id.");
    }
  };

  return (
    <section className="section-content bg-white padding-y">
      <div className="container">
        <div className="row">
          <aside className="col-md-6">
            <div className="card">
              <article className="gallery-wrap">
                <div className={cx('img-big-wrap')}>
                  <div>
                    {' '}
                    <a href="#">
                      <img src={images['items'][itemDetails.images]} />
                    </a>
                  </div>
                </div>
                <div className={cx('sub-img-wrap')}>
                  <a href="#" className="item-thumb">
                    {' '}
                    <img src={images['items'][itemDetails.images]} />
                  </a>
                  <a href="#" className="item-thumb">
                    {' '}
                    <img src={images['items'][itemDetails.images]} />
                  </a>
                  <a href="#" className="item-thumb">
                    {' '}
                    <img src={images['items'][itemDetails.images]} />
                  </a>
                  <a href="#" className="item-thumb">
                    {' '}
                    <img src={images['items'][itemDetails.images]} />
                  </a>
                </div>
              </article>
            </div>
          </aside>
          <main className="col-md-6">
            <article className="product-info-aside">
              <h2 className="title mt-3">{itemDetails.title}</h2>

              <div className={clsx('my-3', cx('rating-wrap'))}>
                <ul className="rating-stars">
                  <li className="stars-active">
                    <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i>{' '}
                    <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                  </li>
                  {/* <li>
                    <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </li> */}
                </ul>
                <small className="label-rating text-muted">{itemDetails.reviewsNumber} reviews</small>
                <small className="label-rating text-success">
                  {' '}
                  <i className="fa fa-clipboard-check"></i> {itemDetails.ordersNumber} orders{' '}
                </small>
              </div>

              <div className="mb-3">
                <span className="price h4"> {itemDetails.price} </span>
                <span className="text-muted">USD</span>
              </div>

              <p>{itemDetails.description}</p>

              <dl className="row">
                <dt className="col-sm-3">{itemDetails.Manufacturer}</dt>
                <dd className="col-sm-9">
                  <a href="#">{itemDetails.Manufacturer}</a>
                </dd>

                <dt className="col-sm-3">Article number</dt>
                <dd className="col-sm-9">{itemDetails.ArticleNumber}</dd>

                <dt className="col-sm-3">Guarantee</dt>
                <dd className="col-sm-9">{itemDetails.Guarantee}</dd>

                <dt className="col-sm-3">Delivery time</dt>
                <dd className="col-sm-9">{itemDetails.DeliveryTime}</dd>

                <dt className="col-sm-3">Availabilty</dt>
                <dd className="col-sm-9">{itemDetails.Availabilty}</dd>
              </dl>

              <div className="form-row  mt-4">
                <div className="form-group col-md flex-grow-0">
                  <div className={clsx('input-group mb-3', cx('input-spinner'))}>
                    <div className="input-group-prepend">
                      {quantity > 0 ? (
                        <button
                          onClick={() => setQuantity(quantity - 1)}
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
                    <input type="text" className="form-control" value={quantity} />
                    <div className="input-group-append">
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="btn btn-light"
                        type="button"
                        id="button-minus"
                      >
                        +{' '}
                      </button>
                    </div>
                  </div>
                </div>
                <div className={clsx('col-md', cx('form-group'))}>
                  <a
                    onClick={() => {
                      addToCart();
                    }}
                    className={clsx('btn btn-primary', cx('cart-icon'))}
                  >
                    <i className="fas fa-shopping-cart"></i> <span className="text">Add to cart</span>
                  </a>
                  <a href="#" className="btn btn-light">
                    <i className="fas fa-envelope"></i> <span className="text">Contact supplier</span>
                  </a>
                  <a
                    data-original-title="Save to Wishlist"
                    title=""
                    onClick={() => {
                      addToWishlist(itemDetails);
                    }}
                    className={clsx('btn btn-light', cx('love-icon'))}
                    data-toggle="tooltip"
                  >
                    {' '}
                    <i className="fa fa-heart" style={{ color: 'red' }}></i>
                  </a>
                </div>
              </div>
            </article>
          </main>
        </div>
      </div>
      <Review reviews={reviews} />
    </section>
  );
}

export default ItemDetails;
