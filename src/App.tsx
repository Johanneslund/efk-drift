import { Box, Stack, Typography } from '@mui/material';
import { Fragment, useEffect, useState } from 'react';
import './App.css';
import CustomCard from './components/CustomCard';
import { Header } from './components/Header';
import { fetchData, fetchIdpData, getList } from './requests';
import { getFormattedDate } from './util';
import { News } from './components/News';


function App() {

  const [int, setInt] = useState<string>();
  const [qa, setQa] = useState<string>();
  const [prod, setProd] = useState<string>();
  const [idp, setIdp] = useState<string>();
  const [dateTime, setDateTime] = useState<string>();
  const [time, setTime] = useState(0);
  const [newsList, setNewsList] = useState<any>();

  useEffect(() => {
    const run = async () => {
      setInt(await fetchData("https://int.efrikort.cgi.se/actuator/health"));
      // setQa(await fetchData("https://qa.efrikort.cgi.se/actuator/health"));
      // setProd(await fetchData("https://efrikort.cgi.se/actuator/health"));
      setIdp(await fetchIdpData("https://idp.inera.se/actuator/info"));
      setQa("DOWN");
      setProd("UP");
      setDateTime(getFormattedDate);
      setNewsList(await getList());
    }
    run();

    const timer = setInterval(() => {
      setTime(time + 1)
    }, 10000000);
    return () => {
      window.clearInterval(timer);
    }
  }, [time]);

  return (
    <>
      <Header />
      <Fragment>
        <Box >
          <Typography align='center' variant='h2' sx={{ mt: "2vh" }}>
            Driftinformation
          </Typography>
          <Typography sx={{ mt: "2vh" }} align='center'>
            Senast uppdaterad {dateTime}
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="35vh">
          <Stack>
            <Stack direction="row" spacing={3}>
              <CustomCard name="INT" status={int} size="small"></CustomCard>
              <CustomCard name="Produktion" status={prod} size="large"></CustomCard>
              <CustomCard name="QA" status={qa} size="small"></CustomCard>
            </Stack>
          </Stack>
        </Box>
        {/* <Box display="flex"
          justifyContent="center"
          alignItems="center">
          <CustomCard name="IDP" status={idp} size="small"></CustomCard>
        </Box> */}
{/* 
        <Typography align='center' variant='h2' sx={{ mt: "2vh" }}>
          Driftinformation
        </Typography>
        <Box>
          <Stack direction="row" spacing={5}>
            <Stack>
              {newsList && newsList.results.sort((a: any, b: any) => a.id < b.id ? 1 : -1).map((result: any) => (
                <>
                  <News id={result.id} title={result.title} />
                </>
              ))}
            </Stack>
            <Stack>
              {newsList && newsList.results.sort((a: any, b: any) => a.id < b.id ? 1 : -1).map((result: any) => (
                <>
                  <Typography variant="h3">Nyheter</Typography>
                  <News id={result.id} title={result.title} />
                </>
              ))}
            </Stack>
          </Stack>
        </Box> */}

      </Fragment>

    </>
  );
}

export default App;