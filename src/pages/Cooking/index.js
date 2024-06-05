import classNames from 'classnames/bind';
import clsx from 'clsx';
import { useParams, useNavigate } from 'react-router-dom';

import images from '~/access/images';
import styles from './Cooking.module.scss';
import Item from './Item';
import { GetAllProductApparel } from '~/MockApi/GetAllProductApparel.js';
import { GetAllProductElectronics } from '~/MockApi/GetAllProductElectronics.js';
import { getProductByCateIdApi } from '~/api/product';
import { useEffect, useState } from 'react';
import { getAllCookingApi } from '~/api/cooking'

function Cooking() {
  const cx = classNames.bind(styles);
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [itemList, setItemList] = useState([]);


  // getAllCookingApi

  useEffect(() => {
    getAllCookingApi()
      .then((response) => {
        console.log("Kết quả: ", response);
        setItemList(response)
      })
      .catch((err) => {
        console.log("Lỗi khi gọi API: ", err);
      });
  }, []);

  // if (categoryId === 'apparel') {
  //   //call api get product apparel list fake
  //   itemList = GetAllProductApparel;
  // } else if (categoryId === 'electronics') {
  //   itemList = GetAllProductElectronics;
  // }

  // try {
  //   getProductByCateIdApi(categoryId)
  //     .then((result) => {
  //       setItemList(result);
  //     })
  //     .catch((error) => {
  //       console.log('loi get product: ', error);
  //     });
  // } catch (error) {
  //   console.error('Lỗi đăng nhập:', error);
  // }

  return (
    <div className={clsx('row', cx('category-wrap'))}>
      <main className="col-md-12">

        {itemList ? itemList.slice(0, 5).map((item, index) => {
          return (
            <Item
              key={index}
              image={item.image}
              title={item.title}
              discription={item.cook}
              ingredient={item.ingredient}
            />
          );
        }) : ""}

        <nav className="mb-4" aria-label="Page navigation sample">
          <ul className="pagination">
            <li className="page-item disabled">
              <a className="page-link" href="#">
                Previous
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                4
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                5
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </main>
    </div>
  );
}

export default Cooking;
