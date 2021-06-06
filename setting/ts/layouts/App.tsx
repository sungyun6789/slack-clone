import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LogIn from '@pages/Login';
import SignUp from '@pages/SignUp';

const App: React.FC = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/login" />
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/signup" component={SignUp} />
    </Switch>
  );
};

export default App;
