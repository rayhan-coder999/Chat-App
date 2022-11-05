import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Conversation from "../../components/Conversation";
import Chats from "./Chats";

const GeneralApp = () => {

  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      {/* Chats */}
      <Chats />
    </Stack>
  );
};

export default GeneralApp;
