import classNames from 'classnames/bind';
import clsx from 'clsx';
import images from '~/access/images';
import styles from './RecommendedItems.module.scss';
import Header from './Header'
import Item from './Item'

function RecommendedItems( {itemRecommentList} ) {
  const cx = classNames.bind(styles);

  return (
    <section className={cx('items-wrap')}>
      <Header title='Recommended items' />
        {itemRecommentList.map((item, index) => 
          <Item key={index} title={item.title} image={item.image} price={item.price} />
        )}
      <div className="row row-sm">

      </div>
    </section>
  );
}

export default RecommendedItems;
