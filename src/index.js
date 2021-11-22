import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

import { Provider } from 'react-redux'
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { createStore } from "redux";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
// all th reducer
import indexReducer from "./Store/reducer/index";

//PersistData
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, indexReducer);

let store = createStore(
  persistedReducer,
  //window dev extension
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const persistor = persistStore(store);



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>{/* Attach persit */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


