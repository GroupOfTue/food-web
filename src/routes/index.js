import Home from '~/pages/Home';
import ProductList from '~/pages/ProductList';
import CategoryItems from '~/pages/CategoryItems';
import ItemDetails from '~/pages/ItemDetails';
import CartItem from '~/pages/CartItem';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import Aboutme from '~/pages/Aboutme';
import Wishlist from '~/pages/Wishlist';

import Checkout from '~/pages/Checkout';

import Introduce from '~/pages/Introduce';
import PurchaseHistory from '~/pages/PurchaseHistory';
import Order from '~/pages/Order';
import ErrorPage404 from '~/pages/errorScreen/error404';
import ErrorPage500 from '~/pages/errorScreen/error500';
import ErrorPage403 from '~/pages/errorScreen/error403';

//Public routes
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/ProductList/:categoryId', component: ProductList },
  { path: '/CategoryItems/:categoryId', component: CategoryItems },
  { path: '/ItemDetails/:id', component: ItemDetails },
  { path: '/CartItem', component: CartItem },
  { path: '/Login', component: Login, layout: null },
  { path: '/Register', component: Register, layout: null },
  { path: '/Aboutme', component: Aboutme },
  { path: '/Introduce', component: Introduce },
  { path: '/PurchaseHistory', component: PurchaseHistory },
  { path: '/Checkout', component: Checkout },
  { path: '/Wishlist', component: Wishlist },
  { path: '/Order', component: Order },
  { path: '*', component: ErrorPage404, layout: null },
  { path: '/500', component: ErrorPage500, layout: null },
  { path: '/403', component: ErrorPage403, layout: null },
];

//Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
