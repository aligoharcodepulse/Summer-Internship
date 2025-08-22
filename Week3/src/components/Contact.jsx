import { Container, Grid, TextField, Button, Card, CardContent, Typography, Box, Snackbar, Alert } from "@mui/material";
import { motion } from "framer-motion";
import { Email, Phone, LocationOn } from "@mui/icons-material";
import { useState } from "react";

const Contact = () => {

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.message) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSnackbarOpen(true);
      setFormData({ name: "", email: "", message: "" }); // reset form
      setErrors({});
    }
  };


  return (
    <Box sx={{ py: 8, backgroundColor: "#f9f9f9",mt:5 }}>
      <Container>
        {/* Contact Header */}
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }}>
          <Typography variant="h3" align="center" gutterBottom fontWeight="bold">
            Get in Touch
          </Typography>
          <Typography variant="subtitle1" align="center" color="text.secondary" paragraph>
            Have questions? We're here to help. Reach out to us anytime.
          </Typography>
        </motion.div>

        <Grid container spacing={6} mt={4} justifyContent={'center'}>
          {/* Contact Form */}
        <Grid item xs={12} md={6}>
              <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
                <Card elevation={4} sx={{ borderRadius: "8px", p: 1 }}>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      Send Us a Message
                    </Typography>
                    <form onSubmit={handleSubmit}>
                      <TextField
                        label="Your Name"
                        name="name"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        value={formData.name}
                        onChange={handleChange}
                        error={!!errors.name}
                        helperText={errors.name}
                      />
                      <TextField
                        label="Your Email"
                        name="email"
                        type="email"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        value={formData.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                      />
                      <TextField
                        label="Your Message"
                        name="message"
                        multiline
                        rows={4}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        value={formData.message}
                        onChange={handleChange}
                        error={!!errors.message}
                        helperText={errors.message}
                      />
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        sx={{
                          mt: 2,
                          backgroundColor: "#ff6f61",
                          borderRadius: "25px",
                          "&:hover": { backgroundColor: "#ff3b2e" },
                        }}
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Snackbar for success */}
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
            </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}>
              <Grid container spacing={3}>
                {[
                  { icon: <Email fontSize="large" color="primary" />, title: "Email Us", detail: "support@shopsite.com" },
                  { icon: <Phone fontSize="large" color="success" />, title: "Call Us", detail: "+92 300 1234567" },
                  { icon: <LocationOn fontSize="large" color="error" />, title: "Visit Us", detail: "123 Airway Boulevard, Peshawar" },
                ].map((item, index) => (
                  <Grid item xs={12} key={index}>
                    <Card elevation={3} sx={{ display: "flex", alignItems: "center", p: 2, borderRadius: "7px" }}>
                      <Box sx={{ mr: 2 }}>{item.icon}</Box>
                      <Box>
                        <Typography variant="h6">{item.title}</Typography>
                        <Typography color="text.secondary">{item.detail}</Typography>
                      </Box>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>
        </Grid>

        {/* Map Section */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Box mt={8}>
            <Typography variant="h5" align="center" gutterBottom>
              Find Us on the Map
            </Typography>
            <Box
              sx={{
                mt: 2,
                height: 300,
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: 3,
              }}
            >
              <iframe
                title="Google Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.612505923763!2d71.524915!3d34.015136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38deca3f9d9cxxxx%3A0xXXXXXXXXXXXXXXX!2sPeshawar!5e0!3m2!1sen!2sPK!4v1700000000000"
              ></iframe>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;
