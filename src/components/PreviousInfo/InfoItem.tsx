import { useEffect, useState } from 'react';
import { getPageDetails } from '../../requests';
import parse from 'html-react-parser';
import { Box, Typography, Stack, AccordionSummary, AccordionDetails, Accordion } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function InfoItem(props: any) {

    const [object, setObject] = useState<any>();

    useEffect(() => {
        const run = async () => {
            setObject(await getPageDetails(props.id));
        }
        run();
    }, []);

    function Row(props: { object: any }) {
        return (
            <>
                <Accordion
                    TransitionProps={{ unmountOnExit: true }}
                    sx={{ width: '50vw' }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='summary-content'
                        id='summary-header'
                    >
                        <Typography>{object.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{ maxHeight: '400px', overflowY: 'auto' }}
                    >
                        <Box sx={{ textAlign: 'start' }}>
                            {parse(object.body.storage.value)}
                        </Box>
                    </AccordionDetails>
                </Accordion>
            </>
        );
    }

    return (
        <Stack direction='row' justifyContent='center'>
            <Box maxWidth="80vw" maxHeight='80vh'
                sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
            >
                {object && <Row object={object} />}
            </Box>
        </Stack>
    )
} 

export default InfoItem;