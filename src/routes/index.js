import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../components/App';

function Router() {
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <App />
            </Route>
        </Switch>
        </BrowserRouter>
    );
}

export default Router;