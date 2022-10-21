import React, { useEffect, useState } from "react";

import { Box } from "@mui/material";
import selectColor from "utils/selectColor";

interface IColoredProps {
  children: React.ReactNode;
}

export const Colored: React.FC<IColoredProps> = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState("red");

  useEffect(() => {
    setTimeout(() => {
      const newColor = selectColor(backgroundColor);

      setBackgroundColor(newColor);
    }, 1000);
  }, [backgroundColor]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 10,
        backgroundColor,
      }}
    >
      {children}
    </Box>
  );
};
