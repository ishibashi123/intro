import { Box, SxProps, Theme } from "@mui/material";
import {Link} from "react-router-dom"
import Img from "/Users/chikuwanonakami/Desktop/introducting/hp-work/src/resources/work1/images/re.jpg"
import Img2 from "/Users/chikuwanonakami/Desktop/introducting/hp-work/src/resources/work1/images/nazo.jpg"
import Imgyakei from "/Users/chikuwanonakami/Desktop/introducting/hp-work/src/resources/work1/images/yakei.png"
import mesi from "/Users/chikuwanonakami/Desktop/introducting/hp-work/src/resources/work1/images/gourment2.png"
import view from "/Users/chikuwanonakami/Desktop/introducting/hp-work/src/resources/work1/images/view.png"

import './style.css';




export const MainContent = () => {
  return (
    <Box className="MainContent" sx={sx}>
      <img className="dekagazou"src={Imgyakei}/>
      <p className="lay">武蔵小杉紹介サイト</p>

      <Box className="yohaku" sx={sx}></Box>

      <Box className="nagatomo1" sx={sx}>
        <a id="ab">About</a>
      </Box>

      <Box className="gotu" sx={sx}>

        <Link to="/gourmet" replace className="midashi1">gourmet</Link>

        <a className="setumei1">武蔵小杉にある様々な魅力的なチェーン店が<br></br>
        数多く存在しています。その中でも、<br></br>
        美味しい料理や楽しい雰囲気が特徴のお店を<br></br>
        ご紹介いたします。
        </a>

        <a className="setumei2">武蔵小杉の美しい絶景をご紹介します。<br></br>
        武蔵小杉駅周辺の高層ビル展望台からは、<br></br>
        市街地や周辺の風景が一望でき、特に夕暮れ時には<br></br>
        夕日が街を照らし出す幻想的な光景が広がります<br></br>
        ぜひ、武蔵小杉の素晴らしい景色をお楽しみください



        </a>

        <Link to="/spot" replace className="midashi2">spot</Link>
        <img className="mesi1" src={mesi}/>
        <img className="view" src={view}/>

      </Box>






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
    position:"relative",

  },
  "&.nagatomo1": {
    position:"absolute",
    width:"80%",
    marginLeft:"10%",
    height:"100px",
    color:"#595858",
    top:"750px",
    fontSize:"40px",
    fontFamily:"serif",
    fontWeight:"lighter",
    
  },

 



};


