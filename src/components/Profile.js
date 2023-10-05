import React from "react";
import { Avatar, Typography, Stack } from "@mui/material";

function Profile() {
  return (
    <Stack
      alignItems="center"
      textAlign="center"
      py={5}
      bgcolor="#f5f5f5"
      borderRadius={3}
      boxShadow={3}
      spacing={2}
    >
      <Avatar
        src="/nigerianp.jpeg"
        alt="Blomst"
        sx={{
          width: 150,
          height: 150,
          margin: "auto",
          border: "4px solid #FFD700",
        }}
      />
      <Typography variant="h4" gutterBottom color="#000000">
      Prins Adebayo
      </Typography>
    </Stack>
  );
}

export default Profile;
