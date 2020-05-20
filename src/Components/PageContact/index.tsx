import React from 'react';
import { useStyles } from './styles';

export const PageContact = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1>Contact Page</h1>
      <p>This is my contact page!</p>
    </div>
  );
};
