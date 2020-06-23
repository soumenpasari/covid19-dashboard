import React, { Fragment } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import 'bulma/css/bulma.min.css';
// import Axios from 'axios';

import Store from './context/Store';

// font awesome component and creating a library
import { library } from '@fortawesome/fontawesome-svg-core';
import { faVirus } from '@fortawesome/free-solid-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

// importing components
import {Navbar} from './components/Navbar';
import {Dashboard} from './components/Dashboard';
import { About } from './components/About';

library.add(faVirus);
library.add(faRocket);

function App() {
  return (
    <Store>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' render={props => (
            <Fragment>
              <Dashboard />
            </Fragment>
          )} />
          <Route exact path='/about' render={props => (
            <Fragment>
              <About />
            </Fragment>
          )} />
        </Switch>
      </Router>
    </Store>
  );
}

export default App;
