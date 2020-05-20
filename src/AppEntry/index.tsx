import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@material-ui/core';

import { PageHome } from '../Components/PageHome';
import { PageAbout } from '../Components/PageAbout';
import { PageContact } from '../Components/PageContact';

import theme from '../MaterialUI';
import { useStyles } from './styles';
import { SimpleMenuBar } from '../Components/SimpleMenuBar';

export const AppEntry = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router basename={process.env.REACT_APP_BASE_HREF || '/'}>
          <SimpleMenuBar />
          <Switch>
            <Route exact path="/">
              <PageHome />
            </Route>
            <Route path="/about">
              <PageAbout />
            </Route>
            <Route path="/contact">
              <PageContact />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
};
