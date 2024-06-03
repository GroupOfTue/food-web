import classNames from 'classnames/bind';
import clsx from 'clsx';
import images from '~/access/images';
import styles from './CategoryBanner.module.scss';
import { useNavigate } from 'react-router-dom';

function CategoryBanner({ bannerId, title, discription, image }) {
  const cx = classNames.bind(styles);
  const navigate = useNavigate();

  return (
    <div className={cx('home-category-banner')}>
      <h5 className="title">{title}</h5>
      <p>{discription}</p>
      <div
        onClick={() => {
          navigate(`/ProductList/${bannerId}`);
        }}
        className={clsx('btn', 'rounded-pill', cx('btn-outline-primary'))}
      >
        Source now
      </div>
      <img src={images['items'][image]} className="img-bg" />
    </div>
  );
}

export default CategoryBanner;
