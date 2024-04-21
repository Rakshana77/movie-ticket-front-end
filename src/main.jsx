import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { Provider } from "react-redux";
import { store } from './store/indexx.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
axios.defaults.baseURL="http://localhost:5000"
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
      <App />
      </Provider>
      </BrowserRouter>
  </React.StrictMode>,
)
