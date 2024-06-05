import classNames from 'classnames/bind';

import styles from './admin.module.scss';
import images from '~/access/images';
import { useState, useEffect } from 'react';

function Order() {
  const cx = classNames.bind(styles);
  //   delivery complete cancelled
  const [delivery, setDelivery] = useState(true);
  const [complete, setComplete] = useState(false);
  const [cancelled, setCancelled] = useState(false);
  const [orderList, setOrderList] = useState([]);


  return (
    <div className={cx('ashFMQ')}>
      <div></div>
      <section className={cx('QmO3Bu')} aria-role="tablist">
        <h2 className={cx('a11y-hidden')}></h2>
        <a
          onClick={() => {
            setDelivery(true);
            setComplete(false);
            setCancelled(false);
          }}
          className={cx('KI5har')}
          title="Chờ thanh toán"
          aria-role="tab"
          aria-controls="olp_panel_id-0.30616236107341166"
          id="olp_tab_id-0.30616236107341166"
        >
          <span className={cx('NoH9rC')}>Product</span>
        </a>
        <a
          onClick={() => {
            setComplete(true);
            setDelivery(false);
            setCancelled(false);
          }}
          className={cx('KI5har')}
          title="Hoàn thành"
          aria-role="tab"
          aria-controls="olp_panel_id-0.15323575817964685"
          id="olp_tab_id-0.15323575817964685"
        >
          <span className={cx('NoH9rC')}>Order</span>
        </a>
        <a
          onClick={() => {
            setCancelled(true);
            setComplete(false);
            setDelivery(false);
          }}
          className={cx('KI5har')}
          title="Đã hủy"
          aria-role="tab"
          aria-controls="olp_panel_id-0.6342434841070554"
          id="olp_tab_id-0.6342434841070554"
        >
          <span className={cx('NoH9rC')}>statistical</span>
        </a>
      </section>
      {delivery ? (
        <main
          aria-role="tabpanel"
          aria-labelledby="olp_tab_id-0.30616236107341166"
          id="olp_panel_id-0.30616236107341166"
        >
          <h2 className={cx('a11y-hidden')}></h2>
         
          <div></div>
        </main>
      ) : (
        ''
      )}

      {complete ? (
        <main
          aria-role="tabpanel"
          aria-labelledby="olp_tab_id-0.30616236107341166"
          id="olp_panel_id-0.30616236107341166"
        >
          <h2 className={cx('a11y-hidden')}></h2>
          
          <div></div>
        </main>
      ) : (
        ''
      )}
      {cancelled ? (
        <main
          aria-role="tabpanel"
          aria-labelledby="olp_tab_id-0.30616236107341166"
          id="olp_panel_id-0.30616236107341166"
        >
          <h2 className={cx('a11y-hidden')}></h2>
       lhe
          <div></div>
        </main>
      ) : (
        ''
      )}
    </div>
  );
}

export default Order;
