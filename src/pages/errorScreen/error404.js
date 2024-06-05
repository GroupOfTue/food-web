import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import clsx from 'clsx';
import styles from './ErrorPage.module.scss';
import images from '~/access/images';

function ErrorPage404() {
  const cx = classNames.bind(styles);

  return (
    <section className={clsx('section-content', 'padding-y')}>
      <div className={cx('error-image-container')}>
        <img src={images.banners.error404} alt="Error Page" />
      </div>
      <div className="mx-auto" style={{ maxWidth: '1000px' }}>
        <div className="text-center">
          <h1 className={cx('error-title')}>Error</h1>
          <h1 className={cx('error-message')}>Oops! Something went wrong.</h1>
          <Link to="/" className={cx('btn-primary')}>Back to Home</Link>
        </div>
      </div>
    </section>
  );
}

export default ErrorPage404;
