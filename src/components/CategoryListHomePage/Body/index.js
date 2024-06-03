import classNames from 'classnames/bind';
import clsx from 'clsx';
import styles from './Body.module.scss';
import images from '~/access/images';
import Item from './Item';
import CategoryBanner from './CategoryBanner';
import { useNavigate } from 'react-router-dom'

function Body({ banner, itemList }) {
  const cx = classNames.bind(styles);
  const navigate = useNavigate()

  return (
    <div className="card card-home-category">
      <div className="row no-gutters">
        <div className="col-md-3">
          <CategoryBanner bannerId={banner.bannerId} title={banner.title} discription={banner.discription} image={banner.images} />
        </div>
        <div className="col-md-9">
          <ul className={clsx('row', 'no-gutters', cx('item-list'))}>
            {itemList.map((item, index) => (
              <Item onClick={() => {
                navigate(`ProductList`)
              }} key={index} id={item.id} title={item.title} address={item.address} image={item.images} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Body;
