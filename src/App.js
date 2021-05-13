import { Grommet, Box, Heading, Footer, Anchor } from "grommet";
import { Linkedin } from "grommet-icons";

import TrelloBoard from "./pages/TrelloBoard";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

function App() {
  return (
    <Grommet theme={theme}>
      <Box
        tag="header"
        direction="row"
        align="center"
        alignContent="center"
        justify="between"
        background="brand"
        pad={{ left: "medium", right: "small", vertical: "xsmall" }}
        elevation="medium"
      >
        <Box>
          <Heading size="small">Demo of HTML5 Drag & Drop API</Heading>
        </Box>
      </Box>
      <TrelloBoard />
      <Footer background="light-4" justify="end" pad="small">
        <Anchor
          href="https://www.linkedin.com/in/aditya-kumar-singh-a8b584106/"
          target="_blank"
          textAlign="center"
          size="small"
          label="Designed By Aditya"
          icon={<Linkedin color="blue" />}
          reverse
        />
      </Footer>
    </Grommet>
  );
}

export default App;
