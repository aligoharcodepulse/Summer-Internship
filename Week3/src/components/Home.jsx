import { Box, Typography, Button, Grid, Card, CardContent, CardMedia } from "@mui/material";
import { motion } from "framer-motion";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "$120",
      image: "https://images.unsplash.com/photo-1585386959984-a41552263a98",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$199",
      image: "https://images.unsplash.com/photo-1511732351157-1865efcb7b7b",
    },
    {
      id: 3,
      name: "DSLR Camera",
      price: "$899",
      image: "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac",
    },
  ];

  return (
    <Box sx={{ bgcolor: "#fff", color: "black", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          py: 10,
          px: 5,
          backgroundImage:
            "url(/images/home.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Grid container spacing={6} alignItems="center">
          {/* Left Side (Text) */}
          <Grid item xs={12} md={6}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              <Typography variant="h2" fontWeight="bold" gutterBottom>
                Flat 20% Off on Electronics ⚡
              </Typography>
              <Typography variant="h6" gutterBottom>
                Upgrade your lifestyle with the latest gadgets today!
              </Typography>
              <Button
                variant="contained"
                sx={{
                  mt: 3,
                  bgcolor: "#ff5722",
                  px: 4,
                  py: 1.5,
                  fontSize: "1.2rem",
                }}
              >
                Shop Now
              </Button>
            </Box>
          </Grid>

          {/* Right Side (Big Illustration) */}
          <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
            <motion.img
              src="/images/home.png" 
              alt="Girl with laptop"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Featured Products */}
      <Box sx={{ px: 5, py: 8 }}>
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          gutterBottom
          sx={{ mb: 5 }}
        >
          Featured Products
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.3, duration: 0.6 }}
              >
                <Card
                  sx={{
                    bgcolor: "#1a1a1a",
                    color: "white",
                    borderRadius: 3,
                    boxShadow: 6,
                  }}
                >
                  <CardMedia
                    component="img"
                    height="220"
                    image={product.image}
                    alt={product.name}
                    sx={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
                  />
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                      {product.name}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "#ff9800", my: 1 }}
                    >
                      {product.price}
                    </Typography>
                    <Button
                      variant="outlined"
                      sx={{ color: "white", borderColor: "#ff5722" }}
                    >
                      Shop Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
