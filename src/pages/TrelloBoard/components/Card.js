import PropTypes from "prop-types";
import { Box, Heading, Button, Text } from "grommet";
import { Close } from "grommet-icons";

const Card = ({ item, onDelete, setAllowDroping }) => {
	
  const handleDragStart = (evt) => {
    evt.dataTransfer.setData("text", item.toString());
    setAllowDroping(false);
  };

  const handleDragEnd = (evt) => {
    if (evt.dataTransfer.dropEffect !== "move") {
      setAllowDroping(true);
      return 1
    };
    onDelete(item.name);
    setAllowDroping(true);
  };

  return (
    <Box
      margin="xsmall"
      pad="xsmall"
      background="white"
      elevation="small"
      draggable="true"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <Box
        direction="row"
        justify="between"
        border={{ color: "brand", side: "bottom" }}
      >
        <Heading level={2} margin="none">
          {item.name}
        </Heading>
        <Button icon={<Close />} onClick={() => onDelete(item.name)} />
      </Box>
      <Box pad="small">
        <Text>{item.desc}</Text>
      </Box>
    </Box>
  );
};

Card.propTypes = {
  item: PropTypes.object,
  onDelete: PropTypes.func,
  setAllowDroping: PropTypes.func,
};

export default Card;
