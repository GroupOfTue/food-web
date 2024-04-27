import classNames from 'classnames/bind';
import clsx from 'clsx';
import styles from './Item.module.scss';
import { useNavigate } from 'react-router-dom'

function Item({ newProduct, image, title, starRating, year, reviewer, country, discription, price, onClick }) {
  const cx = classNames.bind(styles);

  return (
    <article  className={clsx('card', cx('wrap-item'))} onClick={onClick}>
      <div className="row no-gutters">
        <aside className={clsx('col-md-3', cx('banner-wrap'))}>
          <a  className={cx('img-wrap')}>
            {newProduct && <span className="badge badge-danger"> NEW </span>}
            <img src={image} />
          </a>
        </aside>
        <div className="col-md-6">
          <div className={cx('info-main')}>
            <a  className="h5 title">
              {' '}
              { title }
            </a>
            <div className={clsx('mb-2', cx('rating-wrap'))}>
              <ul className="rating-stars">
                <li style={{ width: '100%' }} className={cx('stars-active')}>
                  <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </li>
                {/* <li>
                    <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </li> */}
              </ul>
              <div className="label-rating">9/10</div>
            </div>

            <p className="mb-3">
              <span className={cx('tag')}>
                {' '}
                <i className="fa fa-check"></i> Verified
              </span>
              <span className={cx('tag')}> {year} Years </span>
              <span className={cx('tag')}> {reviewer} reviews </span>
              <span className={cx('tag')}> {country} </span>
            </p>

            <p className={cx('info-description')}>
              {' '}
              {discription}
              {' '}
            </p>
          </div>
        </div>
        <aside className="col-sm-3">
          <div className={cx('info-aside')}>
            <div className="price-wrap">
              <span className="h5 price">{price}</span>
              <small className="text-muted">/per item</small>
            </div>
            <small className="text-warning">Paid shipping</small>

            <p className="text-muted mt-3">Grand textile Co</p>
            <p className="mt-3">
              <a  className={clsx('btn btn-outline-primary', cx('btn-left'))}>
                {' '}
                <i className="fa fa-envelope"></i> Contact supplier{' '}
              </a>
              <a  className="btn btn-light">
                <i className="fa fa-heart"></i> Save{' '}
              </a>
            </p>

            <label className="custom-control mt-3 custom-checkbox">
              <input type="checkbox" className="custom-control-input" />
              <div className="custom-control-label">Add to compare</div>
            </label>
          </div>
        </aside>
      </div>
    </article>
  );
}

export default Item;
