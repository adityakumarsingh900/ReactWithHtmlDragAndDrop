import { Box } from "grommet";

import Board from "./components/Board";

const TrelloBoard = () => {
  return (
    <Box pad="small" height={{ min: '80vh' }}>
      <Board />
    </Box>
  );
};

export default TrelloBoard;
