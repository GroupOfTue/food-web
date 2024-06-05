import classNames from 'classnames/bind';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Navbar.module.scss';

function Navbar() {
  const cx = classNames.bind(styles);

  return (
    <aside className="col-lg col-md-3 flex-lg-grow-0">
      <h6>Keyword suggestions</h6>
      <nav className={cx('nav-home-aside')}>
        <ul className={clsx('menu-category', cx('menu-category-father'))}>
          <li>
            <a href="#">traditional dishes</a>
          </li>
          <li>
            <a href="#">vegan dishes</a>
          </li>
          <li>
            <a href="#">quick meals</a>
          </li>
          <li>
            <a href="#">street food</a>
          </li>
          <li>
            <a href="#">seafood dishes</a>
          </li>
          <li>
            <a href="#">street food</a>
          </li>
          <li>
            <a href="#">comfort food</a>
          </li>
          <li className={cx('has-submenu')}>
            <a href="#">
              More items
              <FontAwesomeIcon icon={faAngleRight} style={{ float: 'right', color: '#999' }} />
            </a>
            {/* <ul className={cx('submenu')}>
              <li>
                <a href="#">Submenu name</a>
              </li>
              <li>
                <a href="#">Great submenu</a>
              </li>
              <li>
                <a href="#">Another menu</a>
              </li>
              <li>
                <a href="#">Some others</a>
              </li>
            </ul> */}
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Navbar;
