import clsx from 'clsx';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import styles from './Footer.module.scss';
import images from '~/access/images';
import SocialNetworkIcons from './SocialNetworkIcons';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer className={clsx('border-top', 'bg-white', cx('container'))}>
      <div className="container">
        <section className="footer-top py-4">
          <div className="row">
            <aside className="col-md-4">
              <article className="mr-3">
                <img src={images.logo} className={cx('logo-footer')} />
                <p className="mt-3">
                  Some short text about company like You might remember the Dell computer commercials in which a youth
                  reports this exciting news to his friends.
                </p>
                <div>
                  <SocialNetworkIcons icon="fa-facebook-f" title="Facebook" href="#" />
                  <SocialNetworkIcons icon="fa-instagram" title="Instagram" href="#" />
                  <SocialNetworkIcons icon="fa-youtube" title="Youtube" href="#" />
                  <SocialNetworkIcons icon="fa-twitter" title="Twitter" href="#" />
                </div>
              </article>
            </aside>
            <aside className="col-sm-3 col-md-2">
              <h6 className={cx('title')}>About</h6>
              <ul className="list-unstyled">
                <li>
                  {' '}
                  <a href="#">About us</a>
                </li>
                <li>
                  {' '}
                  <a href="#">Services</a>
                </li>
                <li>
                  {' '}
                  <a href="#">Rules and terms</a>
                </li>
                <li>
                  {' '}
                  <a href="#">Blogs</a>
                </li>
              </ul>
            </aside>
            <aside className="col-sm-3 col-md-2">
              <h6 className={cx('title')}>Services</h6>
              <ul className="list-unstyled">
                <li>
                  {' '}
                  <a href="#">Help center</a>
                </li>
                <li>
                  {' '}
                  <a href="#">Money refund</a>
                </li>
                <li>
                  {' '}
                  <a href="#">Terms and Policy</a>
                </li>
                <li>
                  {' '}
                  <a href="#">Open dispute</a>
                </li>
              </ul>
            </aside>
            <aside className="col-sm-3  col-md-2">
              <h6 className={cx('title')}>For users</h6>
              <ul className="list-unstyled">
                <li>
                  {' '}
                  <a href="#"> User Login </a>
                </li>
                <li>
                  {' '}
                  <a href="#"> User register </a>
                </li>
                <li>
                  {' '}
                  <a href="#"> Account Setting </a>
                </li>
                <li>
                  {' '}
                  <a href="#"> My Orders </a>
                </li>
                <li>
                  {' '}
                  <a href="#"> My Wishlist </a>
                </li>
              </ul>
            </aside>
            <aside className="col-sm-2  col-md-2">
              <h6 className={cx('title')}>Our app</h6>
              <a href="#" className="d-block mb-2">
                <img src={images.misc.appstore} height="40" />
              </a>
              <a href="#" className="d-block mb-2">
                <img src={images.misc.playmarket} height="40" />
              </a>
            </aside>
          </div>
        </section>

        <section className={clsx('border-top', cx('footer-copyright'))}>
          <p className="float-left text-muted"> &copy; 2023 Company All rights resetved</p>
          <p target="_blank" className="float-right text-muted">
            <a href="#">Privacy & Cookies</a> &nbsp; &nbsp;
            <a href="#">Accessibility</a>
          </p>
        </section>
      </div>
    </footer>
  );
}
export default Footer;
