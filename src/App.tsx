import { Routes, Route, useLocation } from 'react-router-dom';
import { routes, bottomNavOptions } from './config';

import { AnimatePresence } from 'framer-motion';
import BottomNav from 'src/components/ui/BottomNav';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { fetchCategories } from 'src/store/reducers';

import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';
Amplify.configure(config);

export function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    async function onAppStart() {
      dispatch(fetchCategories());
    }

    onAppStart();
  }, [])

  return (
    <>
      <div className="flex flex-col w-full h-dvh max-w-screen-sm mx-auto ">
        <div className="flex-grow overflow-scroll relative">
          <AnimatePresence>
            <Routes location={location} key={location.pathname}>
              {routes.map((route) => (
                <Route key={route.path} path={route.path} element={<route.component />} />
              ))}
            </Routes>
          </AnimatePresence>
        </div>
        <div className='w-full max-w-screen-sm mx-auto'>
          <BottomNav options={bottomNavOptions} />
        </div>
      </div>
    </>
  );
}

export default withAuthenticator(App);