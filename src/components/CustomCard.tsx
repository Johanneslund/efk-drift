import { Box, Card, CardContent, Typography } from '@mui/material';
import '../App.css';
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function CustomCard(props: any) {

  const status = props.status === "UP" ? true : false;

  return (
    <>
      <Card sx={{ width: props.size === "large" ? 600 : 400, backgroundColor: props.status === "UP" ? '#60b987' : '#FF1540' }}>
        <CardContent>
          <Typography align='center' variant='h3' gutterBottom>
            {props.name}
          </Typography>
          <Typography align='center' variant="h4" component="div">
            {status ? " Tjänsten är igång" : " Tjänsten är nere"}
          </Typography>
          <Box display="flex"
            justifyContent="center"
            alignItems="center">
            {status ? <CheckCircleIcon sx={{ width: "8vh", height: "8vh", }} /> : <CancelIcon sx={{ width: "8vh", height: "8vh" }} />}
          </Box>
        </CardContent>
      </Card>
    </>
  );
}

export default CustomCard;