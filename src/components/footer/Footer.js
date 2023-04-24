import { Container, Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ backgroundColor: 'primary.main', py: 3 }}>
      <Container maxWidth="lg">
        <Typography variant="body1" align="center" color="text.secondary">
          &copy; {new Date().getFullYear()} Gismeteo Wheather. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;

// import React from "react";
// import { Container, Box, Typography } from "@mui/material";

// function Footer(): React.ReactElement {
//   return (
//     <Box sx={{ backgroundColor: "primary.main", py: 3 }}>
//       <Container maxWidth="lg">
//         <Typography variant="body1" align="center" color="text.secondary">
//           &copy; {new Date().getFullYear()} Gismeteo Wheather. All rights reserved.
//         </Typography>
//       </Container>
//     </Box>
//   );
// }

// export default Footer;

