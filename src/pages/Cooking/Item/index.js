import classNames from 'classnames/bind';
import clsx from 'clsx';
import styles from './Item.module.scss';
import { useNavigate } from 'react-router-dom'

import images from '~/access/images';

function Item({ image, title, discription, ingredient }) {
  const cx = classNames.bind(styles);

  return (
    <article  className={clsx('card', cx('wrap-item'))}>
      <div className="row no-gutters">
        <aside className={clsx('col-md-3', cx('banner-wrap'))}>
          <a  className={cx('img-wrap')}>
            
            <img src={images['items'][image]} />
          </a>
        </aside>
        <div className="col-md-6">
          <div className={cx('info-main')}>
            <a  className="h5 title">
              {' '}
              { title }
            </a>
            <div className={clsx('mb-2', cx('rating-wrap'))}>
             
            </div>

            <p className="mb-3">
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
            {ingredient}
          </div>
        </aside>
      </div>
    </article>
  );
}

export default Item;
