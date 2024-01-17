import { Box, SxProps, Theme, Drawer } from "@mui/material";
import { Header } from "../modules/sample/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Img from "/Users/chikuwanonakami/Desktop/introducting/hp-work/src/resources/work1/images/b.jpg";
import tama from "/Users/chikuwanonakami/Desktop/introducting/hp-work/src/miseimg/たまざ.png"
import "./pagestyle2.css";
import  gran from "/Users/chikuwanonakami/Desktop/introducting/hp-work/src/miseimg/gran.png"
import  hiyoshipark from "/Users/chikuwanonakami/Desktop/introducting/hp-work/src/miseimg/hiyoshipark.png"
import  ise from "/Users/chikuwanonakami/Desktop/introducting/hp-work/src/miseimg/ise.png"
import  tamadaipark from "/Users/chikuwanonakami/Desktop/introducting/hp-work/src/miseimg/tamadaipark.png"
import  tamashrine from "/Users/chikuwanonakami/Desktop/introducting/hp-work/src/miseimg/tamashrine .png"
import  squ from "/Users/chikuwanonakami/Desktop/introducting/hp-work/src/miseimg/square.png"
import  tairyou from "/Users/chikuwanonakami/Desktop/introducting/hp-work/src/miseimg/tairyou.png"








export const SpotPage = () => {
  return (
    <Box className="SpotPage" sx={sx}>
      <Header />
        <Box className="jamp">

        </Box>




        <Box className="yohaku" sx={sx}></Box>
        <Box className="hakodeka2">
          <h2 className="tenmei2">グランツリー武蔵小杉　屋上庭園</h2>
          <img className="gazou2" src={gran}/>
          <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25961.478884726926!2d139.62224487431635!3d35.5738288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f57cbaff6489%3A0xab4dfd251c63498e!2z44Kw44Op44Oz44OE44Oq44O85q2m6JS15bCP5p2J!5e0!3m2!1sja!2sjp!4v1703479843467!5m2!1sja!2sjp"></iframe>
          <p className="bunsyou2">グランツリー武蔵小杉には、約160店舗が集結した武蔵小杉最大のショッピングモールです。このモールの屋上に屋上庭園があります。高層マンションに囲まれた美しい空間ですが、現在は開園時間からすると夜間の利用は難しくなっています。</p>
        </Box>


        <Box className="yohaku" sx={sx}></Box>
        <Box className="hakodeka2">
          <h2 className="tenmei2">日吉公園</h2>
          <img className="gazou2" src={hiyoshipark}/>
          <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51932.52962390882!2d139.57097744863282!3d35.55905860000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185f7922bf51e9%3A0x29781a7e4d698cf4!2z5pel5ZCJ5YWs5ZyS!5e0!3m2!1sja!2sjp!4v1703479942172!5m2!1sja!2sjp"></iframe>
          <p className="bunsyou2">日吉駅もしくは元住吉駅から徒歩12分のところにある展望公園。日吉でも知名度が低い公園で駐車スペースもないため穴場となっています。</p>
        </Box>


        <Box className="yohaku" sx={sx}></Box>
        <Box className="hakodeka2">
          <h2 className="tenmei2">井田伊勢台公園</h2>
          <img className="gazou2" src={ise}/>
          <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3245.5998000479426!2d139.63268058440258!3d35.563584765859915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f5890275b8c3%3A0xa4000be755c612ad!2z5LqV55Sw5LyK5Yui5Y-w5YWs5ZyS!5e0!3m2!1sja!2sjp!4v1703480001039!5m2!1sja!2sjp"></iframe>
          <p className="bunsyou2">武蔵小杉の高層マンション群の左手に東京スカイツリーと東京タワーを眺められる公園。規模が小さく、地元以外で知っている方は皆無と思われるようなスポットです。</p>
        </Box>


        <Box className="yohaku" sx={sx}></Box>
        <Box className="hakodeka2">
          <h2 className="tenmei2">多摩川台公園</h2>
          <img className="gazou2" src={tamadaipark}/>
          <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1622.247871906379!2d139.66401963876052!3d35.590836074311646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f56b4509a4a3%3A0x6755bc58eaa04d0!2z5aSa5pGp5bed5Y-w5YWs5ZyS!5e0!3m2!1sja!2sjp!4v1703479898782!5m2!1sja!2sjp"></iframe>
          <p className="bunsyou2">多摩川浅間神社から徒歩7分、多摩川駅から徒歩5分ほどの場所で、多摩川沿いに武蔵小杉の高層マンション群を眺められます。公園内には2ヶ所の眺望ポイントがあり、上の写真は多摩川台古墳群第7号墳付近からの眺望です。</p>
        </Box>


        <Box className="yohaku" sx={sx}></Box>
        <Box className="hakodeka2">
          <h2 className="tenmei2">多摩川浅間神社</h2>
          <img className="gazou2" src={tamashrine}/>
          <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3244.629451901079!2d139.66614047569618!3d35.58753673511542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f56a28feaf27%3A0xe848c5bb0a0c20a9!2z5aSa5pGp5bed5rWF6ZaT56We56S-!5e0!3m2!1sja!2sjp!4v1703479759147!5m2!1sja!2sjp"></iframe>
          <p className="bunsyou2">武蔵小杉の夜景を眺めるベストビューが多摩川浅間神社。映画「シン・ゴジラ」のロケ地でもありファンの聖地にもなっています。武蔵小杉の高層マンション群と丸子橋の競演が美しいです。</p>
        </Box>


        <Box className="yohaku" sx={sx}></Box>
        <Box className="hakodeka2">
          <h2 className="tenmei2">武蔵小杉東急スクエア『展望デッキ』</h2>
          <img className="gazou2" src={squ}/>
          <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12980.400214663374!2d139.64022028715814!3d35.5759222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f57b3921cde7%3A0xa9e83577915c3c48!2z5q2m6JS15bCP5p2J5p2x5oCl44K544Kv44Ko44Ki!5e0!3m2!1sja!2sjp!4v1703480827824!5m2!1sja!2sjp"></iframe>
          <p className="bunsyou2">東急9000系の車両側部が取り付けられています。武蔵小杉駅直通の展望テラス。電車好きのお子様にいかがでしょうか。東急横浜高速、東京メトロ、東武、西武、東京交通局、埼玉高速の七社局の車両が見ることが出来ます</p>
        </Box>


        <Box className="yohaku" sx={sx}></Box>
        <Box className="hakodeka2">
          <h2 className="tenmei2">京浜伏見稲荷神社</h2>
          <img className="gazou2" src={tairyou}/>
          <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3244.9774403440356!2d139.65957417569592!3d35.57894863558603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f5656c83362b%3A0xa1686a8409d4def3!2z5Lqs5r-x5LyP6KaL56iy6I2356We56S-!5e0!3m2!1sja!2sjp!4v1703481689401!5m2!1sja!2sjp"></iframe>
          <p className="bunsyou2">中には小さな鳥居があるほか、さまざまなポーズをした108体の神狐像、富士山の岩を使用した富士山浅間神社まであり、一度にたくさんの御利益にあやかれそうなスポットです。</p>
        </Box>


    </Box>
  );
};
export default SpotPage;

const sx: SxProps<Theme> = {
  "&.SpotPage": {
    width: "100%",
    height: "5000px",
    paddingTop: "55px",
  },

  "&.yohaku": {
    width:"100%",
    height:"100px",
    position:"relative",

  },
};
