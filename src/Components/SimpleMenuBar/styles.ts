import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    container: {
      width: '100%',
      height: 60,
      backgroundColor: theme.palette.primary.main,
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      '& > ul': {
        '& > li': {
          display: 'inline-block',
          marginRight: 10,
          '& > a ': {
            textDecoration: 'none',
            color: theme.palette.primary.contrastText,
            fontSize: 16
          }
        }
      }
    }
  }),
  { name: 'simple-menu-bar' }
);
