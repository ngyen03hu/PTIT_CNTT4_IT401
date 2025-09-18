// main.tsx or index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Profile from './Components/PTIT_CNTT4_IT104_Session32_Exercises01/Profile';
import { store } from './Components/PTIT_CNTT4_IT104_Session32_Exercises01/store/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Profile />
    </Provider>
  </React.StrictMode>
);
