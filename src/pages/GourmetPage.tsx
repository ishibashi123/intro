import { Box, SxProps, Theme, Drawer } from "@mui/material";
import { Header } from "../modules/sample/Header";
import { MainContent } from "../modules/sample/MainContent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Img from "/Users/chikuwanonakami/Desktop/introducting/hp-work/src/resources/work1/images/b.jpg";
import kamaage from "/Users/chikuwanonakami/Desktop/introducting/hp-work/src/miseimg/kamaage.png"
import karayama from "/Users/chikuwanonakami/Desktop/introducting/hp-work/src/miseimg/karayama.png"
import matsuya from "/Users/chikuwanonakami/Desktop/introducting/hp-work/src/miseimg/matsuya.png"
import yosinoya from "/Users/chikuwanonakami/Desktop/introducting/hp-work/src/miseimg/yosinoya.png"
import makudo from "/Users/chikuwanonakami/Desktop/introducting/hp-work/src/miseimg/makudo.png"
import sub from "/Users/chikuwanonakami/Desktop/introducting/hp-work/src/miseimg/sub.png"
import gasuto from "/Users/chikuwanonakami/Desktop/introducting/hp-work/src/miseimg/gasuto.png"
import sukiya from "/Users/chikuwanonakami/Desktop/introducting/hp-work/src/miseimg/sukiya.png"
import saize from "/Users/chikuwanonakami/Desktop/introducting/hp-work/src/miseimg/saize.png"
import mos from "/Users/chikuwanonakami/Desktop/introducting/hp-work/src/miseimg/mos.png"
import './pagestyle.css';



