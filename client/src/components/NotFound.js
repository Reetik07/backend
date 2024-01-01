// 404Page.js
import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';
import background from '../assets/images/space.jpg';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center'
  },
  errorText: {
    fontSize: '15em',
    fontWeight: '1000',
    color: 'transparent',
    marginBottom: '16px'
  },
  message: {
    fontSize: '1.5rem',
    marginBottom: '16px'
  },
  backButton: {
    marginTop: '16px'
  }
};

const NotFound = () => {
  return (
    <div style={styles.root}>
      <div style={{ backgroundImage: `url(${background})`, backgroundClip: 'text', fontFamily: 'Erica One' }}>
        <Typography variant="h1" style={styles.errorText}>
          404
        </Typography>
      </div>
      <Typography variant="h5" style={styles.message}>
        {`Oops! The page you're looking for could not be found.`}
      </Typography>
      <Button variant="contained" color="primary" component={RouterLink} to={'/'} style={styles.backButton}>
        Go Back Home
      </Button>
    </div>
  );
};

export default NotFound;
