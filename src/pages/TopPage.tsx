import { Box, SxProps, Theme ,Drawer} from "@mui/material";
import { Header } from "../modules/sample/Header";
import { MainContent } from "../modules/sample/MainContent";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send'


import { useState } from "react";


export const TopPage = () => {
  return (
    <Box className="TopPage" sx={sx}>
      <Header />
      <MainContent />
      

    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.TopPage": {
    width: "100%",
    height:"1700px",
    paddingTop:"55px",
  },
};

