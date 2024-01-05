import { Routes, Route, useLocation } from 'react-router-dom';
import { routes, bottomNavOptions } from './config';

import { AnimatePresence } from 'framer-motion';

import { setupWorker } from 'msw/browser'
import { handlers } from 'src/mocks/handlers';

import BottomNav from 'src/components/ui/BottomNav';
import { useEffect } from 'react';

export default function App() {
  const location = useLocation();

  useEffect(() => {
    setupWorker(...handlers).start({onUnhandledRequest: 'bypass'});
  }, [])

  return (
    <>
      <div className="flex flex-col w-full h-dvh">
        <div className="flex-grow overflow-scroll">
          <AnimatePresence>
            <Routes location={location} key={location.pathname}>
              {routes.map((route) => (
                <Route key={route.path} path={route.path} element={<route.component />} />
              ))}
            </Routes>
          </AnimatePresence>
        </div>
        <div>
          <BottomNav options={bottomNavOptions} />
        </div>
      </div>
    </>
  );
}
