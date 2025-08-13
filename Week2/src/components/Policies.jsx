import { Container, Typography, Paper, Box, Divider } from "@mui/material";

export default function Policies() {
  return (
    <Container maxWidth="md" sx={{ py: 5, mt:6 }}>
      <Typography variant="h3" gutterBottom align="center" fontWeight="bold">
        Our Policies
      </Typography>

      {/* Privacy Policy */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom color="primary">
          Privacy Policy
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1" color="text.secondary">
          At Come Fly With Us, We value your privacy. Any personal
          information you provide while booking trips, subscribing to
          newsletters, or interacting with our services will only be used for
          travel arrangements and updates. We do not sell or share your details
          with third parties except when required for travel bookings or by
          legal obligations.
        </Typography>
      </Paper>

      {/* Terms & Conditions */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom color="primary">
          Terms & Conditions
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1" color="text.secondary">
          All bookings with Come Fly With Us are subject to availability at
          the time of confirmation. Prices may vary based on seasonal demand
          and currency exchange rates. By booking a trip, you agree to our
          cancellation policy, payment terms, and travel requirements.
        </Typography>
      </Paper>

      {/* Cookie Policy */}
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom color="primary">
          Cookie Policy
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1" color="text.secondary">
          We use cookies to enhance your browsing experience, analyze site
          traffic, and provide personalized travel recommendations. You can
          choose to disable cookies in your browser settings; however, certain
          features of our website may not function properly without them.
        </Typography>
      </Paper>
    </Container>
  );
}
