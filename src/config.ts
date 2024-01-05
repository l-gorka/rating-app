import { RiHome5Line } from 'react-icons/ri';
import { TbCategoryPlus } from 'react-icons/tb';
import { FaRegUserCircle } from 'react-icons/fa';

import Home from './pages/Home/Home';
import CategoriesList from 'src/pages/CategoriesList/CategoriesList';
import Category from 'src/pages/Category/Category';
import User from 'src/pages/User/User';
import Details from 'src/pages/Details/Details';

export const bottomNavOptions = [
  {
    component: RiHome5Line,
    href: '/',
  },
  {
    component: TbCategoryPlus,
    href: '/categories',
  },
  {
    component: FaRegUserCircle,
    href: '/user',
  },
]

export const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/categories',
    exact: true,
    component: CategoriesList,
  },
  {
    path: '/user',
    exact: true,
    component: User,
  },
  {
    path: '/category/:id',
    exact: true,
    component: Category,
  },
  {
    path: '/details/:id',
    exact: true,
    component: Details,
  },
]