import Home from '~/pages/Home';
import ProductList from '~/pages/ProductList'
import CategoryItems from '~/pages/CategoryItems'
import ItemDetails from '~/pages/ItemDetails'
import CartItem from '~/pages/CartItem'
import Login from '~/pages/Login'
import Register from '~/pages/Register'
import Aboutme from '~/pages/Aboutme';


//Public routes
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/ProductList', component: ProductList},
  { path: '/CategoryItems/:categoryId', component: CategoryItems},
  { path: '/ItemDetails/:id', component: ItemDetails},
  { path: '/CartItem', component: CartItem},
  { path: '/Login', component: Login, layout: null},
  { path: '/Register', component: Register, layout: null},
  { path: '/Aboutme', component: Aboutme, layout: null},
];

//Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
