import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Sidebar from './conponts/Sidebar';

const App = () => {
  return (
    <Route>
      <Sidebar />
      <Redirect from="/" to="/home" />
    </Route>
  );
}

export default App;
