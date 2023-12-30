import { Box, SxProps, Theme, Drawer } from "@mui/material";
import { Header } from "../modules/sample/Header";
import  kenia from "/Users/chikuwanonakami/Desktop/introducting/hp-work/src/miseimg/keni.png"


export const Osuna = () => {
  return (
    <Box className="Osuna" sx={sx}>
      <Header />

    </Box>
  );
};
export default Osuna;

const sx: SxProps<Theme> = {
  "&.Osuna": {
    width: "100%",
    height: "2100px",
    paddingTop: "55px",
  },
};
