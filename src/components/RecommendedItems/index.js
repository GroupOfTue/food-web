import classNames from 'classnames/bind';
import clsx from 'clsx';
import images from '~/access/images';
import styles from './RecommendedItems.module.scss';
import Header from './Header';
import Item from './Item';
import { useNavigate } from 'react-router-dom';

function RecommendedItems({ itemRecommentList }) {
  const cx = classNames.bind(styles);
  const navigate = useNavigate();

  return (
    <section className={cx('items-wrap')}>
      <Header title="Recommended items" />
      {itemRecommentList.map((item, index) => {
        if (index < 12) {
          return (
            <Item
              onClick={() => {
                navigate(`ItemDetails/${item.id}`);
              }}
              key={index}
              title={item.title}
              image={item.images}
              price={item.price}
            />
          );
        }
      })}
      <div className="row row-sm"></div>
    </section>
  );
}

export default RecommendedItems;
