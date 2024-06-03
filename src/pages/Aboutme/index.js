import classNames from 'classnames/bind';
import clsx from 'clsx';

import styles from './Aboutme.module.scss';
import images from '~/access/images';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Aboutme() {
  const cx = classNames.bind(styles);

  const [userData, setUserData] = useState({
    name: 'Thang Day',
    email: 'thang@gmail.com',
    mobileNumber: '+123 123 123',
    dateOfBirth: '-',
    gender: 'Choose your Gender',
    password: '',
  });

  const handleEdit = (field) => {
    // Implement logic to handle editing the specified field (name, email, etc.)
    // You can update the 'userData' state and re-render the component
    console.log(`Editing ${field}`);
  };

  const handleChangePassword = () => {
    // Implement logic to handle password change
    // You can update the 'userData' state and re-render the component
    console.log('Changing password');
  };

  return (
    <section className={(clsx('section-conten padding-y'), cx('container'))} style={{ minHeight: '84vh' }}>
      <div className="card mx-auto" style={{ maxWidth: '1000px', marginTop: '10px' }}>
        <div className="card-body">
          <h4 className="card-title mb-4">Account Information</h4>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="90"
                    height="90"
                    fill="currentColor"
                    class="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path
                      fill-rule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                    />
                  </svg>{' '}
                  Profile Ficture
                </th>
                <td scope="col">
                  <button className={cx('btn')}>Upload</button>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <p>Name</p>
                  <p class="label-Name">thangday</p>
                </th>
                <td>
                  <button className={cx('btn')}>Edit</button>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <p>Email</p>
                  <p class="label-Email">thang@gmail.com</p>
                </th>
                <td>
                  <button className={cx('btn')}>Update</button>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <p>Mobile number</p>
                  <p class="label-Mobilephone">+123 123 123</p>
                </th>
                <td>
                  <button className={cx('btn')}>Edit</button>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <p>Date of birth</p>
                  <p class="label-Date">-</p>
                </th>
                <td>
                  <button className={cx('btn')}>Edit</button>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <p>Gender</p>
                  <p class="label-Gender">-Chose your Gender-</p>
                </th>
                <td>
                  <button className={cx('btn')}>Edit</button>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <p>Password</p>
                  <p class="label-Password " type="password"></p>
                </th>

                <td>
                  <button className={cx('btn')}>Change Password</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p className="text-center mt-4">
        Back to Home <a href="./">Home</a>
      </p>
      <br />
      <br />
    </section>
  );
}

export default Aboutme;
