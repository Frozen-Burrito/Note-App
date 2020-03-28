import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Navbar from '../components/Navbar';

// Pages 
import Dashboard from './Dashboard';

const Pages = () => {

    return (
        <Router>

            <Navbar />

            <Switch>
                <Route exact path="/" component={Dashboard} />
            </Switch>
        </Router>
    );
}

export default Pages;