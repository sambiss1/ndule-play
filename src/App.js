import { React, useEffect, useContext } from 'react';
import './styles/App.css';

import AuthUser from "./AuthUser";
import UnAuthUser from './UnAuthUser';
import { UserContext } from './UserContext';


function App({ hideLoader }) {

  const { user } = useContext(UserContext);
  useEffect(hideLoader, [])

  const actual__token = window.localStorage.getItem("token")


  return actual__token ? <AuthUser /> : <UnAuthUser />;
}

export default App;
