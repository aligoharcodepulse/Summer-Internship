import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";

const packages = [
  {
    country: "Switzerland",
    days: 7,
    price: "$2,499",
    image: "./public/images/switzerland.png"
  },
  {
    country: "Japan",
    days: 10,
    price: "$3,299",
    image: "./public/images/japan.png"
  },
  {
    country: "Italy",
    days: 5,
    price: "$1,899",
    image: "./public/images/italy.png"
  }
];

export default function RecentPackages() {
  return (
    <Grid container spacing={3} sx={{ mt: 5, px: 3 }}>
      {packages.map((pkg, index) => (
        <Grid item xs={12} sm={6} md={4} key={index} alignItems={'center'}>
          <Card sx={{ borderRadius: 3, boxShadow: 4, ml:1 }}>
            <CardMedia component="img" height="300" image={pkg.image} alt={pkg.country} />
            <CardContent>
              <Typography variant="h5" fontWeight="bold">
                {pkg.country}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {pkg.days} Days Tour
              </Typography>
              <Typography variant="h6" color="primary" mt={1}>
                {pkg.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained" color="primary">
                Book Now
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
