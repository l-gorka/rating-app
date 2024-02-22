import { SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { setRouteAnimation } from 'src/store/reducers';
import { useAppDispatch } from 'src/store/configureStore';

import { routes } from 'src/config';

export const useRouteAnimation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const navigateAndResetAnimation = (href: string) => {
    setTimeout(() => {
      navigate(href);
    });
    setTimeout(() => {
      dispatch(setRouteAnimation('left'));
    },500)
  }

  const handleLinkClick = (e: SyntheticEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    const currentPathOrder = routes.find((route) => route.path === location.pathname)?.order;
    const targetPathOrder = routes.find((route) => route.path === href)?.order;

    if (href === '/add-item') {
      dispatch(setRouteAnimation('coverRight'));

      navigateAndResetAnimation(href);
      return;
    }

    if (currentPathOrder > targetPathOrder) {
      dispatch(setRouteAnimation('left'));
    } else if (currentPathOrder < targetPathOrder) {
      dispatch(setRouteAnimation('right'));
    }

    navigateAndResetAnimation(href);
  };


  return { handleLinkClick };
};