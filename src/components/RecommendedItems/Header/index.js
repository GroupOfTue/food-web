import classNames from 'classnames/bind';
import clsx from 'clsx';
import styles from './Header.module.scss';

function Header( {title} ) {
  const cx = classNames.bind(styles);

  return (
    <header className={cx('heading-line', cx('section-heading'))}>
      <h4 className="title-section text-uppercase">{title}</h4>
    </header>
  );
}

export default Header;
