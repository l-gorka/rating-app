import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import { NextUIProvider } from '@nextui-org/react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


import configureStore from 'src/store/configureStore.js';

import App from './App';

import './index.css';

// Amplify.configure({
//   Auth: {
//     region: 'eu-central-1',
//     userPoolId: 'eu-central-1_OVOZNTVSu',
//     userPoolWebClientId: '4fgv00rc3j02rjckqahe1797k9',
//     mandatorySignIn: true,
//     oauth: {
//       domain: 'https://rating-app.auth.eu-central-1.amazoncognito.com',
//       scope: ['email', 'openid', 'profile'],
//       redirectSignIn: 'http://localhost:3000',
//       redirectSignOut: 'http"//localhost:3000',
//       responseType: 'code',
//     },
//   },
// });

const store = configureStore;

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <NextUIProvider>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </NextUIProvider>
  // </React.StrictMode>
);
