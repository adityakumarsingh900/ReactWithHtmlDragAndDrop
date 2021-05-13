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
      <Box fill="horizontal" align="end" width="small">
        <Button
          primary
          label="Add List"
          icon={<Add />}
          onClick={() => setOpenListLayer(true)}
        />
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
