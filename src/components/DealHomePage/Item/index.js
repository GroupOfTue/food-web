import classNames from 'classnames/bind';
import clsx from 'clsx';
import images from '~/access/images';
import styles from './Item.module.scss';

function Item({ image, title, discountCart }) {
  const cx = classNames.bind(styles);

  return (
    <div className={clsx('col-md', 'col-6', cx('card-product-grid'))}>
      <a href="#" className="img-wrap">
        <img src={image} />
      </a>
      <div className={clsx('text-wrap', 'p-3', cx('title-discount-container'))}>
        <a href="#" className="title">
          {title}
        </a>
        <span className="badge badge-danger"> -{discountCart}% </span>
      </div>
    </div>
  );
}

export default Item;