export const GourmetPage = () => {
  return (
    <Box className="GourmetPage" sx={sx}>
      <Header />
        <Box className="jamp">

        </Box>




        <Box className="yohaku" sx={sx}></Box>
        <Box className="hakodeka">
          <h2 className="tenmei">丸亀製麺</h2>
          <img className="gazou" src={kamaage}/>
          <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51922.380439409346!2d139.58244784863285!3d35.5747195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f537de1556d5%3A0x4f0d9c57dc91860c!2z5Li45LqA6KO96bq65q2m6JS15bCP5p2J!5e0!3m2!1sja!2sjp!4v1703403125582!5m2!1sja!2sjp"></iframe>
          <p className="bunsyou">東急武蔵小杉駅徒歩1分で駅前の道路沿いに位置しています。店内はカウンター中心に約50席あり、厨房を含めて広いです。周辺は人通りの最も多い場所で多くの店舗が並んでいますが、丸亀製麺は絶えず多くの人が入っています。</p>
        </Box>



        <Box className="yohaku" sx={sx}></Box>
        <Box className="hakodeka">
          <h2 className="tenmei">からやま</h2>
          <img className="gazou" src={karayama}/>
          <iframe className="map "src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51922.29902314375!2d139.58244780249413!3d35.5748451067812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f5c39e0ba1e1%3A0x283cfe25c509a07a!2z44GL44KJ44KE44G-IOatpuiUteWwj-adieW6lw!5e0!3m2!1sja!2sjp!4v1703403586136!5m2!1sja!2sjp"></iframe>
          <p className="bunsyou">東急武蔵小杉駅から徒歩2分で駅と直結している店舗です。東急スクエアの店舗となります。店内はカウンター席のみで、イートインとテイクアウト用には並ぶ列が分かれています。</p>
        </Box>


        <Box className="yohaku" sx={sx}></Box>
        <Box className="hakodeka">
          <h2 className="tenmei">松屋</h2>
          <img className="gazou" src={matsuya}/>
          <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51922.21760678413!2d139.58244775635555!3d35.57497071332247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f57ad1d5ab87%3A0xfc77c20d4149a24!2z5p2-5bGLIOatpuiUteWwj-adieW6lw!5e0!3m2!1sja!2sjp!4v1703403908050!5m2!1sja!2sjp"></iframe>
          <p className="bunsyou">JR南武線武蔵小杉駅北口から徒歩3分にロータリの交差点を新丸子方面に渡って、すぐに看板が見えます。通常、5時から深夜2時まで営業ですが、土曜だけは24時間営業をしています。

</p>
        </Box>


        <Box className="yohaku" sx={sx}></Box>
        <Box className="hakodeka">
          <h2 className="tenmei">サイゼリア</h2>
          <img className="gazou" src={saize}/>
          <iframe className="map"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51921.87323161524!2d139.58191304863283!3d35.575502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f57ba8576d17%3A0x6e1bc7d1c471826e!2z44K144Kk44K844Oq44OkIOOCpOODiOODvOODqOODvOOCq-ODieODvOatpuiUteWwj-adiemnheWJjeW6lw!5e0!3m2!1sja!2sjp!4v1703405453116!5m2!1sja!2sjp"></iframe>
          <p className="bunsyou">イトーヨーカドー武蔵小杉駅前店の2階にある店舗です。ショッピングモールの中にあるので、家族連れや買い物に来た主婦の方も多く来店されている印象です。広い店内にテーブル席が中心ですが、一人席も用意されていて、仕事中のランチなどでも入りやすい仕様になっています。</p>
        </Box>


        <Box className="yohaku" sx={sx}></Box>
        <Box className="hakodeka">
          <h2 className="tenmei">吉野家</h2>
          <img className="gazou" src={yosinoya}/>
          <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51922.054773782846!2d139.58244766407856!3d35.575221925685234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f564d64e3ed5%3A0xd64d7ffab221919e!2z5ZCJ6YeO5a62IOatpuiUteWwj-adieW6lw!5e0!3m2!1sja!2sjp!4v1703404176007!5m2!1sja!2sjp"></iframe>
          <p className="bunsyou">東急武蔵小杉駅から徒歩3分ほどにある武蔵小杉南口店です。商店街の中に位置しており、人通りも多い場所です。店内はカウンターで注文し、呼び出し後に座席に持っていくセルフ方式を取り入れた店舗のになっています。</p>
        </Box>



        <Box className="yohaku" sx={sx}></Box>
        <Box className="hakodeka">
          <h2 className="tenmei">マクドナルド</h2>
          <img className="gazou" src={makudo}/>
          <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51921.97335714117!2d139.58244761794012!3d35.57534753150674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f5e412e8f6e3%3A0xb9e3d9b6b26b0d34!2z44Oe44Kv44OJ44OK44Or44OJIOatpuiUteWwj-adieadseaApeOCueOCr-OCqOOCouW6lw!5e0!3m2!1sja!2sjp!4v1703404469733!5m2!1sja!2sjp"></iframe>
          <p className="bunsyou">東急武蔵小杉駅に直結した店舗で改札を出てすぐに看板が見えます。東急スクエア内というで屋根もありますので、雨の日でも濡れずに行けるのは嬉しいですね。約40席程度でカウンターとテーブル席があります。</p>
        </Box>


        <Box className="yohaku" sx={sx}></Box>
        <Box className="hakodeka">
          <h2 className="tenmei">subway</h2>
          <img className="gazou" src={sub}/>
          <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51921.79181476394!2d139.58191300249456!3d35.57562760528651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f5dc519dde4b%3A0x4de9abd3c01c7040!2z44K144OW44Km44Kn44KkIOOCsOODqeODs-ODhOODquODvOatpuiUteWwj-adieW6lw!5e0!3m2!1sja!2sjp!4v1703405687475!5m2!1sja!2sjp"></iframe>
          <p className="bunsyou">6坪という限られたスペースであるため、従来とは異なり、製造ラインをレジの後方に下げ、レジ周りのスペースを多くとっています。支払いは先払い方式で、レジに近い位置にピックアップ棚を設置し、完成後に呼び出しがあり列に並ばなくても受け取りが可能です。</p>
        </Box>


        <Box className="yohaku" sx={sx}></Box>
        <Box className="hakodeka">
          <h2 className="tenmei">すき家</h2>
          <img className="gazou" src={sukiya}/>
          <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51921.71039781865!2d139.58191295635623!3d35.57575321033308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f59d7990f633%3A0xf5820c5a1a534919!2z44GZ44GN5a62IOW3neW0juS7iuS6leW6lw!5e0!3m2!1sja!2sjp!4v1703405740452!5m2!1sja!2sjp"></iframe>
          <p className="bunsyou">武蔵小杉駅からは約1kmと徒歩ではなかなかいけませんが、自転車や車で来店可能な店舗です。郊外にあるため、店舗は広くカウンター席だけでなく、テーブル席もあるのでお子様連れには良いです。店舗は24時間営業です。

</p>
        </Box>


        <Box className="yohaku" sx={sx}></Box>
        <Box className="hakodeka">
          <h2 className="tenmei">ガスト</h2>
          <img className="gazou" src={gasuto}/>
          <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51921.628980779344!2d139.5819129102181!3d35.57587881513974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f57aeef4d2c5%3A0xcb261acc853450eb!2z44Ks44K544OIIOatpuiUteWwj-adiemnheWJjeW6lw!5e0!3m2!1sja!2sjp!4v1703405784858!5m2!1sja!2sjp"></iframe>
          <p className="bunsyou">JR武蔵小杉北口から徒歩1分、ロータリーにあるビルの2階にある店舗です。席数は152席と広い店内で友人でも家族連れでもゆっくりとくつろげます。ガストといえばキッズメニューが充実していて、チーズハンバーグやピザやパスタ、から好しのから揚げも美味しいですよね。</p>
        </Box>


        <Box className="yohaku" sx={sx}></Box>
        <Box className="hakodeka">
          <h2 className="tenmei">モスバーガー</h2>
          <img className="gazou" src={mos}/>
          <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51920.689601063576!2d139.57864054863285!3d35.57732800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f57750b569e3%3A0x9b9b04ebb401ede3!2z44Oi44K544OQ44O844Ks44O85q2m6JS15bCP5p2J5bqX!5e0!3m2!1sja!2sjp!4v1703427339748!5m2!1sja!2sjp"></iframe>
          <p className="bunsyou">JR南武線 武蔵小杉駅北口から徒歩7分にあります。駅からはロータリーからパークシティ武蔵小杉ザガーデンタワーズを過ぎた隣に位置しているので若干離れていますが、保育園の送迎の行きかえりの若い夫婦や地元の方など客足は絶えないので人気がありますね。</p>
        </Box>




    </Box>
  );
};
export default GourmetPage;

const sx: SxProps<Theme> = {
  "&.GourmetPage": {
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
