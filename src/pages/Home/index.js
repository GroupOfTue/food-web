import clsx from 'clsx';
import classNames from 'classnames/bind';
import styles from './Home.scss';

import images from '~/access/images';
import MainSectionHomePage from '~/components/MainSectionHomePage';
import DealHomePage from '~/components/DealHomePage';
import CategoryListHomePage from '~/components/CategoryListHomePage';
import RecommendedItems from '~/components/RecommendedItems';
import { GetAllProductApparel } from '~/MockApi/GetAllProductApparel.js';
import { GetAllProductElectronics } from '~/MockApi/GetAllProductElectronics.js';
import { getAllProductApi, getAllProductByCateApi } from '~/api/product';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Home() {
  //fake call api
  const itemsApparel = GetAllProductApparel;
  const itemsElectronics = GetAllProductElectronics;

  const [product, setProduct] = useState([]);
  const [productInCate, setProductInCate] = useState([]);

  useEffect(() => {
    try {
      getAllProductApi()
        .then((result) => {
          setProduct(result);
        })
        .catch((error) => {
          console.log('loi get product: ', error);
        });

        getAllProductByCateApi()
        .then((result) => {
          setProductInCate(result);
        })
        .catch((error) => {
          console.log('loi get product: ', error);
        });
    } catch (error) {
      console.error('Lỗi đăng nhập:', error);
    }
  }, []);

  const categoryListFake = [
    {
      headerText: 'APPAREL',
      banner: {
        bannerId: 'apparel',
        title: 'Best trending clothes only for summer',
        discription: 'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        images: images.items.hai,
      },
      itemList: itemsApparel,
    },
    {
      headerText: 'ELECTRONICS',
      banner: {
        bannerId: 'electronics',
        title: 'Machinery items for manufacturers',
        discription: 'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        images: images.items.muoiBon,
      },
      itemList: itemsElectronics,
    },
  ];

  const itemRecommentListFake = [
    {
      title: 'Just another product name',
      image: images['items']['mot'],
      price: '$179.00',
    },
    {
      title: 'Some item name here',
      image: images.items.hai,
      price: '$280.00',
    },
    {
      title: 'Just another product name',
      image: images.items.mot,
      price: '$179.00',
    },
    {
      title: 'Some item name here',
      image: images.items.hai,
      price: '$280.00',
    },
    {
      title: 'Just another product name',
      image: images.items.mot,
      price: '$179.00',
    },
    {
      title: 'Some item name here',
      image: images.items.hai,
      price: '$280.00',
    },
    {
      title: 'Just another product name',
      image: images.items.mot,
      price: '$179.00',
    },
    {
      title: 'Some item name here',
      image: images.items.hai,
      price: '$280.00',
    },
    {
      title: 'Just another product name',
      image: images.items.mot,
      price: '$179.00',
    },
    {
      title: 'Some item name here',
      image: images.items.hai,
      price: '$280.00',
    },
    {
      title: 'Just another product name',
      image: images.items.mot,
      price: '$179.00',
    },
    {
      title: 'Some item name here',
      image: images.items.hai,
      price: '$280.00',
    },
  ];
  return (
    <>
      <MainSectionHomePage />
      <DealHomePage />
      {productInCate ? productInCate.map((item, index) => (
        <CategoryListHomePage key={index} headerText={item.name} banner={{bannerId: item.id, title:item.name, discription:item.discription, images: item.image}} itemList={item.products} />
      )) : ""}
      <RecommendedItems itemRecommentList={product} />
    </>
  );
}

export default Home;
