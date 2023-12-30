// MUIのコンポーネントをインポート、使用するものはここで定義
import { Box, SxProps, Theme } from "@mui/material";

// 使用するコンポートをインポート
import { Route, Routes } from "react-router-dom";
import { TopPage } from "./pages/TopPage";
import { SamplePage } from "./pages/SamplePage";
import { GourmetPage } from "./pages/GourmetPage";
import { SpotPage } from "./pages/SpotPage";
import {Osuna} from "./pages/Osuna";
import ScrollToTop from "./ScrollTop";
 

// Appのメインの実装（表示する画面とpathを定義）
export const App = () => {
  return (
    <Box className="App" sx={sx}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/gourmet" element={<GourmetPage />} />
        <Route path="/sample" element={<SamplePage />} />
        <Route path="/spot" element={<SpotPage />} />
        <Route path="/osuna" element={<Osuna />} />
      </Routes>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.App": {
    width: "100%",
  },
};
