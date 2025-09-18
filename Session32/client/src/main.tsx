import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { store } from "./Components/PTIT_CNTT4_IT104_Session32_Exercises01/store/store";
// import {store } from "./Components/PTIT_CNTT4_IT104_Session32_Exercises03/store/store"
// import { store } from "./Components/PTIT_CNTT4_IT104_Session32_Exercises02/store/store";
// import { store } from "./Components/PTIT_CNTT4_IT104_Session32_Exercises04/store/store";
// import { store } from "./Components/PTIT_CNTT4_IT104_Session32_Exercises05/store/store";
// import { store } from "./Components/PTIT_CNTT4_IT104_Session32_Exercises06/store/store";
import { store } from "./Components/PTIT_CNTT4_IT104_Session32_Exercises078/store/store";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);