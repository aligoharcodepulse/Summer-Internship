import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  Snackbar,
  Alert
} from "@mui/material";


export default function Contact() {
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSnackbarOpen(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      {/* Contact Form */}
      <Container maxWidth="sm" sx={{ py: 6 }}>
        <Paper
          elevation={6}
          sx={{
            p: 4,
            borderRadius: "5px",
            backdropFilter: "blur(10px)",
            background: "rgba(255, 255, 255, 0.15)",
          }}
        >
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            Contact Us
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              type="email"
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              margin="normal"
              required
              multiline
              rows={4}
            />
            <Box textAlign="center" mt={3}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: "5px",
                  textTransform: "none",
                  fontSize: "16px",
                }}
                fullWidth
              >
                Send Message
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>

              <Snackbar
                open={snackbarOpen}
                autoHideDuration={4000}
                onClose={() => setSnackbarOpen(false)}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              >
                <Alert severity="success" onClose={() => setSnackbarOpen(false)}>
                 Your message has been sent! ✅ 
                </Alert>
              </Snackbar>
    </>
  );
}
