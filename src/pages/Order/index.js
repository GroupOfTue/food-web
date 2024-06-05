import classNames from 'classnames/bind';

import styles from './Order.module.scss';
import images from '~/access/images';
import { useState, useEffect } from 'react';
import { SetOrderCompleteApi, GetOrderDeliveryApi, GetOrderCompleteApi, GetOrderCancelApi, SetOrderCancelApi } from '~/api/order';

function Order() {
  const cx = classNames.bind(styles);
  //   delivery complete cancelled
  const [delivery, setDelivery] = useState(true);
  const [complete, setComplete] = useState(false);
  const [cancelled, setCancelled] = useState(false);
  const [orderList, setOrderList] = useState([]);
  const [orderListComplete, setOrderListComplete] = useState([]);
  const [orderListCancel, setOrderListCancel] = useState([]);
  
  function GetOrderDelivery() {
   try {
     GetOrderDeliveryApi()
       .then((result) => {
         console.log('dasf: ', result);
         setOrderList(result);
       })
       .catch((error) => {
         console.log('loi get product: ', error);
       });
 
       GetOrderCompleteApi()
       .then((result) => {
         console.log('complete: ', result);
         setOrderListComplete(result);
       })
       .catch((error) => {
         console.log('loi get product: ', error);
       });
       
       GetOrderCancelApi()
       .then((result) => {
         console.log('cancel: ', result);
         setOrderListCancel(result);
       })
       .catch((error) => {
         console.log('loi get product: ', error);
       });
   } catch (error) {
     console.error('Lỗi đăng nhập:', error);
   }
  }

  useEffect(() => {
    GetOrderDelivery()
  }, []);

function convertToReceivedProduct(OrderId) {
    console.log("orrderid: ", OrderId);
    try {
      SetOrderCompleteApi(OrderId)
        .then((result) => {
          GetOrderDelivery()
          console.log('thanh cong: ', result);
        })
        .catch((error) => {
          console.log('loi get product: ', error);
        });
    } catch (error) {
      console.error('Lỗi đăng nhập:', error);
    }
  }

function convertToCanceledProduct(OrderId) {
    try {
      SetOrderCancelApi(OrderId)
        .then((result) => {
          GetOrderDelivery()
        })
        .catch((error) => {
          console.log('loi get product: ', error);
        });
    } catch (error) {
      console.error('Lỗi đăng nhập:', error);
    }
  }

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
          <span className={cx('NoH9rC')}>Waiting for delivery</span>
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
          <span className={cx('NoH9rC')}>History</span>
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
          <span className={cx('NoH9rC')}>Cancelled</span>
        </a>
      </section>
      {delivery ? (
        <main
          aria-role="tabpanel"
          aria-labelledby="olp_tab_id-0.30616236107341166"
          id="olp_panel_id-0.30616236107341166"
        >
          <h2 className={cx('a11y-hidden')}></h2>
          <div>
            {Array.isArray(orderList)
              ? orderList.map((item) => (
                  <div className={cx('YL_VlX')}>
                    <div>
                      <div className={cx('J632se')}>
                        <section>
                          <h3 className={cx('a11y-hidden')}></h3>
                          <div className={cx('P2JMvg')}>
                            <div className={cx('jgIyoX')}></div>
                          </div>
                        </section>
                        <div className={cx('kG_yF0')}></div>
                        <section>
                          <h3 className={cx('a11y-hidden')}></h3>
                          <a aria-label="">
                            <div>
                              <div className={cx('bdAfgU')}>
                                <div className={cx('FNHV0p')}>
                                  <div>
                                    <section>
                                      <div className={cx('mZ1OWk')}>
                                        <div className={cx('dJaa92')}>
                                          <img
                                            src={images['items'][item.image]}
                                            className={cx('gQuHsZ')}
                                            alt=""
                                            tabindex="0"
                                          />
                                          <div className={cx('nmdHRf')}>
                                            <div>
                                              <div className={cx('zWrp4w')}>
                                                <span className={cx('DWVWOJ')} tabindex="0">
                                                  {item.productName}
                                                </span>
                                              </div>
                                            </div>
                                            <div>
                                              <div className={cx('j3I_Nh')} tabindex="0">
                                                x{item.quantity}
                                              </div>
                                              <span className={cx('IHpphz RMUq23')} tabindex="0">
                                                Trả hàng miễn phí 15 ngày
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                        <div className={cx('ylYzwa')} tabindex="0">
                                          <div className={cx('YRp1mm')}>
                                            {/* <span className={cx('q6Gzj5')}>₫70.000</span>
                                      <span className={cx('nW_6Oi PNlXhK')}>₫35.000</span> */}
                                          </div>
                                        </div>
                                      </div>
                                    </section>
                                  </div>
                                  <div className={cx('PB3XKx')}></div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </section>
                        <div className={cx('Ze0Icc')}></div>
                      </div>
                    </div>
                    <div className={cx('peteXU')}>
                      <div className={cx('IVFywZ HmaSt0')}> </div>
                      <div className={cx('IVFywZ fT_AQM')}> </div>
                    </div>
                    <div className={cx('LwXnUQ')}>
                      <div className={cx('NWUSQP')}>
                        <span className={cx('R_ufN9')}></span>
                        <label className={cx('juCcT0')}>Số tiền phải trả:</label>
                        <div className={cx('t7TQaf')} tabindex="0" aria-label="Số tiền phải trả: ₫52.000">
                          ₫{item.totalPrice}
                        </div>
                      </div>
                    </div>
                    <div className={cx('yyqgYp')}>
                      <div className={cx('iwUeSD')}>
                        <div></div>
                      </div>
                      <section className={cx('po9nwN')}>
                        <h3 className={cx('a11y-hidden')}></h3>
                        <div className={cx('aAXjeK')}>
                          <div></div>
                        </div>
                        <div className={cx('hbQXWm')}>
                          <div></div>
                        </div>
                        <div className={cx('hbQXWm')}>
                          <div>
                            <button
                              onClick={() => {
                                convertToReceivedProduct( item.productId );
                              }}
                              style={{ 'margin-right': '10px' }}
                              className={cx('stardust-button stardust-button--secondary QY7kZh')}
                            >
                              Đã nhận hàng
                            </button>
                            <button
                              onClick={() => {
                                convertToCanceledProduct( item.productId );
                              }}
                              className={cx('stardust-button stardust-button--secondary QY7kZh')}
                            >
                              Hủy đơn hàng
                            </button>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                ))
              : ''}
            
          </div>
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
          <div>
            {Array.isArray(orderListComplete)
              ? orderListComplete.map((item) => (
                  <div className={cx('YL_VlX')}>
                    <div>
                      <div className={cx('J632se')}>
                        <section>
                          <h3 className={cx('a11y-hidden')}></h3>
                          <div className={cx('P2JMvg')}>
                            <div className={cx('jgIyoX')}></div>
                          </div>
                        </section>
                        <div className={cx('kG_yF0')}></div>
                        <section>
                          <h3 className={cx('a11y-hidden')}></h3>
                          <a aria-label="">
                            <div>
                              <div className={cx('bdAfgU')}>
                                <div className={cx('FNHV0p')}>
                                  <div>
                                    <section>
                                      <div className={cx('mZ1OWk')}>
                                        <div className={cx('dJaa92')}>
                                          <img
                                            src={images['items'][item.image]}
                                            className={cx('gQuHsZ')}
                                            alt=""
                                            tabindex="0"
                                          />
                                          <div className={cx('nmdHRf')}>
                                            <div>
                                              <div className={cx('zWrp4w')}>
                                                <span className={cx('DWVWOJ')} tabindex="0">
                                                  {item.productName}
                                                </span>
                                              </div>
                                            </div>
                                            <div>
                                              <div className={cx('j3I_Nh')} tabindex="0">
                                                x{item.quantity}
                                              </div>
                                              <span className={cx('IHpphz RMUq23')} tabindex="0">
                                                Trả hàng miễn phí 15 ngày
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                        <div className={cx('ylYzwa')} tabindex="0">
                                          <div className={cx('YRp1mm')}>
                                            {/* <span className={cx('q6Gzj5')}>₫70.000</span>
                                      <span className={cx('nW_6Oi PNlXhK')}>₫35.000</span> */}
                                          </div>
                                        </div>
                                      </div>
                                    </section>
                                  </div>
                                  <div className={cx('PB3XKx')}></div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </section>
                        <div className={cx('Ze0Icc')}></div>
                      </div>
                    </div>
                    <div className={cx('peteXU')}>
                      <div className={cx('IVFywZ HmaSt0')}> </div>
                      <div className={cx('IVFywZ fT_AQM')}> </div>
                    </div>
                    <div className={cx('LwXnUQ')}>
                      <div className={cx('NWUSQP')}>
                        <span className={cx('R_ufN9')}></span>
                        <label className={cx('juCcT0')}>Số tiền phải trả:</label>
                        <div className={cx('t7TQaf')} tabindex="0" aria-label="Số tiền phải trả: ₫52.000">
                          ₫{item.totalPrice}
                        </div>
                      </div>
                    </div>
                    <div className={cx('yyqgYp')}>
                      <div className={cx('iwUeSD')}>
                        <div></div>
                      </div>
                      <section className={cx('po9nwN')}>
                        <h3 className={cx('a11y-hidden')}></h3>
                        <div className={cx('aAXjeK')}>
                          <div></div>
                        </div>
                        <div className={cx('hbQXWm')}>
                          <div></div>
                        </div>
                        <div className={cx('hbQXWm')}>
                        </div>
                      </section>
                    </div>
                  </div>
                ))
              : ''}
            
          </div>
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
          <div>
            {Array.isArray(orderListCancel)
              ? orderListCancel.map((item) => (
                  <div className={cx('YL_VlX')}>
                    <div>
                      <div className={cx('J632se')}>
                        <section>
                          <h3 className={cx('a11y-hidden')}></h3>
                          <div className={cx('P2JMvg')}>
                            <div className={cx('jgIyoX')}></div>
                          </div>
                        </section>
                        <div className={cx('kG_yF0')}></div>
                        <section>
                          <h3 className={cx('a11y-hidden')}></h3>
                          <a aria-label="">
                            <div>
                              <div className={cx('bdAfgU')}>
                                <div className={cx('FNHV0p')}>
                                  <div>
                                    <section>
                                      <div className={cx('mZ1OWk')}>
                                        <div className={cx('dJaa92')}>
                                          <img
                                            src={images['items'][item.image]}
                                            className={cx('gQuHsZ')}
                                            alt=""
                                            tabindex="0"
                                          />
                                          <div className={cx('nmdHRf')}>
                                            <div>
                                              <div className={cx('zWrp4w')}>
                                                <span className={cx('DWVWOJ')} tabindex="0">
                                                  {item.productName}
                                                </span>
                                              </div>
                                            </div>
                                            <div>
                                              <div className={cx('j3I_Nh')} tabindex="0">
                                                x{item.quantity}
                                              </div>
                                              <span className={cx('IHpphz RMUq23')} tabindex="0">
                                                Trả hàng miễn phí 15 ngày
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                        <div className={cx('ylYzwa')} tabindex="0">
                                          <div className={cx('YRp1mm')}>
                                            {/* <span className={cx('q6Gzj5')}>₫70.000</span>
                                      <span className={cx('nW_6Oi PNlXhK')}>₫35.000</span> */}
                                          </div>
                                        </div>
                                      </div>
                                    </section>
                                  </div>
                                  <div className={cx('PB3XKx')}></div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </section>
                        <div className={cx('Ze0Icc')}></div>
                      </div>
                    </div>
                    <div className={cx('peteXU')}>
                      <div className={cx('IVFywZ HmaSt0')}> </div>
                      <div className={cx('IVFywZ fT_AQM')}> </div>
                    </div>
                    <div className={cx('LwXnUQ')}>
                      <div className={cx('NWUSQP')}>
                        <span className={cx('R_ufN9')}></span>
                        <label className={cx('juCcT0')}>Số tiền phải trả:</label>
                        <div className={cx('t7TQaf')} tabindex="0" aria-label="Số tiền phải trả: ₫52.000">
                          ₫{item.totalPrice}
                        </div>
                      </div>
                    </div>
                    <div className={cx('yyqgYp')}>
                      <div className={cx('iwUeSD')}>
                        <div></div>
                      </div>
                      <section className={cx('po9nwN')}>
                        <h3 className={cx('a11y-hidden')}></h3>
                        <div className={cx('aAXjeK')}>
                          <div></div>
                        </div>
                        <div className={cx('hbQXWm')}>
                          <div></div>
                        </div>
                        <div className={cx('hbQXWm')}>
                        </div>
                      </section>
                    </div>
                  </div>
                ))
              : ''}
            
          </div>
          <div></div>
        </main>
      ) : (
        ''
      )}
    </div>
  );
}

export default Order;
