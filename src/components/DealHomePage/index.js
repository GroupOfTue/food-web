import classNames from 'classnames/bind';
import clsx from 'clsx';
import images from '~/access/images';
import styles from './DealHomePage.module.scss';
import Item from './Item';
import React, { useState, useEffect } from 'react';
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

  // Cập nhật thời gian
  const [endDate] = useState(new Date('2024-06-10T23:00:00')); // Thay đổi ngày giờ kết thúc ở đây

  const calculateTimeLeft = () => {
    const difference = +endDate - +new Date();
    if (difference < 0) {
      // Đã hết thời gian
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // const renderCountdown = () => {
  //   return (
  //     <div>
  //       <span>{timeLeft.days}d</span>
  //       <span>{timeLeft.hours}h</span>
  //       <span>{timeLeft.minutes}m</span>
  //       <span>{timeLeft.seconds}s</span>
  //     </div>
  //   );
  // };

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
                <span className={cx('num')}>{timeLeft.days}</span> <small>Days</small>
              </div>
              <div>
                {' '}
                <span className={cx('num')}>{timeLeft.hours}</span> <small>Hours</small>
              </div>
              <div>
                {' '}
                <span className={cx('num')}>{timeLeft.minutes}</span> <small>Min</small>
              </div>
              <div>
                {' '}
                <span className={cx('num')}>{timeLeft.seconds}</span> <small>Sec</small>
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
