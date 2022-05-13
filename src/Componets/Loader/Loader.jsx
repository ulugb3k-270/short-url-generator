import React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = () => {
  return (
    <div style={{display: "flex", width: "100%", justifyContent: "center"}}>
      <Stack
        style={{ margin: "0 auto" }}
        sx={{ color: "grey.500" }}
        spacing={2}
        direction="row"
      >
        <CircularProgress color="primary" />
      </Stack>
    </div>
  );
};

export default Loader;
