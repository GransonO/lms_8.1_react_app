import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import HomePage from './app/components/HomePage';
import About from './app/components/About';
import Products from './app/components/Product';

import Routing from './app/routes';

render( 
    <BrowserRouter>
        <Routing />
    </BrowserRouter>,
    document.getElementById('root'));