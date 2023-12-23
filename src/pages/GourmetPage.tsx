import { Box, SxProps, Theme, Drawer } from "@mui/material";
import { Header } from "../modules/sample/Header";
import { MainContent } from "../modules/sample/MainContent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Img from "/Users/chikuwanonakami/Desktop/introducting/hp-work/src/resources/work1/images/b.jpg";

export const GourmetPage = () => {
  return (
    <Box className="GourmetPage" sx={sx}>
      <Header />
        gourmet

    </Box>
  );
};
export default GourmetPage;

const sx: SxProps<Theme> = {
  "&.GourmetPage": {
    width: "100%",
    height: "1700px",
    paddingTop: "55px",
  },
};
