
import React from 'react';
import { Box, SxProps, Theme } from "@mui/material";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import './style.css';

export const Header = () => {
  return (
    <Box key="header" className="Header" sx={sx}>
      <Box className="logo">
        <a href="#">むさこす紹介</a>
      </Box>
      <Box className="deka" sx={sx}>
        <nav>
          <ul>
            <li>
              <Link to="/"replace className='lists'>Home</Link>
            </li>

            <li>
              <Link to="/gourmet" replace className='lists'>gourmet</Link>
            </li>

            <li>
              <Link to ="/spot" replace className='lists'>Spot</Link>
            </li>

          </ul>
        </nav>
        

      </Box>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Header": {
    position: "fixed",
    backgroundColor:"#fff8eb",
    width: "100%",
    height: "50px",
    top: "0",
    margin: "0",
    padding: "4px",
    zIndex: "10",
  },


  "&.deka": {
    position: "absolute",
    left: "800px",
    fontFamily: "serif",
    
  },
};
