import React from 'react';
import { useStyles } from './styles';

export const TextExplore = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <span className={classes.glowText}>This is some text</span>
    </div>
  );
};
