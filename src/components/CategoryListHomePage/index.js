import classNames from 'classnames/bind';
import clsx from 'clsx';
import styles from './CategoryListHomePage.module.scss';
import images from '~/access/images';
import Header from './Header';
import Body from './Body';

function CategoryListHomePage({ headerText, banner, itemList }) {
  const cx = classNames.bind(styles);

  return (
    <section className="padding-bottom">
      <Header title={headerText} />
      <Body banner={banner} itemList={itemList} />
    </section>
  );
}

export default CategoryListHomePage;
