
import React from 'react';
import { Route } from 'react-router-dom';

//components
import Home from './Home';
import Signup from './Home/components/Signup';
import Login from './Home/components/Login';
import WorkSpace from './Home/components/WorkSpace';
import Profile from './Home/components/Profile';

const AppRoutes = [
    <Route
        exact
        path='/'
        component={Home}
    />,
    <Route
        path='/signup'
        component={Signup}
    />,
    <Route
        path='/login'
        component={Login}
    />,
    <Route
        path='/profile'
        component={Profile}
    />,
    <Route
        exact
        path='/workspace'
        component={WorkSpace}
    />,
    // <Route
    //     path='/404'
    //     component={NotFound}
    // />,
    // <Route
    //     exact
    //     path='*'
    //     component={NotFound}
    // />,
];

export default AppRoutes;