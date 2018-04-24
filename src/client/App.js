import React from "react";
import { Route, Switch, withRouter } from "react-router-dom/";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import { connect } from "react-redux";
import { getme } from "./redux/actions";

// Containers
import Home from "./containers/Home";
import Profile from "./containers/Profile";
import Signup from "./containers/Signup";
import Developer from "./containers/Developer";
import Navigation from "./components/Navigation";

class App extends React.Component {
  componentWillMount() {
    // check if the session user is authed
    this.props.getme();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/signup" component={Signup} />
          <Route path="/developer" component={Developer} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = {
  getme
};

export default withRouter(connect(null, mapDispatchToProps)(App));
