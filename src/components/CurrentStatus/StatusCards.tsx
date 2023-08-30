import { useEffect, useState } from 'react';
import { fetchData } from '../../requests';
import CurrentStatusCard from './CurrentStatusCard';
import { Stack } from '@mui/material';


function StatusCards(props: any) {

    const [int, setInt] = useState<string>();
    const [qa, setQa] = useState<string>();
    const [prod, setProd] = useState<string>();

    useEffect(() => {
        const run = async () => {
            setInt(await fetchData('https://int.efrikort.cgi.se/actuator/health'));
            setQa(await fetchData('https://qa.efrikort.cgi.se/actuator/health'));
            setProd(await fetchData('https://efrikort.cgi.se/actuator/health'));
        }
        run();
        
    }, [props.time]);

    return (
        <>
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={2}
                justifyContent='center'
                alignItems='center'
                mt='2vh'
                marginX='1vw'
                textAlign='center'
            >
                <CurrentStatusCard name='INT' status={int} ></CurrentStatusCard>
                <CurrentStatusCard name='Produktion' status={prod} ></CurrentStatusCard>
                <CurrentStatusCard name='QA' status={qa} ></CurrentStatusCard>
            </Stack>
        </>
    );
}

export default StatusCards;