import { Box, SxProps, Theme, Drawer } from "@mui/material";
import { Header } from "../modules/sample/Header";
import { MainContent } from "../modules/sample/MainContent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

export const SpotPage = () => {
  return (
    <Box className="spot" sx={sx}>
      <Header />
      spot
    </Box>
  );
};
export default SpotPage;

const sx: SxProps<Theme> = {
  "&.spot": {
    width: "100%",
    height: "1700px",
    paddingTop: "55px",
  },
};
