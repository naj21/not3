import React, { useState } from 'react';
import { Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Theme from './global/theme';
import AppRoutes from './routes';

import './App.scss';
import Profile from './Home/components/Profile';

function App() {
  return (
      <div className="App">
        <ThemeProvider theme={Theme}>
          <Switch>
            {AppRoutes}
          </Switch>
        {/* <div className="backdrop">
          <Profile />
        </div> */}
        </ThemeProvider>
      </div>
  );
}

export default App;
