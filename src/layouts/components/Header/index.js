import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import images from '~/access/images';

const cx = classNames.bind(styles);

function Header() {
  const navigate = useNavigate();
  const phone = localStorage.getItem('rememberedPhone');
  const password = localStorage.getItem('rememberedPassword');
  const [userRole, setUserRole] = useState(false);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const phoneLocal = localStorage.getItem('rememberedPhone');
  const passLocal = localStorage.getItem('rememberedPassword');

  localStorage.setItem('isAuthenticated', 'true');

  useEffect(() => {
    // Check if the user is authenticated
    const authStatus = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(authStatus === 'true');
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
    navigate('/login');
  };

  useEffect(() => {
    const phone = localStorage.getItem('rememberedPhone');
    setUserRole(phone);
  }, []);

  if (phone === '987654321' && password === 'admin123') {
    // Display data here
    console.log('Valid credentials! Displaying data:', phone, password);
  } else {
    console.log('Invalid credentials or no stored credentials found.');
  }
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

            <ul className="nav">
              {isAuthenticated ? (
                <>
                {phoneLocal === '987654321' && passLocal === 'admin123' ? <li className="nav-item">
                    <a href="Admin" className={clsx('nav-link', cx('dropdown-menu-toggle-item'))}>
                      {' '}
                      <i className="fa fa-user-circle"></i> admin{' '}
                    </a>
                  </li> : ""}
                  <li className="nav-item">
                    <a href="Aboutme" className={clsx('nav-link', cx('dropdown-menu-toggle-item'))}>
                      {' '}
                      <i className="fa fa-user-circle"></i> My Account{' '}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/WishList" className={clsx('nav-link', cx('dropdown-menu-toggle-item'))}>
                      {' '}
                      <i className="fa fa-heart"></i> Wishlist{' '}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a onClick={() => navigate('/CartItem')} className={clsx('nav-link', cx('dropdown-menu-toggle-item'))}>
                      {' '}
                      <i className="fa fa-shopping-cart"></i> My Cart{' '}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a onClick={handleLogout} className={clsx('nav-link', cx('dropdown-menu-toggle-item'))}>
                      {' '}
                      <i className="fa fa-sign-out-alt"></i> Logout{' '}
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link to="/register" className={clsx('nav-link', cx('dropdown-menu-toggle-item'))}>
                      {' '}
                      Sign Up{' '}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login" className={clsx('nav-link', cx('dropdown-menu-toggle-item'))}>
                      {' '}
                      Login{' '}
                    </Link>
                  </li>
                </>
              )}
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
                  <a className={clsx('nav-link', cx('hover-primary-color'))} onClick={() => navigate('/')}>
                    Home{' '}
                  </a>
                </li>
                <li className="nav-item">
                  <a className={clsx('nav-link', cx('hover-primary-color'))} onClick={() => navigate('/ProductList')}>
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className={clsx('nav-link', cx('hover-primary-color'))} href="/Cooking">
                  Cooking
                  </a>
                </li>
                <li className="nav-item">
                  <a className={clsx('nav-link', cx('hover-primary-color'))} href="introduce">
                    Introduce
                  </a>
                </li>
                <li className="nav-item">
                  <a className={clsx('nav-link', cx('hover-primary-color'))} href="order">
                    Order
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
                  {/* <div className="dropdown-menu">
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
                  </div> */}
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
