import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import { NextUIProvider } from '@nextui-org/react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from 'src/store/configureStore.js';

import App from './App';

import './index.css';

const store = configureStore;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </NextUIProvider>
  </React.StrictMode>
);
