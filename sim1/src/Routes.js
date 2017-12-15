import React from 'react';
import {Route, Switch} from "react-router-dom";
import ShelfA from './Components/ShelfA';
import ShelfB from './Components/ShelfB';
import ShelfC from './Components/ShelfC';
import ShelfD from './Components/ShelfD';
import App from './App';


export default function Routes (){
    return (
        <div>
            {/* Sim1:42G, 42F */}

            <Switch>
                <Route path='/A' component={ShelfA}/>
                <Route path='/B' component={ShelfB}/>
                <Route path='/C' component={ShelfC}/>
                <Route path='/D' component={ShelfD}/>
                <Route exact path='/' component={App}/>
            </Switch>
        </div>
    )
}