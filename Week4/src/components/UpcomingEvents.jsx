import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Snackbar,
  Alert,
} from "@mui/material";

const eventsData = [
  {
    id: 1,
    name: "Tech Conference 2025",
    date: "12th Sep 2025, 10:00 AM",
    venue: "Expo Center, Karachi",
    shortDesc: "Explore the future of AI, Cloud, and Tech Innovations.",
    fullDesc:
      "Join leading experts in technology as they discuss AI, Machine Learning, Cloud Computing, and the next wave of digital innovation. Networking opportunities, workshops, and keynote speeches await.",
    image: "/images/tech.png",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.500271574902!2d67.07319387484526!3d24.813600577961616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e9a67e3d15d%3A0x5a50e9b33c3dcb1a!2sExpo%20Centre%20Karachi!5e0!3m2!1sen!2s!4v1693918242360",
  },
  {
    id: 2,
    name: "Music Fest",
    date: "18th Sep 2025, 7:00 PM",
    venue: "Open Air Theatre, Lahore",
    shortDesc: "A night of live performances by top artists.",
    fullDesc:
      "Get ready for electrifying performances by national and international stars. An unforgettable evening of music, dance, and entertainment under the stars.",
    image: "/images/music.png",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.752476618249!2d74.32570647488544!3d31.518955648129567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904c5c758bcb9%3A0x1e8a7cc9855a06ef!2sOpen%20Air%20Theatre%2C%20Lahore!5e0!3m2!1sen!2s!4v1693918320931",
  },
  {
    id: 3,
    name: "Startup Meetup",
    date: "20th Sep 2025, 5:00 PM",
    venue: "NEST I/O, Karachi",
    shortDesc: "Network with entrepreneurs and investors.",
    fullDesc:
      "A platform for budding entrepreneurs to pitch ideas, gain mentorship, and connect with investors. Don’t miss the startup showcase and panel discussions.",
    image: "/images/startup.png",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.2956333232896!2d67.03453927484537!3d24.82059157796095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d0bcb29df6d%3A0xa94b43f6bba468c1!2sThe%20Nest%20I%2FO!5e0!3m2!1sen!2s!4v1693918370045",
  },
  {
    id: 4,
    name: "Art & Culture Exhibition",
    date: "25th Sep 2025, 11:00 AM",
    venue: "Alhamra Arts Council, Lahore",
    shortDesc: "A celebration of creativity and cultural heritage.",
    fullDesc:
      "Featuring artworks, performances, and cultural showcases from across Pakistan. A chance to experience the diversity and richness of art and heritage.",
    image: "/images/art-culture.png",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.4897797030587!2d74.33119757488571!3d31.52804524812694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904c4e441edeb%3A0x39f5a2f0c5c7f7c3!2sAlhamra%20Arts%20Council!5e0!3m2!1sen!2s!4v1693918433286",
  },
  {
    id: 5,
    name: "Career Fair",
    date: "28th Sep 2025, 9:00 AM",
    venue: "University Campus, Islamabad",
    shortDesc: "Meet top recruiters and explore job opportunities.",
    fullDesc:
      "Students and professionals can meet recruiters, attend career workshops, and apply directly to top companies.",
    image: "/images/career.png",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.234!2d73.0551!3d33.6844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf7f0e99!2sIslamabad%20University!5e0!3m2!1sen!2s!4v1693918491205",
  },
  {
    id: 6,
    name: "Science Expo",
    date: "30th Sep 2025, 10:00 AM",
    venue: "Expo Center, Lahore",
    shortDesc: "Discover innovations by young scientists.",
    fullDesc:
      "A platform for students and researchers to showcase scientific projects, prototypes, and innovations.",
    image: "/images/science.png",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.566349977199!2d74.34087637488557!3d31.525323148127777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904bd095a828b%3A0x8fbd05e8fce7558b!2sExpo%20Center%20Lahore!5e0!3m2!1sen!2s!4v1693918530035",
  },
];

const UpcomingEvents = () => {
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleShowMore = (event) => {
    setSelectedEvent(event);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedEvent(null);
  };

  const handleRegister = () => {
    setSnackbarOpen(true);
  };

  return (
    <Container sx={{ mt: 6, mb: 6 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", mb: 4 }}
      >
        Upcoming Events
      </Typography>

      {/* Events Grid */}
      <Grid container spacing={4}>
        {eventsData.map((event) => (
          <Grid item xs={12} sm={6} md={4} key={event.id}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
                overflow: "hidden",
                width:"350px"
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={event.image}
                alt={event.name}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {event.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {event.date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {event.venue}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, mb: 1 }}>
                  {event.shortDesc}
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => handleShowMore(event)}
                >
                  Show More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal for Event Details */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        {selectedEvent && (
          <>
            <DialogTitle sx={{ fontWeight: "bold" }}>
              {selectedEvent.name}
            </DialogTitle>
            <DialogContent>
              <img
                src={selectedEvent.image}
                alt={selectedEvent.name}
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  marginBottom: "16px",
                }}
              />
              <Typography variant="body1" gutterBottom>
                <strong>Date & Time:</strong> {selectedEvent.date}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Venue:</strong> {selectedEvent.venue}
              </Typography>
              <Typography variant="body2" paragraph>
                {selectedEvent.fullDesc}
              </Typography>

              {/* Google Map */}
              <Box sx={{ mt: 2, mb: 2 }}>
                <iframe
                  src={selectedEvent.map}
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: "12px" }}
                  allowFullScreen=""
                  loading="lazy"
                  title="location-map"
                ></iframe>
              </Box>

              <Button
                variant="contained"
                fullWidth
                onClick={handleRegister}
                sx={{ mt: 2 }}
              >
                RSVP / Register
              </Button>
            </DialogContent>
          </>
        )}
      </Dialog>

      {/* Snackbar Confirmation */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert
          severity="success"
          sx={{ width: "100%" }}
          onClose={() => setSnackbarOpen(false)}
        >
          🎉 Event booking confirmed!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default UpcomingEvents;
