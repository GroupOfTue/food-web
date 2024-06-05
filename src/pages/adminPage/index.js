import React from 'react';
import classNames from 'classnames/bind';
import styles from './admin.module.scss';

const cx = classNames.bind(styles);

const Admin = () => {
  return (
    <div className={cx('container-fluid')}>
      <div className={cx('row')}>
        <div className={cx('col-md-2', 'sidebar')}>
          <div className={cx('brand')}>
            <a href="#" className={cx('brand-name')}>Simple Admin</a>
          </div>
          <div className={cx('sidebar-sticky')}>
            <ul className="nav flex-column">
              <li className={cx('nav-item')}>
                <a href="dashboard.html" className={cx('nav-link', 'active')}>
                  <i className={cx('mdi mdi-monitor')}></i> Dashboard
                </a>
              </li>
              <li className={cx('nav-item')}>
                <a 
                  className={cx('nav-link')} 
                  data-toggle="collapse" 
                  href="#collapseExample" 
                  role="button" 
                  aria-expanded="false" 
                  aria-controls="collapseExample"
                >
                  <i className="mdi mdi-shape-outline"></i> UI Components <span className="badge badge-info">New</span>
                  <i className="mdi mdi-chevron-down float-right pr-2"></i>
                </a>
                <div className={cx('collapse')} id="collapseExample">
                  <a className={cx('nav-link')} href="button.html"><i className="mdi mdi-circle-medium"></i> Buttons</a>
                  <a className={cx('nav-link')} href="chart.html"><i className="mdi mdi-circle-medium"></i> Chart</a>
                  <a className={cx('nav-link')} href="input.html"><i className="mdi mdi-circle-medium"></i> Input</a>
                  <a className={cx('nav-link')} href="modal.html"><i className="mdi mdi-circle-medium"></i> Modal</a>
                  <a className={cx('nav-link')} href="widget.html"><i className="mdi mdi-circle-medium"></i> Widget</a>
                </div>
              </li>
              <li className={cx('nav-item')}>
                <a href="form.html" className={cx('nav-link')}>
                  <i className="mdi mdi-lead-pencil"></i> Form
                </a>
              </li>
              <li className={cx('nav-item')}>
                <a href="table.html" className={cx('nav-link')}>
                  <i className={cx('mdi mdi-table')}></i> Data Table
                  <button className={cx('btn', 'btn-dark-base', 'btn-rounded', 'float-right', 'btn-sm')}>
                    <i className={cx('mdi mdi-plus')}></i>
                  </button>
                </a>
              </li>
            </ul>
          </div>
          <div className={cx('nav-bottom')}>
            <ul className={('nav')}>
              <li className={cx('nav-item')}><a href="#" className={cx('nav-link')}><i className="mdi mdi-account"></i></a></li>
              <li className={cx('nav-item')}><a href="#" className={cx('nav-link')}><i className="mdi mdi-message"></i></a></li>
              <li className={cx('nav-item')}><a href="#" className={cx('nav-link')}><i className="mdi mdi-bell"></i></a></li>
              <li className={cx('nav-item')}><a href="#" className={cx('nav-link')}><i className="mdi mdi-power"></i></a></li>
            </ul>
          </div>
        </div>
        <main className={cx('col-md-9 col-lg-10')} role="main">
          <div className={cx('container')}>
            <div className={cx('content-header', 'mt-2', 'mb-3')}>
              <h2 className={cx('text-header')}>Dashboard</h2>
            </div>
            <div className={cx('alert alert-danger')}>
              This template is under maintenance!
            </div>
            <div className={cx('row', 'mb-3', 'widget')}>
              <div className="col-md-3 pr-1">
                <div className={cx('card', 'alert-success')}>
                  <div className="card-body">
                    <div className="float-left">
                      <h3 className={cx('value-widget')}>$ 153.000</h3>
                      <label className={cx('title-widget')}>Revenue</label>
                    </div>
                    <div className="float-right">
                      <i className="mdi mdi-cash-usd-outline mdi-48px"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 pr-1">
                <div className={cx('card', 'alert-warning')}>
                  <div className="card-body">
                    <div className="float-left">
                      <h3 className={cx('value-widget')}>20</h3>
                      <label className={cx('title-widget')}>Sales</label>
                    </div>
                    <div className="float-right">
                      <i className="mdi mdi-cart mdi-48px"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 pr-1">
                <div className={cx('card', 'alert-primary')}>
                  <div className="card-body">
                    <div className="float-left">
                      <h3 className={cx('value-widget')}>20</h3>
                      <label className={cx('title-widget')}>Customer</label>
                    </div>
                    <div className="float-right">
                      <i className="mdi mdi-ticket-account mdi-48px"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className={cx('card', 'alert-dark')}>
                  <div className="card-body">
                    <div className="float-left">
                      <h3 className={cx('value-widget')}>20</h3>
                      <label className={cx('title-widget')}>Employee</label>
                    </div>
                    <div className="float-right">
                      <i className="mdi mdi-gift mdi-48px"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={cx('row', 'basic', 'mb-3')}>
              <div className="col-md-6 pr-1">
                <div className={cx('card')}>
                  <div className="card-body pb-0">
                    <label className={cx('title-body')}>Chart Daily</label>
                    <canvas style={{ width: '100%' }}></canvas>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className={cx('card')}>
                  <div className="card-body">
                    <label className={cx('title-body')}>Todo List</label>
                    <canvas style={{ width: '100%' }} height="140"></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Admin;