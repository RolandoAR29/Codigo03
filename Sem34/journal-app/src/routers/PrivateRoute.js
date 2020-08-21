import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({
    isAtuthenticated,
    component: Component,
    ...rest
}) => {

    return (
        <Route { ...rest }
            component={ (props) => (
                ( isAtuthenticated )
                    ? ( <Component { ...props } />)
                    : ( <Redirect to="/auth/login" /> )
            )}
        />
    )
}

PrivateRoute.propTypes = {
    isAtuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}