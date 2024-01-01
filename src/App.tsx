import { Routes, Route, useLocation } from 'react-router-dom';
import { routes, bottomNavOptions } from './config';

import { AnimatePresence } from 'framer-motion';

import BottomNav from './components/layout/BottomNav';

export default function App() {
  const location = useLocation();

  return (
    <>
      <div className="flex flex-col w-full h-screen overflow-hidden">
        <div className="flex-grow ">
          <AnimatePresence>
            <Routes location={location} key={location.pathname}>
              {routes.map((route) => (
                <Route key={route.path} path={route.path} element={<route.component />} />
              ))}
            </Routes>
          </AnimatePresence>
        </div>
        <BottomNav options={bottomNavOptions} />
      </div>
    </>
  );
}
