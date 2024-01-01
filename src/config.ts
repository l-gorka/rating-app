import { RiHome5Line } from 'react-icons/ri';
import { TbCategoryPlus } from 'react-icons/tb';
import { FaRegUserCircle } from 'react-icons/fa';

import Home from './pages/Home/Home';
import Categories from './pages/Categories/Categories';
import User from './pages/User/User';

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
    component: Categories,
  },
  {
    path: '/user',
    exact: true,
    component: User,
  }
]