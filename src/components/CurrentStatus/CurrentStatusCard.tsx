import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, Card, CardContent, Typography } from '@mui/material';

function CurrentStatusCard(props: any) {

  const status = props.status === 'UP' ? true : false;

  return (
    <>
      <Card
        sx={{
          border: '0.2rem solid',
          borderRadius: '0.75rem',
          borderColor: props.status === 'UP' ? '#60b987' : '#e9002c',
          minWidth: '10vw'
        }}>
        <CardContent>
          <Typography align='center' variant='h4' gutterBottom>
            {props.name}
          </Typography>
          <Box>
            {status ?
              <CheckCircleIcon sx={{ width: '8rem', height: '8rem', color: '#60b987' }} /> :
              <CancelIcon sx={{ width: '5rem', height: '5rem', color: '#e9002c' }} />}
          </Box>
          <Typography align='center' variant='h6' mt='1vh'>
            {status ? 'Tjänsten är i full drift.' : 'Störningar i tjänsten.'}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default CurrentStatusCard;