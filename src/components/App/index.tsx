import { Box, Typography } from "@mui/material";
import { Footer, Header, Page } from "components";
import selectColor from "utils/selectColor";

export const App = () => {
  const color = selectColor("red");

  return (
    <Box>
      <Header />
      <Page backgroundColor={color}>
        <Box>
          <Typography>Hi</Typography>
        </Box>
      </Page>
      <Footer />
    </Box>
  );
};

export default App;
