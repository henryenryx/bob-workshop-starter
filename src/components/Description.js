import React from "react";
import { Typography, Box } from "@mui/material";

function Description() {
  return (
    <Box py={5} bgcolor="#e8eaf6" borderRadius={3} boxShadow={3} mt={4} px={3}>
      <Typography variant="h6" gutterBottom color="#3f51b5">
        Om Meg
      </Typography>
      <Typography>
      Jackie Chan, den legendariske kinesiske skuespilleren, stuntmannen og regissøren, har etablert seg som en ikonisk skikkelse innenfor filmindustrien. Med sin unike blanding av kampsportferdigheter og komisk timing har han trollbundet publikum verden over i flere tiår. Hans energiske og spektakulære stuntsekvenser har satt standarden for actionfilmer, og hans dedikasjon til å utføre egne farlige stunt har gjort ham til en ekte pioner innen filmverdenen. Jackie Chan er ikke bare kjent for sitt talent på lerretet, men også for sitt hjerte av gull og hans filantropiske arbeid. Han har inspirert generasjoner av filmelskere med sitt unike talent, sitt mot og sin urokkelige dedikasjon til sitt håndverk.      </Typography>
    </Box>
  );
}

export default Description;
