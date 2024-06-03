import classNames from 'classnames/bind';
import clsx from 'clsx';

import styles from './Register.module.scss';
import images from '~/access/images';
import { registerApi } from '~/api/user';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const cx = classNames.bind(styles);

  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState(true);
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await registerApi(username, phone, email, gender, address, password);
      if (response === 'data inserted') {
        navigate('/login');
      }
    } catch (error) {
      console.error('Lỗi đăng ký:', error);
    }
  };

  return (
    <section className="section-content padding-y">
      <div className="card mx-auto" style={{ maxWidth: '520px', marginTop: '40px' }}>
        <article className="card-body">
          <header className="mb-4">
            <h4 className="card-title">Sign up</h4>
          </header>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="col form-group">
                <label for="full-name">Full name</label>
                <input
                  id="user-name"
                  name="user-name"
                  type="text"
                  className="form-control"
                  placeholder="Example: John Smith"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <label for="phone">Phone</label>
              <input
                id="phone"
                name="phone"
                type="phone"
                className="form-control"
                placeholder="Example: 0987654321"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <small className="form-text text-muted">We'll never share your phone with anyone else.</small>
            </div>
            <div className="form-group">
              <label for="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-control"
                placeholder="Example: john.smith@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <small className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label className="custom-control custom-radio custom-control-inline">
                <input
                  id="rad-male"
                  className="custom-control-input"
                  defaultChecked={true}
                  type="radio"
                  name="gender"
                  onChange={(e) => setGender(true)}
                />
                <span className="custom-control-label"> Male </span>
              </label>
              <label className="custom-control custom-radio custom-control-inline">
                <input id="rad-female" className="custom-control-input" type="radio" name="gender" value="female" onChange={(e) => setGender(false)}/>
                <span className="custom-control-label"> Female </span>
              </label>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="address">Address</label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  className="form-control"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="create-password">Create password</label>
                <input
                  id="create-password"
                  name="create-password"
                  className="form-control"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group col-md-6">
                <label for="repeat-password">Repeat password</label>
                <input
                  id="repeat-password"
                  name="repeat-password"
                  className="form-control"
                  type="password"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <button name="submit" type="submit" className="btn btn-primary btn-block">
                {' '}
                Register{' '}
              </button>
            </div>
            <div className="form-group">
              <label className={clsx('form-check-label', cx('agree-terms-lbl'))} htmlFor="agree-terms">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="agree-terms"
                  name="vehicle2"
                  value="something"
                />
                I am agree with <a href="#">terms and contitions</a>{' '}
              </label>
            </div>
          </form>
        </article>
      </div>
      <p className="text-center mt-4">
        Have an account? <a href="./Login">Log In</a>
      </p>
      <br />
      <br />
    </section>
  );
}

export default Register;
