import React, {useContext} from 'react';
import { Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import {ThemeContext} from './contexts/ThemeContext';
import Theme from './global/theme';
import AppRoutes from './routes';

import './App.scss';
import NoteContextProvider from './contexts/NoteContext';

function App() {
  const { backdrop, toggleBackdrop } = useContext(ThemeContext);
  return (
      <div className="App" theme='dark'>
          <ThemeProvider theme={Theme}>
            <NoteContextProvider>
              <Switch>
                {AppRoutes}
              </Switch>
            </NoteContextProvider>
          </ThemeProvider>
          <div className={backdrop && "backdrop"} onClick={toggleBackdrop} />
      </div>
  );
}

export default App;
