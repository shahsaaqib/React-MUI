import { Stack, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";

export const MuiTextField = () => {
  const [value, setValue] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={3}>
        <TextField label="name" variant="outlined" />
        <TextField label="name" variant="standard" />
        <TextField label="name" variant="filled" />
      </Stack>
      <Stack direction="row">
        <TextField label="small secondary" size="small" color="secondary" />
      </Stack>
      <Stack direction="row" spacing={3}>
        <TextField label="Form Input" size="small" color="secondary" required />
        <TextField
          label="Password"
          type="password"
          size="small"
          color="secondary"
          required
          value={value}
          error={!value}
          onChange={handleChange}
          helperText={
            !value ? "Required" : "Don't share your password with anyone"
          }
        />
        <TextField label="Disabled" size="small" color="secondary" disabled />
        <TextField
          label="Read Only"
          size="small"
          color="secondary"
          inputProps={{ readOnly: true }}
        />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};
