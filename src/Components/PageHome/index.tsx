import React from 'react';
import { useStyles } from './styles';
import { TextExplore } from '../TextExplore';

export const PageHome = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1>Home Page</h1>
      <p>This is my home page!</p>

      <TextExplore />
    </div>
  );
};
