import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../views/Home';
import NotFound from '../shared/NotFound/404';

function Router() {
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="*">
                <NotFound />
            </Route>
        </Switch>
        </BrowserRouter>
    );
}

export default Router;