import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import MicroFrontend from './_components/MicroFrontend';
import About from './pages/About';
import { Admin } from './_layout';
import { LoginPage } from './pages/LoginPage';
import { NavBar, Footer, PrivateRoute } from './_components';

const {
  REACT_APP_MATH_COMPONENT_HOST: mathComponentHost,
  REACT_APP_POINT_COMPONENT_HOST: pointComponentHost
} = process.env;

const MathComponent = ({ history }) => (
  <MicroFrontend history={history} host={mathComponentHost} name="Component" />
);

const PointComponent = ({ history }) => (
  <MicroFrontend history={history} host={pointComponentHost} name="Component" />
);

class App extends React.Component {
  render() {
    const { alert } = this.props;
    return (
      <div className="app" data-test="appComponent">
        {alert.message && (
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        )}
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <NavBar />
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/about'} render={About} />
            <Route path="/math" component={MathComponent} />
            <PrivateRoute path="/point" component={PointComponent}/>
            <PrivateRoute path="/admin" component={Admin}/>
            <Route path="/login" component={LoginPage} />
            <Redirect from="/" to="/about" />
            <Redirect from="*" to="/" />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };
