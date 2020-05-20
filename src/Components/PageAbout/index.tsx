import React from 'react';
import { useStyles } from './styles';

export const PageAbout = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1>About Page</h1>
      <p>This is my about page!</p>
    </div>
  );
};
