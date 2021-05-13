import { useState } from 'react';
import {
  Box,
  Button,
  Form,
  FormField,
  TextInput,
  Layer,
  Heading,
} from "grommet";
import PropTypes from "prop-types";

import { Close } from "grommet-icons";

const AddListForm = ({ onClose, onSubmit }) => {
  const [value, setValue] = useState({ name: "" });

  return (
    <Layer
      position="right"
      full="vertical"
      modal
      onClickOutside={onClose}
      onEsc={onClose}
    >
      <Box fill="vertical" overflow="auto" width="medium" pad="medium">
        <Box flex={false} direction="row" justify="between">
          <Heading level={2} margin="none">
            Add List
          </Heading>
          <Button icon={<Close />} onClick={onClose} />
        </Box>
        <Box flex="grow" overflow="auto" pad={{ vertical: "medium" }}>
          <Form
            value={value}
            onChange={(nextValue) => setValue(nextValue)}
            onSubmit={({ value: nextValue }) => onSubmit(nextValue)}
          >
            <FormField label="Name" name="name" htmlFor="name" required>
              <TextInput name="name" type="name" />
            </FormField>

            <Box direction="row" justify="between" margin={{ top: "medium" }}>
              <Button type="reset" label="Reset" onClick={() => setValue({})} />
              <Button type="submit" label="Add" primary />
            </Box>
          </Form>
        </Box>
      </Box>
    </Layer>
  );
};

AddListForm.defaultProps = {
  onClose: () => console.log('hii'),
};

AddListForm.propTypes = {
  onClose: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
};

export default AddListForm;
