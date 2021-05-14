import { useState, useEffect, useCallback } from "react";
import { Box, Button } from "grommet";
import { Add } from "grommet-icons";

import AddListForm from "./AddListForm";
import List from "./List";
import {
  getLocalList,
  saveListOnLocal,
  getListEntity,
} from "../controllers/boardController";

import { removeFromLocalStorage } from "../../../utils/storage";

const TrelloBoard = () => {
  const [openListLayer, setOpenListLayer] = useState(false);
  const [list, setList] = useState(getLocalList());

  const addToList = (data) => {
    if (list.find((l) => l.name === data.name)) {
      alert("Duplicate List Name !!");
      return false;
    }
    setList((oldData) => {
      return [...oldData, getListEntity({ ...data })];
    });
    setOpenListLayer(false);
  };

  const handleListDelete = useCallback((name) => {
    setList((oldData) => oldData.filter((i) => i.name !== name));
    removeFromLocalStorage(`card_${name}`);
  }, []);

  useEffect(() => {
    saveListOnLocal(list);
  }, [list]);

  return (
    <Box>
      <Box direction="row">
        <Box fill="horizontal">
          A new list can be added to the board by pressing the ADD LIST button
          present on the right side of the board. A new card can be added to a
          list via a plus(+) button present at the bottom of each list(inside a
          list). A card can be dragged from one list and dropped on the second
          list to make it part of the second list.
        </Box>
        <Box align="end">
          <Button
            primary
            label="Add List"
            icon={<Add />}
            onClick={() => setOpenListLayer(true)}
          />
        </Box>
      </Box>
      <Box fill direction="row">
        {list.map((item) => (
          <List key={item.name} name={item.name} onDelete={handleListDelete} />
        ))}
      </Box>
      {openListLayer && (
        <AddListForm
          onClose={() => setOpenListLayer(false)}
          onSubmit={addToList}
        />
      )}
    </Box>
  );
};

export default TrelloBoard;
