import classNames from 'classnames/bind';
import clsx from 'clsx';
import styles from './Item.module.scss';

function Item({ newProduct, image, title, price, company, Guarantee, reviewer, country }) {
  const cx = classNames.bind(styles);
  return (
    <div className={clsx('col-md-3',cx('item-wrap'))}>
      <figure className={clsx('card', cx('card-product-item'))}>
        <div className={cx('img-wrap')}>
          {newProduct && <span className={clsx('badge', 'badge-danger', cx('new-badge'))}> NEW </span>}
          <img src={image} />
        </div>
        <figcaption className={cx('info-wrap')}>
          <a href="#" className="title mb-2">
            {title}
          </a>
          <div className="price-wrap">
            <span className={cx('price')}>price {price}</span>
          </div>

          <p className={cx('text-company')}>{company}</p>

          <hr />

          <p className="mb-3">
            <span className={cx('tag')}>
              {' '}
              <i className="fa fa-check"></i> Verified
            </span>
            <span className={cx('tag')}> {Guarantee} </span>
            <span className={cx('tag')}> {reviewer} reviews </span>
            <span className={cx('tag')}> {country} </span>
          </p>

          <label className="custom-control mb-3 custom-checkbox">
            <input type="checkbox" className={clsx('custom-control-input', cx('custom-control-input-color'))} />
            <div className="custom-control-label">Add to compare</div>
          </label>

          <a href="#" className="btn btn-outline-primary">
            {' '}
            <i className="fa fa-envelope"></i> Contact supplier{' '}
          </a>
        </figcaption>
      </figure>
    </div>
  );
}

export default Item;
