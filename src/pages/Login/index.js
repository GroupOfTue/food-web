import classNames from 'classnames/bind';
import clsx from 'clsx';

import styles from './Login.module.scss';
import images from '~/access/images';
import { LoginApi } from '~/api/user';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Login() {
  const cx = classNames.bind(styles);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    const rememberedPhone = localStorage.getItem('rememberedPhone');
    const rememberedPassword = localStorage.getItem('rememberedPassword');
    if (rememberedPhone && rememberedPassword) {
      setPhone(rememberedPhone);
      setPassword(rememberedPassword);
      setRemember(true);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await LoginApi(phone, password);
      if (response === 'valid user') {
        if (remember) {
          localStorage.setItem('rememberedPhone', phone);
          localStorage.setItem('rememberedPassword', password);
        } else {
          localStorage.removeItem('rememberedPhone');
          localStorage.removeItem('rememberedPassword');
        }
        navigate('/');
      }
    } catch (error) {
      console.error("Lỗi đăng nhập:", error);
    }
  };

  return (
    <section className={(clsx('section-conten padding-y'), cx('container'))} style={{ minHeight: '84vh' }}>
      <div className="card mx-auto" style={{ maxWidth: '380px', marginTop: '100px' }}>
        <div className="card-body">
          <h4 className="card-title mb-4">Sign in</h4>
          <form onSubmit={handleSubmit}>
            <a href="#" className={clsx('btn btn-facebook btn-block mb-2', cx('fb-btn'))}>
              {' '}
              <i className="fab fa-facebook-f"></i> Sign in with Facebook
            </a>
            <a href="#" className={clsx('btn btn-google btn-block mb-4', cx('gg-btn'))}>
              {' '}
              <i className="fab fa-google"></i> Sign in with Google
            </a>
            <div className="form-group">
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                name="phone"
                className="form-control"
                placeholder="Phone"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                name="password"
                className="form-control"
                placeholder="Password"
              />
            </div>

            <div className="form-group">
              <a href="#" className="float-right">
                Forgot password?
              </a>
              <label className={clsx('form-check-label', cx('remember-lbl'))} htmlFor="remember">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="remember"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  name="remember"
                />
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
