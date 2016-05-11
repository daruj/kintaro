import React                                        from 'react';
import { Router, Route, Redirect, browserHistory }  from 'react-router';
import ApplicationContainer                         from 'app/views/containers/application_container';
import HomeContainer                                from 'app/views/containers/home_container';


const RouterComponent = ({}) => {
  return (
    <Router history={browserHistory}>
      <Redirect from="/" to="/home" />
      <Route path="/" component={ApplicationContainer}>
        <Route path="home" component={HomeContainer} />
      </Route>
    </Router>
  );
};

export default RouterComponent;
