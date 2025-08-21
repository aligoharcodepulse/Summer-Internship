
import { Container, Typography, Button, Grid } from "@mui/material";

const HeroSection = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 8,
      }}
    >
      <Grid container spacing={6} alignItems="center">
        {/* Left Side Content */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h2" fontWeight="bold" gutterBottom>
              Flat <span style={{ color: "#FF4081" }}>20% OFF</span> on
              Electronics
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph>
              Discover the latest gadgets and top trends. Shop now and enjoy
              exclusive discounts with fast delivery!
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                mt: 3,
                px: 4,
                py: 1.5,
                borderRadius: "50px",
                background: "linear-gradient(90deg, #FF4081, #7C4DFF)",
              }}
            >
              Shop Now
            </Button>
          </motion.div>
        </Grid>

        {/* Right Side Image */}
        <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
          <motion.img
            src="https://cdn-icons-png.flaticon.com/512/921/921071.png" 
            alt="Girl with laptop"
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "20px",
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeroSection;
