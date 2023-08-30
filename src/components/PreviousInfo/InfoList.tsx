import InfoItem from './InfoItem';
import { Box, Stack, Typography } from '@mui/material';


function InfoList(props: any) {
    return (
        <>
            <Box sx={{ mx: '6vw', textAlign: 'center' }}>
                <Typography variant='h4' sx={{ mt: '4vh' }}>
                    {props.children}
                </Typography>
                <Stack spacing={3} direction='column' alignItems='center' marginY='2vh'>
                    {props.list && props.list.results.sort((a: any, b: any) => a.id < b.id ? 1 : -1)
                        .map((result: any, i: number) => (
                            <InfoItem id={result.id} title={result.title} key={result.id} />
                        ))}
                </Stack>
            </Box>
        </>
    )
}

export default InfoList;