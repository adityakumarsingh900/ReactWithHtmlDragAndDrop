import { memo, useState, useEffect, useCallback } from "react";
import { Box, Button, Heading } from "grommet";
import { Add, Close } from "grommet-icons";
import PropTypes from "prop-types";

import AddCardForm from "./AddCardForm";
import Card from "./Card";
import {
  getCardsList,
  saveCardsOnLocal,
  getCardEntity,
} from "../controllers/boardController";

const List = ({ name, onDelete }) => {
  const [cards, setCards] = useState([]);
  const [allowDroping, setAllowDroping] = useState(true);
  const [openCardFormLayer, setOpenCardFormLayer] = useState(false);

  const handleDrop = (ev) => {
    ev.preventDefault();
    const data = JSON.parse(ev.dataTransfer.getData("text"));
		if (cards.find((l) => l.name === data.name))
			setCards((oldData) => {
        return [getCardEntity({ ...data, name: `${data.name} (new)` }), ...oldData];
      });
		else
      setCards((oldData) => {
        return [getCardEntity({ ...data }), ...oldData];
      });
  };

  const handleCardAddition = useCallback(
    (data) => {
      if (cards.find((l) => l.name === data.name)) {
        alert("Duplicate Card Name !!");
        return false;
      }
      setCards((oldData) => {
        return [...oldData, getCardEntity({ ...data, seq: oldData.length + 1 })];
      });
      setOpenCardFormLayer(false);
    },
    [cards]
  );

  const handleCardDelete = useCallback((name) => {
    setCards((oldData) => oldData.filter((d) => d.name !== name));
  }, []);

  useEffect(() => {
    const list = getCardsList(name);
    setCards(list);
  }, [name]);

  useEffect(() => {
    saveCardsOnLocal(name, cards);
  }, [name, cards]);

  return (
    <Box
      width="medium"
      height={{ min: "70vh" }}
      margin="small"
      pad="xsmall"
      round="small"
      border={{ color: "brand" }}
      background="light-2"
      onDragOver={(evt) => allowDroping && evt.preventDefault()}
      onDrop={handleDrop}
    >
      <Box
        flex={false}
        direction="row"
        justify="between"
        border={{ color: "brand", side: "bottom" }}
      >
        <Heading level={2} margin="none">
          {name}
        </Heading>
        <Button icon={<Close />} onClick={() => onDelete(name)} />
      </Box>
      <Box flex pad="xsmall">
        {cards.map((c) => (
          <Card
            item={c}
            onDelete={handleCardDelete}
            setAllowDroping={setAllowDroping}
          />
        ))}
      </Box>
      <Box fill="horizontal" align="center">
        <Button
          tip="Add Card"
          primary
          icon={<Add />}
          onClick={() => setOpenCardFormLayer(true)}
        />
      </Box>
      {openCardFormLayer && (
        <AddCardForm
          onClose={() => setOpenCardFormLayer(false)}
          onSubmit={handleCardAddition}
        />
      )}
    </Box>
  );
};

List.propTypes = {
  name: PropTypes.string,
  onDelete: PropTypes.func,
};

export default memo(List);
