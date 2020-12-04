import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import MicroFrontend from './_components/MicroFrontend';
import About from './pages/About';
import { NavBar, Footer } from './_components';

const { REACT_APP_MATH_COMPONENT_HOST: mathComponentHost } = process.env;

const Component = ({ history }) => (
  <MicroFrontend history={history} host={mathComponentHost} name="Component" />
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
            <Route path="/math" component={Component} />
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
