import classNames from 'classnames/bind';
import clsx from 'clsx';
import images from '~/access/images';
import styles from './DealHomePage.module.scss';
import Item from './Item';

function DealHomePage() {
  const cx = classNames.bind(styles);

  const arrItemsDealFake = [
    {
      image: images.items.ba,
      title: 'Summer clothes',
      discountCart: '20',
    },
    {
      image: images.items.bon,
      title: 'Some category',
      discountCart: '5',
    },
    {
      image: images.items.nam,
      title: 'Another category',
      discountCart: '20',
    },
    {
      image: images.items.sau,
      title: 'Home apparel',
      discountCart: '15',
    },
    {
      image: images.items.bay,
      title: 'Smart watches',
      discountCart: '10',
    },
  ];

  return (
    <>
      <section className="pb-4">
        <div className={clsx('card', cx('card-deal'))}>
          <div className={cx('col-first')}>
            <header className="section-heading">
              <h3 className="section-title">Deals and offers</h3>
            </header>
            <div className={cx('timer')}>
              <div>
                {' '}
                <span className={cx('num')}>04</span> <small>Days</small>
              </div>
              <div>
                {' '}
                <span className={cx('num')}>12</span> <small>Hours</small>
              </div>
              <div>
                {' '}
                <span className={cx('num')}>58</span> <small>Min</small>
              </div>
              <div>
                {' '}
                <span className={cx('num')}>02</span> <small>Sec</small>
              </div>
            </div>
          </div>
          <div className={clsx('row', 'no-gutters', cx('items-wrap'))}>
            {arrItemsDealFake.map((item, index) => (
              <Item image={item.image} title={item.title} discountCart={item.discountCart} key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default DealHomePage;
