import { Box, SxProps, Theme, Drawer } from "@mui/material";
import { Header } from "../modules/sample/Header";
import { MainContent } from "../modules/sample/MainContent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

export const TopPage = () => {
  return (
    <Box className="TopPage" sx={sx}>
      <Header />
      <MainContent />
    </Box>
  );
};
export default TopPage;

const sx: SxProps<Theme> = {
  "&.TopPage": {
    width: "100%",
    height: "2100px",
    paddingTop: "55px",
  },
};
