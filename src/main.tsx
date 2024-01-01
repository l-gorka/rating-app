import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import { NextUIProvider } from '@nextui-org/react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import App from './App';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </BrowserRouter>
    </NextUIProvider>
  </React.StrictMode>
);
