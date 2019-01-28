import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './components/HomePage';
import Products from './components/Product';
import About from './components/About';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/product' component={Products}/>
            <Route exact path='/about' component={About}/>
        </Switch>
    );
} 

export default Routes;