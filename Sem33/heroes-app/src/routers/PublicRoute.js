import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({
    isAtuthenticated,
    component: Component,
    ...rest
}) => {
    return (
        <Route { ...rest }
            component={ (props) => (
                ( !isAtuthenticated )
                    ? ( <Component { ...props } />)
                    : ( <Redirect to="/" /> )
            )}
        />
    )
}

PublicRoute.propTypes = {
    isAtuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}