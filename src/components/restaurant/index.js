import {
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from '@mui/material';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import styles from '../../styles/Home.module.css';

const Restaurant = ({
  onClick,
  open,
  selectedRestaurantName,
  selectedRestaurantImage,
  selectedRestaurantDescription,
  selectedRestaurantUrl,
}) => {
  return (
    <Dialog open={open}>
      <DialogTitle className={styles.title}>
        {selectedRestaurantName}
        <IconButton
          aria-label='close'
          s
          onClick={onClick}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 2, md: 2 }}
          justifyContent='center'
          alignItems='center'
        >
          <Grid
            item
            xs={2}
          >
            <div className={styles.image}>
            <Image
              src={selectedRestaurantImage}
              alt=''
              width='200'
              height='200'
            />
            </div>
            <div className={styles.description}>
              {selectedRestaurantDescription}
            </div>
            {selectedRestaurantUrl}
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default Restaurant;
