import React from 'react';
import { useStyles } from './styles';

export const Template = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1>Template Component</h1>
      <p>This is my template page!</p>
    </div>
  );
};
