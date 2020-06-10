import React from 'react';
import './App.css';
import 'bulma/css/bulma.min.css';
// import Axios from 'axios';

import {GlobalContext} from './context/GlobalState';

// font awesome component and creating a library
import { library } from '@fortawesome/fontawesome-svg-core'
import { faVirus } from '@fortawesome/free-solid-svg-icons';

// importing components
import {Navbar} from './components/Navbar';
import {Dashboard} from './components/Dashboard';

library.add(faVirus)

function App() {
  return (
    <GlobalContext>
      <Navbar />
      <Dashboard />
    </GlobalContext>
  );
}

export default App;
