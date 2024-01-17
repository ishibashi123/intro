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

        <a className="setumei2">武蔵小杉駅周辺にはショッピングや自然、歴史・文化<br></br>
        など多岐にわたる魅力的なスポットが点在していますが、<br></br>
        特に夜の雰囲気もお見逃しなく。<br></br>
        夜になるとライトアップにより幻想的な雰囲気が漂います。<br></br>
        ディナーを楽しんだ後は、周辺の居酒屋やバーも賑やかで、<br></br>
        地元の雰囲気を存分に味わえることでしょう。<br></br>
        武蔵小杉の夜の顔も是非お楽しみください。



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


