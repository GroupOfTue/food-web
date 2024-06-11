import classNames from 'classnames/bind';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import images from '~/access/images';

import styles from './Item.module.scss';

function Item({ id, title, address, image, onClick }) {
  const cx = classNames.bind(styles);

  return (
    <li
      onClick={() => {
        onClick();
      }}
      className="col-6 col-lg-3 col-md-4"
      style={{ cursor: 'pointer' }}
    >
      <div className={cx('item')} >
        <div className="card-body">
          <h6 className="title">{title}</h6>
          <div className={cx('wrap-img-address')}>
            <p className="text-muted">
              <i className="fa fa-map-marker-alt"></i> {address}
            </p>
            <img className={cx('img-sm')} src={images['items'][image]} />
          </div>
        </div>
      </div>
    </li>
  );
}

export default Item;
