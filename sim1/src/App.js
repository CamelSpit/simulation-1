// sim1: 37E-1
import React, { Component } from 'react';
import './reset.css';
import './App.css';
import logo from './logo.png';
import {Link, Route} from 'react-router-dom';
import ShelfA from './Components/ShelfA';
import ShelfB from './Components/ShelfB';
import ShelfC from './Components/ShelfC';
import ShelfD from './Components/ShelfD';
import Routes from './Routes';

class App extends Component {
  // sim1: 36F
  render() {
    return (
      // Sim1:36G
      <body>
        <header>
          <img src={logo} alt='this is a logo'/>
          <p>SHELFIE</p>
        </header>

      {/* core: 54D */}
        <section className="shelfBar">
          {/* sim1: 42E */}
          <Link to='/A'><div>
            Shelf A
          </div></Link>
          <Link to='/B'><div>
            Shelf B
          </div></Link>
          <Link to='/C'><div>
            Shelf C
          </div></Link>
          <Link to='/D'><div>
            Shelf D
          </div></Link>
        </section>
        <div>
          <Routes/>
        </div>
      </body>

    );
  }
}

// Sim1:37E-2
export default App;
