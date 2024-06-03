import classNames from 'classnames/bind';
import clsx from 'clsx';

import images from '~/access/images';
import styles from './MainSectionHomePage.module.scss';
import Navbar from './Navbar';
import Slide from './Slide';
import PopularCategory from './PopularCategory';
// import { useEffect } from 'react';
// import { getHelloApi } from '~/api/product';

function MainSectionHomePage() {
  const cx = classNames.bind(styles);

  // useEffect(() => {
  //   fetchDateHello();
  // });

  // async function fetchDateHello() {
  //   const data = getHelloApi();
  //   console.log(data);
  // }

  return (
    <>
      <section className="section-main py-4">
        <main className="card">
          <div className="card-body">
            <div className="row" style={{ alignItems: 'center' }}>
              <Navbar />
              <Slide />
              <PopularCategory />
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default MainSectionHomePage;
