import React, {Component} from "react";
import {Switch, Route, Link} from 'react-router-dom';
import App from '../App.js';
import logo from "../logo.png";

export default class ShelfA extends Component {
    constructor(){
        super()
    }

    render(){
        return(
            <body>
                <header>
                <Link to='/'><img src={logo} alt='this is a logo'/></Link>
                <p>SHELFIE</p>
                </header>

                <div>
                    <Route path='/A' component={ShelfA}/>
                </div>
          </body>
        )
    }
}