import React from "react";

import { Box } from "@mui/material";

interface IPageProps {
  children: React.ReactNode;
  backgroundColor: string;
}

export const Page: React.FC<IPageProps> = ({ children, backgroundColor }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 10,
        backgroundColor
      }}
    >
      {children}
    </Box>
  );
};
