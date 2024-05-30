import classNames from 'classnames/bind';
import clsx from 'clsx';

import styles from './Login.module.scss';
import images from '~/access/images';

function Login() {
  const cx = classNames.bind(styles);
  return (
    <section className={(clsx('section-conten padding-y'), cx('container'))} style={{ 'minHeight': '84vh' }}>
      <div className="card mx-auto" style={{ 'maxWidth': '380px', 'marginTop': '100px' }}>
        <div className="card-body">
          <h4 className="card-title mb-4">Sign in</h4>
          <form>
            <a href="#" className={clsx('btn btn-facebook btn-block mb-2', cx('fb-btn'))}>
              {' '}
              <i className="fab fa-facebook-f"></i> Sign in with Facebook
            </a>
            <a href="#" className={clsx('btn btn-google btn-block mb-4', cx('gg-btn'))}>
              {' '}
              <i className="fab fa-google"></i> Sign in with Google
            </a>
            <div className="form-group">
              <input name="" className="form-control" placeholder="Email" type="text" />
            </div>
            <div className="form-group">
              <input name="" className="form-control" placeholder="Password" type="password" />
            </div>

            <div className="form-group">
              <a href="#" className="float-right">
                Forgot password?
              </a>
              <label className={clsx("form-check-label",cx('remember-lbl'))} htmlFor="remember">
                <input type="checkbox" className="form-check-input" id="remember" name="vehicle2" value="something" />
                Remember 
              </label>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block">
                {' '}
                Login{' '}
              </button>
            </div>
          </form>
        </div>
      </div>

      <p className="text-center mt-4">
        Don't have account? <a href="./Register">Sign up</a>
      </p>
      <br />
      <br />
    </section>
  );
}

export default Login;
