import classNames from 'classnames/bind';
import clsx from 'clsx';

import styles from './Item.module.scss';
import images from '~/access/images';

const cx = classNames.bind(styles);

function Item({ title, image }) {
  return (
    <div className={clsx('border-bottom', cx('card-banner'))}>
      <div className="py-3" style={{ width: '80%' }}>
        <h6 className="card-title">{title}</h6>
        <a href="#" className="btn btn-secondary btn-sm bg-blue text-white">
          {' '}
          Source now{' '}
        </a>
      </div>
      <img src={image} height="80" className="img-bg" />
    </div>
  );
}

export default Item;
