import React from 'react';

import { useStyles } from './styles';
import { Link } from 'react-router-dom';

export const SimpleMenuBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};
