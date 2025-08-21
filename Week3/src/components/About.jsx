import { useNavigate } from "react-router-dom";
import { Box, Container, Grid, Typography, Card, CardContent, Avatar, Button } from "@mui/material";
import { motion } from "framer-motion";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

export default function About() {
    const navigate = useNavigate();
  const features = [
    {
      title: "Our Mission",
      description: "To deliver top-quality products at unbeatable prices while ensuring customer satisfaction.",
      icon: <ShoppingBagIcon sx={{ fontSize: 40, color: "#ff6f61" }} />,
    },
    {
      title: "Fast Delivery",
      description: "We guarantee quick and reliable shipping, ensuring your products arrive on time.",
      icon: <LocalShippingIcon sx={{ fontSize: 40, color: "#ff6f61" }} />,
    },
    {
      title: "Trusted Quality",
      description: "We handpick every product to maintain the highest standards of quality and trust.",
      icon: <EmojiEventsIcon sx={{ fontSize: 40, color: "#ff6f61" }} />,
    },
  ];

  const team = [
    { name: "Sarah Ashraf", role: "Founder & CEO", img: "https://i.pravatar.cc/150?img=1" },
    { name: "Asjad Haider", role: "Marketing Head", img: "/images/104230.jpg" },
    { name: "Ayesha Noor", role: "Product Designer", img: "https://i.pravatar.cc/150?img=2" },
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: "#fdf6f6",mt:6 }}>
      <Container>
        {/* Intro Section */}
        <Typography variant="h3" align="center" gutterBottom fontWeight="bold">
          About Us
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
          We are passionate about making shopping easy, enjoyable, and affordable for everyone.
        </Typography>

        {/* Feature Cards */}
        <Grid container spacing={4}>
          {features.map((feature, i) => (
            <Grid item xs={12} md={4} key={i}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Card sx={{ textAlign: "center", p: 3, borderRadius: 4, boxShadow: 4 }}>
                  <Box>{feature.icon}</Box>
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Our Team */}
        <Box sx={{ mt: 10 }}>
          <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
            Meet Our Team
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {team.map((member, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <motion.div whileHover={{ y: -10 }}>
                  <Card sx={{ textAlign: "center", p: 3, borderRadius: 4, boxShadow: 4 }}>
                    <Avatar src={member.img} sx={{ width: 100, height: 100, mx: "auto", mb: 2 }} />
                    <Typography variant="h6" fontWeight="bold">
                      {member.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {member.role}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Call to Action */}
        <Box sx={{ textAlign: "center", mt: 10 }}>
          <Typography variant="h5" gutterBottom>
            Want to know more about our journey?
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ff6f61",
              borderRadius: "25px",
              px: 4,
              py: 1.2,
              "&:hover": { backgroundColor: "#ff3b2e" },
            }}
            onClick={()=>navigate('/contact')}
          >
            Contact Us
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
