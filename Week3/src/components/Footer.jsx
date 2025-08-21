import { Box, Typography, Grid, Link, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material';

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: '#1a1a40',
        color: 'white',
        py: 5,
        px: { xs: 3, md: 8 },
        // mt: 6,
      }}
    >
      <Grid container spacing={4}>
        {/* About Section */}
        <Grid item xs={12} md={4}>
          <Box sx={{ flexGrow: 1, display: {sm: 'block' } }}>
            <img
              src="/images/logo.png"
              alt="Logo"
              style={{ width: "150px", height: "auto", cursor: "pointer" }}
            />
          </Box>
          <Typography variant="body2">
            Discover endless choices with us! We specialize in bringing your style and needs together. 
            Shop quality products, trendy collections, and create unforgettable shopping moments.
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom fontWeight={700}>
            Quick Links
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Link href="/" color="inherit" underline="hover">Home</Link>
            <Link href="/about" color="inherit" underline="hover">About Us</Link>
            <Link href="/shop/products" color="inherit" underline="hover">Shop</Link>
            <Link href="/contact" color="inherit" underline="hover">Contact</Link>
          </Box>
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom fontWeight={700}>
            Contact Us
          </Typography>
          <Typography variant="body2">📍 123 Airway Boulevard, Peshawar, KPK, Pakistan</Typography>
          <Typography variant="body2">📞 +92 315 7667714</Typography>
          <Typography variant="body2">✉ support@shopsite.com</Typography>
          <Box sx={{ mt: 2 }}>
            <IconButton color="inherit" href="/" size="large">
              <Facebook />
            </IconButton>
            <IconButton color="inherit" href="/" size="large">
              <Instagram />
            </IconButton>
            <IconButton color="inherit" href="/" size="large">
              <Twitter />
            </IconButton>
            <IconButton color="inherit" href="/" size="large">
              <YouTube />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Copyright */}
      <Box sx={{ textAlign: 'center', mt: 4, borderTop: '1px solid rgba(255,255,255,0.1)', pt: 2 }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} Shop With Us. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}
