import React from "react";

// MUI
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
  return (
    <div className="loading">
      <Stack sx={{ color: "grey.500" }} direction="column">
        <CircularProgress color="secondary" />
      </Stack>
    </div>
  );
};

export default Loading;
