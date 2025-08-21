import { Box, Grid, Typography, Card, CardMedia, CardContent, CardActions, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const FeaturedProducts = () => {
    const navigate = useNavigate();
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "$120",
      image: "/images/wirelesshp.png",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$250",
      image: "/images/smwatch.png",
    },
    {
      id: 3,
      name: "DSLR Camera",
      price: "$899",
      image: "/images/dslr.png",
    },
  ];

  return (
    <Box sx={{ py: 8, px: 4,minHeight:'100vh' }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: "black", mb: 6 }}
      >
        Featured Products
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                maxWidth: 345,
                borderRadius: "5px",
                boxShadow: "0px 8px 24px rgba(0,0,0,0.4)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                pb:1,
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0px 12px 32px rgba(0,0,0,0.6)",
                },
              }}
            >
              <CardMedia
                component="img"
                alt={product.name}
                height="220"
                image={product.image}
                sx={{ objectFit: "contain", p: 2 }}
              />
              <CardContent>
                <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
                  {product.name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {product.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    backgroundColor: "#ff6f61",
                    borderRadius: "25px",
                    px: 3,
                    "&:hover": { backgroundColor: "#ff3b2e" },
                  }}
                  onClick={() => navigate("/shop/products")}
                >
                  Shop Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedProducts;
