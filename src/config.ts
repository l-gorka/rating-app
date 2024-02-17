import { RiHome5Line } from 'react-icons/ri';
import { TbCategoryPlus } from 'react-icons/tb';
import { FaRegUserCircle } from 'react-icons/fa';
import { FiPlusCircle } from "react-icons/fi";

import Home from './pages/Home/Home';
import CategoriesList from 'src/pages/CategoriesList/CategoriesList';
import Category from 'src/pages/Category/Category';
import User from 'src/pages/User/User';
import Details from 'src/pages/Details/Details';
import Login from'src/pages/Login/Login';
import { AddItem } from 'src/pages/AddItem/AddItem';

export const bottomNavOptions = [
  {
    component: RiHome5Line,
    href: '/',
  },
  {
    component: FiPlusCircle,
    href: '/add-item',
  },
  {
    component: TbCategoryPlus,
    href: '/categories',
  },
]

export const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    order: 1
  },
  {
    path: '/categories',
    exact: true,
    component: CategoriesList,
    order: 2
  },
  {
    path: '/categories/:id',
    exact: true,
    component: Category,
    order: 3
  },
  {
    path: '/categories/details/:id',
    exact: true,
    component: Details,
    order: 4
  },
  {
    path: '/add-item',
    exact: true,
    component: AddItem,
    order: 5
  },
  {
    path: '/login',
    exact: true,
    component: Login,
  }
]