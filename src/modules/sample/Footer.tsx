import { Box, SxProps, Theme } from "@mui/material";

export const Footer = () => {
  return (
    <Box className="Footer" sx={sx}>
      ふひり
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Footer" : {
    width: "100%",
  },
};
