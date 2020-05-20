import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: 'orange',
      padding: 30
    },
    glowText: {
      //
      color: 'white',
      fontSize: 20,
      textShadow: 'white 10px 10px 10px'
    }
  }),
  { name: 'app' }
);
