import { Box, SxProps, Theme } from "@mui/material";
import Link from '@mui/material/Link';
export const Header = () => {
  return (
    <Box className="Header" sx={sx}>

      <Box className="probox" sx={sx}>
        <Link underline="none" href="#"color="inherit">{'Profile'}</Link>
      </Box>

      <Box className="deka" sx={sx}><Link underline="none" color="inherit" href="">About</Link>　　
      <Link underline="none" href="" color="inherit">Bicycle</Link></Box>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Header" : {
    position:"fixed",
    width: "100%",
    height:"50px",
    backgroundColor:'#ebebeb',
    top:"0",
    margin:"0",
    padding:"4px",
    zIndex:"9999",
    
  },

  "&.probox": {
    backgroundColor:"#575757",
    position:"absolute",
    width:"100px",
    height:"40px",
    marginLeft:"300px",
    top:"10px",
    color:"white",
    fontSize:"30px",
    fontFamily:"monospace",
    textDecoration:"none",
  },


  "&.": {

  },

  "&.deka": {
    position:"absolute",
    left:"1000px",
    top:"15px",
    fontFamily:"serif"


  },


};
