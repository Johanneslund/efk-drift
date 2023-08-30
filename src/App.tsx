import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { getFormattedDate } from './util';
import StatusCards from './components/CurrentStatus/StatusCards';
import PreviousStatusInfo from './components/PreviousInfo/PreviousStatusInfo';
import { Box, Typography } from '@mui/material';


function App() {
  const [dateTime, setDateTime] = useState<string>();
  const [time, setTime] = useState(0);

  useEffect(() => {
    const run = async () => { 
      setDateTime(getFormattedDate);
    }
    run();

    const timer = setInterval(() => {
      setTime(time + 1)
    }, 60000);  
    
    return () => {
      window.clearInterval(timer);
    }
  }, [time]);

  return (
    <>
      <Header />

      <Box sx={{ mx: '6vw', textAlign: 'center' }}>
        <Typography variant='h2' sx={{ mt: '4vh' }}>
          Driftinformation
        </Typography>
        <Typography sx={{ mb: '6vh' }}>
          Senast uppdaterad {dateTime}
        </Typography>
      </Box>

      <StatusCards time={time} />

      <PreviousStatusInfo time={time} />
    </>
  );
}

export default App;