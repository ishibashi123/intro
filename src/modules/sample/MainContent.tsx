import { Box, SxProps, Theme } from "@mui/material";
import Img from "/Users/chikuwanonakami/Desktop/introducting/hp-work/src/resources/work1/images/re.jpg"
import Img2 from "/Users/chikuwanonakami/Desktop/introducting/hp-work/src/resources/work1/images/nazo.jpg"
import Imgyakei from "/Users/chikuwanonakami/Desktop/introducting/hp-work/src/resources/work1/images/yakei.png"



export const MainContent = () => {
  return (
    <Box className="MainContent" sx={sx}>
      <img width="100%" height="800px" src={Imgyakei}/>

      <Box className="yohaku" sx={sx}></Box>

      <Box className="nagatomo1" sx={sx}>
        <a id="ab">About</a>
      </Box>

      <Box className="ico" sx={sx}>
        <img width="70px" height="70px"src={Img2}/>
      </Box>

      <Box className="dekamoji" sx={sx}>
        <p>YUKI ISHIABSHI</p>
      </Box>
      
      <Box className="setumei" sx={sx}>
        <p>秒刻みのスケジュールをこなす石橋が合間を縫って予定帳を確認したところ、
          <br></br>今月できる呼吸の回数はわずか5回であった</p>
      </Box>

      <Box className="yohaku" sx={sx}></Box>
      <Box className="yohaku" sx={sx}></Box>
      <Box className="yohaku" sx={sx}></Box>
      <Box className="yohaku" sx={sx}></Box>









    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.MainContent" : {
    width: "100%",
  },
  "&.yohaku": {
    width:"100%",
    height:"100px",

  },
  "&.nagatomo1": {
    position:"absolute",
    width:"200px",
    height:"100px",
    color:"#595858",
    textDecoration:"underline",
    fontSize:"40px",
    fontFamily:"serif",
    marginLeft:"44%",
    fontWeight:"lighter",
    
  },
  "&.ico": {
    position:"absolute",
    width:"60px",
    height:"60px",
    marginLeft:"430px",
    marginTop:"170px",
  },
  "&.dekamoji": {
    position:"absolute",
    marginLeft:"520px",
    marginTop:"150px",
    fontFamily:"serif",
    fontWeight:"bold",
    fontSize:"20px",

  },
  "&.setumei": {
    position:"absolute",
    marginLeft:"520px",
    marginTop:"185px",
    fontFamily:"serif",
    fontWeight:"lighter",
    fontSize:"15px",

  },
  "&.gazo1": {
    position:"absolute",
    width:"300px",
    height:"150px",
    marginLeft:"325px",

  },
  "&.gazo2": {
    position:"absolute",
    width:"300px",
    height:"150px",
    marginLeft:"600px",

  },
  "&.gazo3": {
    position:"absolute",
    width:"300px",
    height:"150px",
    marginLeft:"875px",

  },
  "&.tit1": {
    position:"absolute",
    marginLeft:"410px",
    fontSize:"20px",
    fontFamily:"serif",
    fontWeight:"bold",
    marginTop:"50px",

  },
  "&.tit2": {
    position:"absolute",
    marginLeft:"680px",
    fontSize:"20px",
    fontFamily:"serif",
    fontWeight:"bold",
    marginTop:"50px",

  },
  "&.tit3": {
    position:"absolute",
    marginLeft:"960px",
    fontSize:"20px",
    fontFamily:"serif",
    fontWeight:"bold",
    marginTop:"50px",

  },

};


