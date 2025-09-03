import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  InputAdornment,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Slider from "react-slick"; // ✅ install with: npm install react-slick slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const eventsData = [
  {
    title: "Tech Conference 2025",
    description: "Join industry leaders to explore AI and future tech.",
    image: "/images/tech.png",
  },
  {
    title: "Music Fest",
    description: "Experience live performances from top artists.",
    image: "/images/music.png",
  },
  {
    title: "Startup Meetup",
    description: "Network with entrepreneurs and investors.",
    image: "/images/startup.png",
  },
  {
    title: "Art & Culture Exhibition",
    description: "A celebration of creativity and cultural heritage.",
    image: "/images/art-culture.png",
  },
];

const HomePage = () => {
  const [search, setSearch] = useState("");

  const filteredEvents = eventsData.filter((event) =>
    event.title.toLowerCase().includes(search.toLowerCase())
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(to right, #6a11cb, #2575fc)",
          color: "white",
          py: 10,
          textAlign: "center",
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Discover Upcoming Events
        </Typography>
        <Typography variant="h6" sx={{ mt: 2, opacity: 0.9 }}>
          Stay updated and never miss out on exciting happenings around you!
        </Typography>

        {/* Search Bar */}
        <Container maxWidth="sm" sx={{ mt: 4 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search events..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              sx: { background: "white", borderRadius: 2 },
            }}
          />
        </Container>
      </Box>

      {/* Carousel Section */}
      <Container sx={{ mt: 6, mb: 6 }}>
        <Slider {...settings}>
          {filteredEvents.map((event, index) => (
            <Card
              key={index}
              sx={{
                borderRadius: 2,
                boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                overflow: "hidden",
              }}
            >
              <CardMedia
                component="img"
                height="500"
                image={event.image}
                alt={event.title}
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  {event.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {event.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default HomePage;
