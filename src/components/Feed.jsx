
import { Box, Divider } from "@mui/material";
import React from "react";
import Post from "./Post";
import Post2 from "./Post2";
import Post3 from "./Post3";
import Post4 from "./Post4";
import Post5 from "./Post5";

const Feed = () => {
  return (
    <Box  flex={4} p={2}>
      <Post />
      <Divider />

      <Post2 />
      <Divider />

      <Post3 />
      <Divider />

      <Post4 />
      <Divider />

      <Post5 />
      <Divider />
    </Box>
  );
};

export default Feed;
