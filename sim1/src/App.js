import React, { Component } from 'react';
import './reset.css';
import './App.css';
import logo from './logo.png';

class App extends Component {
  render() {
    return (
      <body>
        <header>
          <img src={logo} alt='this is a logo'/>
          <p>SHELFIE</p>
        </header>

        <section className="shelfBar">
          <div>
            Shelf A
          </div>
          <div>
            Shelf B
          </div>
          <div>
            Shelf C
          </div>
          <div>
            Shelf D
          </div>
        </section>

      </body>

    );
  }
}

export default App;
