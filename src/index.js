import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import { UserProvider } from "./UserContext"

const loading__page = document.querySelector('.loading__page');

// if you want to show the loader when React loads data again
const showLoader = () => loading__page.classList.remove('hide__loading__page');

const hideLoader = () => loading__page.classList.add('hide__loading__page');


const root = ReactDOM.createRoot(document.getElementById('root'));



setTimeout(() =>
  root.render(


    <React.StrictMode>
      <UserProvider>
        <App hideLoader={hideLoader} showLoader={showLoader} />
      </UserProvider>


    </React.StrictMode>
  ), 3000);
