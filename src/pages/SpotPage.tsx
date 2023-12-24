import { Box, SxProps, Theme, Drawer } from "@mui/material";
import { Header } from "../modules/sample/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Img from "/Users/chikuwanonakami/Desktop/introducting/hp-work/src/resources/work1/images/b.jpg";
import tama from "/Users/chikuwanonakami/Desktop/introducting/hp-work/src/miseimg/たまざ.png"
import "./pagestyle2.css";




export const SpotPage = () => {
  return (
    <Box className="SpotPage" sx={sx}>
      <Header />
        <Box className="jamp">

        </Box>




        <Box className="yohaku" sx={sx}></Box>
        <Box className="hakodeka2">
          <h2 className="tenmei2">シャザムもこう</h2>
          <img className="gazou2" src={tama}/>
          <p className="bunsyou2">せつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめいせつめい</p>
        </Box>


        <Box className="yohaku" sx={sx}></Box>
        <Box className="hakodeka2">
          <h2 className="tenmei2">a</h2>
          <img className="gazou2" src={tama}/>
          <p className="bunsyou2">説明</p>
        </Box>


        <Box className="yohaku" sx={sx}></Box>
        <Box className="hakodeka2">
          <h2 className="tenmei2">a</h2>
          <img className="gazou2" src={tama}/>
          <p className="bunsyou2">説明</p>
        </Box>


        <Box className="yohaku" sx={sx}></Box>
        <Box className="hakodeka2">
          <h2 className="tenmei2">a</h2>
          <img className="gazou2" src={tama}/>
          <p className="bunsyou2">説明</p>
        </Box>


        <Box className="yohaku" sx={sx}></Box>
        <Box className="hakodeka2">
          <h2 className="tenmei2">a</h2>
          <img className="gazou2" src={tama}/>
          <p className="bunsyou2">説明</p>
        </Box>


        <Box className="yohaku" sx={sx}></Box>
        <Box className="hakodeka2">
          <h2 className="tenmei2">a</h2>
          <img className="gazou2" src={tama}/>
          <p className="bunsyou2">説明</p>
        </Box>


        <Box className="yohaku" sx={sx}></Box>
        <Box className="hakodeka2">
          <h2 className="tenmei2">a</h2>
          <img className="gazou2" src={tama}/>
          <p className="bunsyou2">説明</p>
        </Box>


    </Box>
  );
};
export default SpotPage;

const sx: SxProps<Theme> = {
  "&.SpotPage": {
    width: "100%",
    height: "7200px",
    paddingTop: "55px",
  },

  "&.yohaku": {
    width:"100%",
    height:"100px",
    position:"relative",

  },
};
