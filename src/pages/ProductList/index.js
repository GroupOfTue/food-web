import classNames from 'classnames/bind';
import clsx from 'clsx';
import { GetAllProduct } from '~/MockApi/GetAllProduct.js';

import images from '~/access/images';
import styles from './ProductList.module.scss';
import Item from './Item';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductByCateIdApi } from '~/api/product';


function ProductList() {
  const cx = classNames.bind(styles);
  const [itemList, setItemList] = useState([]);
  const { categoryId } = useParams();

  try {
    getProductByCateIdApi(categoryId)
      .then((result) => {
        setItemList(result);
      })
      .catch((error) => {
        console.log('loi get product: ', error);
      });
  } catch (error) {
    console.error('Lỗi đăng nhập:', error);
  }
  return (
    <div>
      <strong className="mr-md-auto">32 Items found </strong>
      <div className="row">
        {itemList.splice(0,12).map((item, index) => 
        <Item
        newProduct = {item.newProduct}
        image={images['items'][item.images]}
        title={item.title}
        price={item.price}
        company={item.company}
        Guarantee={item.Guarantee}
        reviewer={23}
        country={item.address}/>
        )}
      </div>

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

      <div className="box text-center">
        <p>Did you find what you were looking for？</p>
        <a href="" className="btn btn-light">
          Yes
        </a>
        <a href="" className="btn btn-light">
          No
        </a>
      </div>
    </div>
  );
}

export default ProductList;
