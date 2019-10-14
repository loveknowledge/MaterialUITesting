import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

import {
  Login,
  SignUp,
  HomePage,
  Profile,
  Community,
  CreatePage,
  Test,
  Messages,
} from '.';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/home" component={Profile} />
        <Route path="/create" component={CreatePage} />
        <Route path="/community" component={Community} />
        <Route path="/test" component={Test} />
        <Route path="/messages" component={Messages} />
        <Route component={HomePage} />
      </Switch>
    );
  }
}

export default withRouter(Routes);
