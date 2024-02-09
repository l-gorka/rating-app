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
    path: '/categories/:id',
    exact: true,
    component: Category,
  },
  {
    path: '/categories/details/:id',
    exact: true,
    component: Details,
  },
  {
    path: '/add-item',
    exact: true,
    component: AddItem,
  },
  {
    path: '/login',
    exact: true,
    component: Login,
  }
]