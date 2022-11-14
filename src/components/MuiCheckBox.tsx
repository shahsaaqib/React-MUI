import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormGroup,
  FormLabel,
} from "@mui/material";
import { useState } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

export const MuiCheckBox = () => {
  const [acceptTnC, setAcceptTnC] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);
  console.log(skills);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnC(event.target.checked);
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
          label="I accept terms and conditions"
          control={
            <Checkbox
              icon={<BookmarkBorderIcon />}
              checkedIcon={<BookmarkIcon />}
              value={acceptTnC}
              onChange={changeHandler}
            />
          }
        />
      </Box>
      <Box>
        <FormControl size="small" color="success">
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="Javascript"
              value="javascript"
              control={
                <Checkbox
                  checked={skills.includes("javascript")}
                  onChange={changeSkillHandler}
                />
              }
            />
            <FormControlLabel
              label="Nodejs"
              value="nodejs"
              control={
                <Checkbox
                  checked={skills.includes("nodejs")}
                  onChange={changeSkillHandler}
                />
              }
            />
            <FormControlLabel
              label="React"
              value="react"
              control={
                <Checkbox
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
