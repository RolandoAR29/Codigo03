import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({
    isAtuthenticated,
    component: Component,
    ...rest
}) => {

    localStorage.setItem('lastPath', rest.location.pathname);

    return (
        <Route { ...rest }
            component={ (props) => (
                ( isAtuthenticated )
                    ? ( <Component { ...props } />)
                    : ( <Redirect to="/login" /> )
            )}
        />
    )
}

PrivateRoute.propTypes = {
    isAtuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}