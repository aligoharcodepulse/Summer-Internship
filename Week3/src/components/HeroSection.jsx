import { Box, Typography, Button, Grid } from "@mui/material";
import {motion} from "framer-motion";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        color: "black",
        pt: 20,
        px: { xs: 3, md: 8 },
        height:'100vh',
        background: "#f9f9f9"
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="space-between"
      >
        {/* Left Content */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h3"
              fontWeight="bold"
              gutterBottom
              sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
            >
              Independence Day Sale Mela ⚡
            </Typography>
            <Typography variant="h6" sx={{ mb: 3, color: "#6f6c6cff" }}>
              Discover exclusive deals and shop your favorite products with
              unbeatable prices.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                background: "linear-gradient(90deg, #FF6B6B, #FF8E53)",
                color: "black",
                px: 4,
                py: 1.5,
                fontWeight: "bold",
                borderRadius: "30px",
                "&:hover": {
                  background: "linear-gradient(90deg, #FF8E53, #FF6B6B)",
                },
              }}
              onClick={() => navigate("/shop/products")}
            >
              Shop Now
            </Button>
          </motion.div>
        </Grid>

        {/* Right Image */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Box
              component="img"
              src="/images/home.png"
              alt="Shopping Hero"
              sx={{
                width: "100%",
                maxWidth: 500
                // borderRadius: "20px",
                // boxShadow: "0px 10px 30px rgba(0,0,0,0.4)",
              }}
            />
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
