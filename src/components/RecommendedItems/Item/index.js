import classNames from 'classnames/bind';
import clsx from 'clsx';
import images from '~/access/images';
import styles from './Item.module.scss';

function Item({ title, image, price, onClick }) {
  const cx = classNames.bind(styles);

  return (
    <div
      onClick={() => {
        onClick();
      }}
      className={clsx('col-xl-2', 'col-lg-3', 'col-md-4', 'col-6', cx('gutter-distance'), cx('item'))}
    >
      <div href="#" className={clsx('card', 'card-sm', cx('card-product-grid'))}>
        <a href="#" className="img-wrap">
          {' '}
          <img src={images['items'][image]} />{' '}
        </a>
        <figcaption className={cx('info-wrap')}>
          <a href="#" className="title">
            {title}
          </a>
          <div className="price mt-1">{price}</div>
        </figcaption>
      </div>
    </div>
  );
}

export default Item;
