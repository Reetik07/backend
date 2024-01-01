// material-ui
import { Box, useMediaQuery } from '@mui/material';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return <>{matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}</>;
};

export default HeaderContent;
