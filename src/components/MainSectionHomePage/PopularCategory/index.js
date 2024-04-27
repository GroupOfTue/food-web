import classNames from 'classnames/bind';
import styles from './PopularCategory.module.scss';
import clsx from 'clsx';
import images from '~/access/images';
import Item from './Item'

const cx = classNames.bind(styles);

function PopularCategory() {

  const arrPopularCategoryFake = [
    { title: 'Men clothing', image: images.items.mot },
    { title: 'Winter clothing', image: images.items.hai },
    { title: 'Home inventory', image: images.items.sau },
  ];

  return (
    <div className="col-md d-none d-lg-block flex-grow-1">
      <aside className="special-home-right">
        <h6 className="bg-blue text-center text-white mb-0 p-2">Popular category</h6>

        {arrPopularCategoryFake.map((item, index) => (
          <Item title={item.title} image={item.image} key={index} />
        ))}
      </aside>
    </div>
  );
}

export default PopularCategory;
