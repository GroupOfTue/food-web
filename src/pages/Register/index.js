import classNames from 'classnames/bind';
import clsx from 'clsx';

import styles from './Register.module.scss';
import images from '~/access/images';

function Register() {
  const cx = classNames.bind(styles);

  return (
    <section className="section-content padding-y">
      <div className="card mx-auto" style={{'maxWidth':'520px', 'marginTop':'40px'}}>
        <article className="card-body">
          <header className="mb-4">
            <h4 className="card-title">Sign up</h4>
          </header>
          <form>
            <div className="form-row">
              <div className="col form-group">
                <label>First name</label>
                <input id="first-name" name="first-name" type="text" className="form-control" placeholder="" />
              </div>
              <div className="col form-group">
                <label>Last name</label>
                <input id="last-name" name="last-name" type="text" className="form-control" placeholder="" />
              </div>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input id="email" name="email" type="email" className="form-control" placeholder="" />
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
                  value="male"
                />
                <span className="custom-control-label"> Male </span>
              </label>
              <label className="custom-control custom-radio custom-control-inline">
                <input id="rad-female" className="custom-control-input" type="radio" name="gender" value="female" />
                <span className="custom-control-label"> Female </span>
              </label>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>City</label>
                <input id="city" name="city" type="text" className="form-control" />
              </div>
              <div className="form-group col-md-6">
                <label>Country</label>
                <select name="country" id="country" className="form-control">
                  <option> Choose...</option>
                  <option value="uzbekistan">Uzbekistan</option>
                  <option value="russia">Russia</option>
                  <option value="united-states">
                    United States
                  </option>
                  <option value="india">India</option>
                  <option value="afganistan">Afganistan</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Create password</label>
                <input id="create-password" name="create-password" className="form-control" type="password" />
              </div>
              <div className="form-group col-md-6">
                <label>Repeat password</label>
                <input id="repeat-password" name="repeat-password" className="form-control" type="password" />
              </div>
            </div>
            <div className="form-group">
              <button name="submit" type="submit" className="btn btn-primary btn-block">
                {' '}
                Register{' '}
              </button>
            </div>
            <div className="form-group">
            <label className={clsx("form-check-label",cx('agree-terms-lbl'))} htmlFor="agree-terms">
                <input type="checkbox" className="form-check-input" id="agree-terms" name="vehicle2" value="something" />
                I am agree with <a href="#">terms and contitions</a>{' '} 
              </label>
              
            </div>
          </form>
        </article>
      </div>
      <p className="text-center mt-4">
        Have an account? <a href="./page-user-login.php">Log In</a>
      </p>
      <br />
      <br />
    </section>
  );
}

export default Register;
