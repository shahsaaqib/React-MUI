import {
  Box,
  FormControlLabel,
  Switch,
  FormLabel,
  FormGroup,
  FormControl,
} from "@mui/material";
import { useState } from "react";

export const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);
  console.log({ skills });

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  const changeSkillHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value);
    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  };
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="Dark mode"
          control={<Switch checked={checked} onChange={changeHandler} />}
        />
      </Box>
      <Box>
        <FormControl size="small" color="secondary">
          <FormLabel>Skills</FormLabel>
          <FormGroup>
            <FormControlLabel
              label="Javascript"
              value="javascript"
              control={
                <Switch
                  color="success"
                  size="medium"
                  checked={skills.includes("javascript")}
                  onChange={changeSkillHandler}
                />
              }
            />
            <FormControlLabel
              label="NodeJs"
              value="nodejs"
              control={
                <Switch
                  color="success"
                  size="small"
                  checked={skills.includes("nodejs")}
                  onChange={changeSkillHandler}
                />
              }
            />
            <FormControlLabel
              label="React"
              value="react"
              control={
                <Switch
                  color="success"
                  size="medium"
                  checked={skills.includes("react")}
                  onChange={changeSkillHandler}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};
