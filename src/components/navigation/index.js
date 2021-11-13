import Link from 'next/link';
import { Box, AppBar, Toolbar, Typography } from '@mui/material';
import styles from './Navigation.module.css';

const Navigation = () => {

  return (
    <Box className={styles.container}>
      <AppBar position='static'>
        <Toolbar className={styles.toolbar}>
          <Typography variant='h6' className={styles.logo}>
            AWESOME FOOD STORE
          </Typography>
          <div className={styles.navlinks}>
            <div className={styles.link}>
              <Link href='/'>
                ABOUT
              </Link>
            </div>
            <div className={styles.link}>
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
