import { Routes, Route, useLocation } from 'react-router-dom';
import { routes, bottomNavOptions } from './config';

import { AnimatePresence } from 'framer-motion';
import BottomNav from 'src/components/ui/BottomNav';
import { useEffect } from 'react';

import { fetchCategories, fetchAllItems, setUserEmail } from 'src/store/reducers';
import { useAppDispatch } from './store/configureStore';

import { ToastContainer } from 'react-toastify';
import { Flip } from 'react-toastify';

import { Amplify } from 'aws-amplify';
import { fetchAuthSession } from '@aws-amplify/auth';
import { withAuthenticator } from '@aws-amplify/ui-react';

import '@aws-amplify/ui-react/styles.css';
import 'react-toastify/dist/ReactToastify.css';

import config from './amplifyconfiguration.json';
Amplify.configure(config);

export function App() {
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function onAppStart() {
      dispatch(fetchCategories());
      dispatch(fetchAllItems());

      const { tokens } = await fetchAuthSession();

      dispatch(setUserEmail(tokens?.idToken?.payload?.email));


    }

    onAppStart();
  }, []);

  return (
    <>
      <div className="flex w-full h-dvh max-w-screen-sm mx-auto ">
        <div className="flex-grow overflow-scroll relative">
          <AnimatePresence initial={false}>
              <Routes location={location} key={location.pathname}>
                {routes.map((route) => (
                  <Route key={route.path} path={route.path} element={<route.component />} />
                ))}
              </Routes>
          </AnimatePresence>
        </div>
        <BottomNav options={bottomNavOptions} />
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Flip}
      />
    </>
  );
}

const app = withAuthenticator(App, {
  variation: 'modal',
});

export default app;
