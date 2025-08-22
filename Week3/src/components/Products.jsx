import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
  Snackbar,
  Alert,
} from "@mui/material";
import { useState } from "react";
import { useCart } from "./CartContext";

const Products = () => {
  const { addToCart } = useCart();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState("");

  const products = [
    { id: 1, name: "Wireless Headphones", price: 120, image: "/images/wirelesshp.png", tag: "Hot" },
    { id: 2, name: "Smart Watch", price: 250, image: "/images/smwatch.png", tag: "New" },
    { id: 3, name: "DSLR Camera", price: 809, image: "/images/dslr.png", tag: "Sale 10% Off" },
    { id: 4, name: "Bluetooth Speaker", price: 180, image: "/images/blSpeaker.png", tag: "Best Seller" },
    { id: 5, name: "Gaming Laptop", price: 1499, image: "/images/gmLaptop.png", tag: "Trending" },
    { id: 6, name: "Wireless Mouse", price: 45, image: "/images/wrMouse.png" },
    { id: 7, name: "Mechanical Keyboard", price: 110, image: "/images/keyboard.png" },
    { id: 8, name: "4K Monitor", price: 399, image: "/images/monitor.png", tag: "Hot" },
    { id: 9, name: "Tablet Pro", price: 799, image: "/images/tablet.png" },
    { id: 10, name: "Drone", price: 999, image: "/images/drone.png", tag: "New" },
    { id: 11, name: "VR Headset", price: 499, image: "/images/vr.png" },
    { id: 12, name: "Portable Charger", price: 60, image: "/images/charger.png" },
    { id: 13, name: "Fitness Tracker", price: 45, image: "/images/tracker.png", tag:"Sale 50% Off" },
    { id: 14, name: "Smart Glasses", price: 350, image: "/images/glasses.png" },
    { id: 15, name: "Action Camera", price: 239, image: "/images/actioncamera.png", tag: "Sale 20% Off" },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    setSnackbarMsg(`${product.name} added to cart`);
    setSnackbarOpen(true);
  };

  return (
    <Box sx={{ py: 8,mt:4, px: { xs: 2, md: 6 }, backgroundColor: "#f9f9f9" }}>
      <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: "bold", color: "#222", mb: 6 }}>
        Our Products
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ borderRadius: "5px", boxShadow: "0px 6px 18px rgba(0,0,0,0.1)", transition: "transform 0.3s ease, box-shadow 0.3s ease", position: "relative", "&:hover": { transform: "translateY(-10px)", boxShadow: "0px 12px 30px rgba(0,0,0,0.2)" }}}>
              {product.tag && (
                <Chip label={product.tag} color="primary" size="small" sx={{ position: "absolute", top: 12, left: 12, backgroundColor: "#ff6f61", color: "#fff", fontWeight: "bold" }} />
              )}
              <CardMedia component="img" alt={product.name} height="220" image={product.image} sx={{ objectFit: "contain", p: 2 }} />
              <CardContent>
                <Typography variant="h6" component="div" sx={{ fontWeight: "bold", mb: 1 }}>
                  {product.name}
                </Typography>
                <Typography variant="body1" sx={{ color: "text.secondary", fontWeight: "500" }}>
                  ${product.price}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                <Button
                  size="medium"
                  variant="contained"
                  sx={{ backgroundColor: "#ff6f61", borderRadius: "25px", px: 3, fontWeight: "bold", "&:hover": { backgroundColor: "#ff3b2e" } }}
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Snackbar */}
      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={() => setSnackbarOpen(false)}>
        <Alert severity="success">{snackbarMsg}</Alert>
      </Snackbar>
    </Box>
  );
};

export default Products;
