import {
  Box,
  Typography,
  Container,
  Grid,
  IconButton,
} from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <div>
            {/* Footer */}
      <Box
        sx={{
          mt: 8,
          py: 4,
          background:"black",
        //   background: "linear-gradient(to right, #2196f3, #21cbf3)",
          color: "#fff",
        }}
      >
        <Container maxWidth="md">
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <IconButton
                href="https://facebook.com"
                target="_blank"
                color="inherit"
              >
                <Facebook />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                href="https://twitter.com"
                target="_blank"
                color="inherit"
              >
                <Twitter />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                href="https://instagram.com"
                target="_blank"
                color="inherit"
              >
                <Instagram />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                href="https://linkedin.com"
                target="_blank"
                color="inherit"
              >
                <LinkedIn />
              </IconButton>
            </Grid>
          </Grid>
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            © {new Date().getFullYear()} Your Company. All Rights Reserved.
          </Typography>
        </Container>
      </Box>
    </div>
  )
}

export default Footer;
