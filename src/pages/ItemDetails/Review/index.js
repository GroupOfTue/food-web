import React from 'react';
import classNames from 'classnames/bind';
import clsx from 'clsx';

import styles from './Review.module.scss';

function ReviewSection({ reviews }) {
  const cx = classNames.bind(styles);

  return (
    <section className={clsx('review-section', cx('container'))}>
      <h2 className={cx('review-section__title')}>Đánh giá sản phẩm</h2>

      <div className={cx('review-list')}>
        {reviews.map((review) => (
          <div className={cx('review')} key={review.id}>
            <div className={cx('review__all')}>
              <div className={cx('review__avatar')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                  />
                </svg>
              </div>
              <div className={cx('review__header')}>
                <div className={cx('review__author')}>
                  <span className={cx('review__author-name')}>{review.authorName}</span>
                  <div className={cx('review__rating')}>
                    {[...Array(review.rating)].map((_, index) => (
                      <span className={cx('review__rating-star')} key={index}>
                        <i className={cx('fas fa-star ')}></i>
                      </span>
                    ))}
                  </div>
                  <span className={cx('review__author-date')}>
                    <p>{review.date}</p>
                  </span>
                  <div className={cx('review__content')}>
                    <p className={cx('review__content-text')}>{review.content}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <nav className="mb-4" aria-label="Page navigation sample">
          <ul className="pagination">
            <li className="page-item disabled">
              <a className="page-link" href="#">
                Previous
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                4
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                5
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default ReviewSection;
