
import React from 'react';
import { Route } from 'react-router-dom';

//components
import Office from './components/Office';
import Note from './components/Note';

const AppRoutes = [
    <Route
        path='/workspace'
        component={Office}
    />,
    <Route
        path='/workspace/note'
        component={Note}
    />,
];

export default AppRoutes;