import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";

import { PrivateRoute } from './PrivateRoute';
import { AuthContext } from '../auth/AuthContext';
import { PublicRoute } from './PublicRoute';

import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRouter } from './DashboardRouter';

export const AppRouter = () => {

    const { user } = useContext(AuthContext);

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        exact
                        path="/login"
                        component={ LoginScreen }
                        isAtuthenticated={ user.logged }
                    />

                    <PrivateRoute
                        path="/"
                        component={ DashboardRouter }
                        isAtuthenticated={ user.logged }
                    />
                    
                    {/* <Route path="/" component={ DashboardRouter } /> */}
                </Switch>
            </div>
        </Router>
    )
}
