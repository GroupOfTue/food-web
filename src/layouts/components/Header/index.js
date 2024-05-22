import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import images from '~/access/images';

const cx = classNames.bind(styles);

function Header() {
  const navigate = useNavigate();

  return (
    <header className={clsx('section-header', 'bg-white', cx('container'))}>
      <section className="border-bottom">
        <div className="container">
          <nav className="d-flex align-items-center flex-column flex-md-row">
            <ul className="nav mr-md-auto">
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className={clsx('nav-link', 'pl-0', 'dropdown-toggle', cx('dropdown-menu-toggle-item'))}
                  data-toggle="dropdown"
                >
                  {' '}
                  USD{' '}
                </a>
                <ul className="dropdown-menu small">
                  <li>
                    <a className={clsx('dropdown-item', cx('dropdown-menu-toggle-item'))} href="#">
                      EUR
                    </a>
                  </li>
                  <li>
                    <a className={clsx('dropdown-item', cx('dropdown-menu-toggle-item'))} href="#">
                      AED
                    </a>
                  </li>
                  <li>
                    <a className={clsx('dropdown-item', cx('dropdown-menu-toggle-item'))} href="#">
                      RUBL{' '}
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className={clsx('nav-link dropdown-toggle', cx('dropdown-menu-toggle-item'))}
                  data-toggle="dropdown"
                >
                  {' '}
                  Language{' '}
                </a>
                <ul className="dropdown-menu small">
                  <li>
                    <a className={clsx('dropdown-item', cx('dropdown-menu-toggle-item'))} href="#">
                      English
                    </a>
                  </li>
                  <li>
                    <a className={clsx('dropdown-item', cx('dropdown-menu-toggle-item'))} href="#">
                      Arabic
                    </a>
                  </li>
                  <li>
                    <a className={clsx('dropdown-item', cx('dropdown-menu-toggle-item'))} href="#">
                      Russian{' '}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <ul className="nav ">
              <li className="nav-item">
                <a onClick={() => navigate('/aboutme')} className={clsx('nav-link', cx('dropdown-menu-toggle-item'))}>
                  {' '}
                  <i className="fa fa-user-circle"></i> My Account{' '}
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className={clsx('nav-link', cx('dropdown-menu-toggle-item'))}>
                  {' '}
                  <i className="fa fa-heart"></i> Wishlist{' '}
                </a>
              </li>
              <li className="nav-item">
                <a onClick={() => navigate('/CartItem')} className={clsx('nav-link', cx('dropdown-menu-toggle-item'))}>
                  {' '}
                  <i className="fa fa-shopping-cart"></i> My Cart{' '}
                  {/* <span className="badge badge-pill badge-danger">1</span>{' '} */}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      <section className="border-bottom">
        <nav className="navbar navbar-main  navbar-expand-lg navbar-light">
          <div className="container">
            <Link to="/" className="navbar-brand">
              <img src={images.logo} className={cx('logo')} />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#main_nav2"
              aria-controls="main_nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="main_nav2">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className={clsx('nav-link', cx('hover-primary-color'))} href="/">
                    Home{' '}
                  </a>
                </li>
                <li className="nav-item">
                  <a className={clsx('nav-link', cx('hover-primary-color'))} href="/productlist">
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className={clsx('nav-link', cx('hover-primary-color'))} href="#">
                    Supermarket
                  </a>
                </li>
                <li className="nav-item">
                  <a className={clsx('nav-link', cx('hover-primary-color'))} href="#">
                    Electronics
                  </a>
                </li>
                <li className="nav-item">
                  <a className={clsx('nav-link', cx('hover-primary-color'))} href="#">
                    Fitness sport
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className={clsx('nav-link', 'dropdown-toggle', cx('hover-primary-color'))}
                    data-toggle="dropdown"
                    href="http://example.com"
                  >
                    More
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Foods and Drink
                    </a>
                    <a className="dropdown-item" href="#">
                      Home interior
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
                      Category 1
                    </a>
                    <a className="dropdown-item" href="#">
                      Category 2
                    </a>
                    <a className="dropdown-item" href="#">
                      Category 3
                    </a>
                  </div>
                </li>
              </ul>

              <form className="form-inline my-2 my-lg-0">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search" />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="submit">
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </header>
  );
}
export default Header;
