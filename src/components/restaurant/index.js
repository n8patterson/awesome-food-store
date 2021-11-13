import {
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from '@mui/material';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import styles from './Restaurant.module.css';

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
        <div className={styles.closeButton}>
          <IconButton
            aria-label='close'
            onClick={onClick}
          >
            <CloseIcon />
          </IconButton>
        </div>
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
              width='300'
              height='300'
            />
            </div>
            <div className={styles.description}>
              {selectedRestaurantDescription}
            </div>
            {selectedRestaurantUrl ? (
              <a href={selectedRestaurantUrl}>{selectedRestaurantUrl}</a>
            ) : (null)}
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default Restaurant;
