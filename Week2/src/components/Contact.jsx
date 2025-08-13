import React from "react";
import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
  Snackbar,
  Alert,
  Divider,
} from "@mui/material";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Contact() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all fields before submitting.");
      return;
    }
    setOpen(true);
    e.currentTarget.reset();
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6, mt:6 }}>
      <Typography variant="h3" fontWeight="bold" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 4 }}>
        We’d love to hear from you. Send a message or reach us using the details below.
      </Typography>

      <Grid container spacing={4} sx={{justifyContent:'center'}}>
        {/* Left: Contact form */}
        <Grid item xs={12} md={7} width={400}>
      <Paper elevation={3} sx={{ p: { xs: 2, sm: 3 }, borderRadius: 3 }}>
        <Typography
          variant="h5"
          fontWeight={700}
          gutterBottom
          sx={{ textAlign: "center" }}
        >
          Send a Message
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Box component="form" noValidate onSubmit={handleSubmit}>
          <Stack spacing={2.5}>
            <TextField
              label="Name"
              name="name"
              fullWidth
              required
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              fullWidth
              required
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              label="Message"
              name="message"
              fullWidth
              required
              multiline
              minRows={4}
              placeholder="Tell us about your travel plans…"
              value={formData.message}
              onChange={handleChange}
            />
            <Box>
              <Button type="submit" variant="contained" size="large" fullWidth>
                Send Message
              </Button>
            </Box>
          </Stack>
        </Box>
      </Paper>
    </Grid>

        {/* Right: Contact details + Map */}
        <Grid item xs={12} md={5}>
          <Stack spacing={4}>
            <Paper elevation={3} sx={{ p: { xs: 2, sm: 3 }, borderRadius: 3 }}>
              <Typography variant="h5" fontWeight={700} gutterBottom sx={{textAlign:'center'}}>
                Contact Details
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Stack spacing={2}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <PhoneIphoneIcon color="primary" />
                  <Box>
                    <Typography variant="subtitle2">Phone</Typography>
                    <Typography variant="body2" color="text.secondary">
                      +92 315 7667714
                    </Typography>
                  </Box>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <EmailIcon color="primary" />
                  <Box>
                    <Typography variant="subtitle2">Email</Typography>
                    <Typography variant="body2" color="text.secondary">
                      hello@comeflywithus.travel
                    </Typography>
                  </Box>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <LocationOnIcon color="primary" />
                  <Box>
                    <Typography variant="subtitle2">Address</Typography>
                    <Typography variant="body2" color="text.secondary">
                      123 Airway Boulevard, Peshawar, KPK, Pakistan
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </Paper>

            <Paper elevation={3} sx={{ p: 0, borderRadius: 3, overflow: "hidden" }}>
              {/* Responsive map container (16:9) */}
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  pt: "56.25%", // 16:9
                }}
              >
                <Box
                  component="iframe"
                  title="Our Location"
                  src={
                    // Replace with your place embed URL
                    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.612505923763!2d71.524915!3d34.015136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38deca3f9d9cxxxx%3A0xXXXXXXXXXXXXXXX!2sPeshawar!5e0!3m2!1sen!2sPK!4v1700000000000"
                  }
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  sx={{
                    border: 0,
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  allowFullScreen
                />
              </Box>
            </Paper>
          </Stack>
        </Grid>
      </Grid>

      {/* toast */}
      <Snackbar
        open={open}
        autoHideDuration={2500}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success" onClose={() => setOpen(false)} variant="filled">
          Message sent!
        </Alert>
      </Snackbar>
    </Container>
  );
}
