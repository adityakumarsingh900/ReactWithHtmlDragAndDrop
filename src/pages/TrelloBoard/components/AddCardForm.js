import { useState } from 'react';
import {
  Box,
  Button,
  Form,
  FormField,
  TextInput,
  Layer,
  Heading,
  TextArea,
} from "grommet";
import PropTypes from "prop-types";

import { Close } from "grommet-icons";

const AddCardForm = ({ onClose, onSubmit }) => {
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
            Add Card
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

            <FormField label="Description" name="desc" htmlFor="desc" required>
              <TextArea name="desc" type="desc" />
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

AddCardForm.defaultProps = {
  onClose: () => console.log('hii'),
};

AddCardForm.propTypes = {
  onClose: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
};

export default AddCardForm;
