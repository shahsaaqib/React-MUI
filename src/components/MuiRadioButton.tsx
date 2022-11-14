import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";

export const MuiRadioButton = () => {
  const [value, setvalue] = useState("");
  console.log(value);
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setvalue(event.target.value);
  };
  return (
    <Box>
      <FormControl>
        <FormLabel id="job-experience-group-label" error={!value}>
          Years of Experience
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
          value={value}
          onChange={changeHandler}
          row
        >
          <FormControlLabel
            control={<Radio size="medium" color="error" />}
            label="0-2"
            value="0-2"
          />
          <FormControlLabel
            control={<Radio color="warning" />}
            label="3-5"
            value="3-5"
          />
          <FormControlLabel
            control={<Radio color="success" />}
            label="6-10"
            value="6-10"
          />
        </RadioGroup>
        <FormHelperText error={!value}>Invalid Selection</FormHelperText>
      </FormControl>
    </Box>
  );
};
