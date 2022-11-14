import { Box, TextField, MenuItem, Stack } from "@mui/material";

import { useState } from "react";

export const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([]);
  console.log(countries);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Stack spacing={4}>
      <Stack></Stack>
      <Box width="250px">
        <TextField
          label="Select Country"
          select
          fullWidth
          value={countries}
          onChange={changeHandler}
          SelectProps={{ multiple: true }}
          size="small"
          color="secondary"
          helperText={
            countries.length === 0 ? "Please select your country" : ""
          }
          error={countries.length === 0}
        >
          <MenuItem value="in">India</MenuItem>
          <MenuItem value="us">USA</MenuItem>
          <MenuItem value="aus">Australia</MenuItem>
        </TextField>
      </Box>
    </Stack>
  );
};
