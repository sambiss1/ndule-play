import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const loading__page = document.querySelector('.loading__page');

// if you want to show the loader when React loads data again
const showLoader = () => loading__page.classList.remove('hide__loading__page');

const hideLoader = () => loading__page.classList.add('hide__loading__page');


const root = ReactDOM.createRoot(document.getElementById('root'));



setTimeout(() =>
  root.render(


    <React.StrictMode>

      <App hideLoader={hideLoader} showLoader={showLoader} />

    </React.StrictMode>
  ), 3000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
