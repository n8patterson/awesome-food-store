import Link from 'next/link';
import { Box, AppBar, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  navlinks: {
    display: 'flex',
  },
  logo: {
    flexGrow: '1',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    marginLeft: 50,
  },
}));

const Navigation = () => {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar className={classes.toolbar}>
          <Typography variant='h6' className={classes.logo}>
            AWESOME FOOD STORE
          </Typography>
          <div className={classes.navlinks}>
            <div className={classes.link}>
              <Link href='/'>
                ABOUT
              </Link>
            </div>
            <div className={classes.link}>
              <Link href='/restaurants'>
                STORE
              </Link>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
