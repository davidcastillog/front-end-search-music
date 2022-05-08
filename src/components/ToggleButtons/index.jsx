import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";

const ToggleButtons = ({ view, setView }) => {
  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  return (
    <ToggleButtonGroup value={view} exclusive onChange={handleChange}>
      <ToggleButton value="grid" aria-label="centered">
        <ViewModuleIcon />
      </ToggleButton>
      <ToggleButton value="list" aria-label="left aligned">
        <ViewListIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ToggleButtons;
