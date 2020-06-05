import React, {Fragment} from 'react';
import './App.css';
import 'bulma/css/bulma.min.css'

// font awesome component and creating a library
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

// importing components
import {Navbar} from './components/Navbar';

library.add(faCheckSquare, faCoffee)

function App() {
  return (
    <Fragment>
      <Navbar />
    </Fragment>
  );
}

export default App;
