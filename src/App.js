import { React, useEffect, useContext } from 'react';
import './styles/App.css';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

import AuthUser from "./AuthUser";
import UnAuthUser from './UnAuthUser';
import { UserContext } from './UserContext';


function App({ hideLoader }) {

  const { user } = useContext(UserContext);
  useEffect(hideLoader, [])

  return user.auth ? <AuthUser /> : <UnAuthUser />;
}

export default App;
