import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import lightLogo from "../assets/EFK-full-logo-light.png";



export function Header(){

    return(
        <AppBar
        position="relative"
        color="inherit"
        style={{ display: "flex" }}
        enableColorOnDark
        elevation={0}
        variant="outlined"
      >
        <Toolbar disableGutters >
          <Box
            sx={{
              flexGrow: 1,
              textAlign: "right",
              display: "flex",
              flexDirection: "row",
              marginRight: "1rem"
            }}
          >
            <Box
              component="img"
              sx={{
                marginTop: "1vh",
                marginBottom: "1vh",
                width: "250px",
                height: "63px"
  
              }}
              alt="efk-logo"
              src={lightLogo}
            />
            <Box sx={{ flexGrow: 10, ml: "10%" }}>
              {/* <SystemStatus /> */}
            </Box>
            <Typography
              variant="body1"
              component="div"
              sx={{ flexShrink: 1, flexGrow: 1 }}
            >
              {/* <UserInfo /> */}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    )
}