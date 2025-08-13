import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box, Avatar, Paper } from '@mui/material';

export default function About() {
  return (
    <Container sx={{ py: 5, mt:6 }}>
      {/* Company Information */}
      <Box sx={{ textAlign: 'center', mb: 5 }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          About Our Travel Agency
        </Typography>
        <Typography variant="body1" color="text.secondary" maxWidth="md" sx={{ mx: 'auto' }}>
          At Wanderlust Journeys, we believe travel is not just about visiting new places —
          it’s about experiencing cultures, making connections, and creating unforgettable memories.
          Since 2010, we’ve been crafting personalized travel experiences for adventurers worldwide.
        </Typography>
      </Box>

      {/* Mission & Vision */}
      <Grid container spacing={4} sx={{ mb: 5 }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 3, height: '100%' }}>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body1" color="text.secondary">
              To inspire and enable people to explore the beauty of our world while ensuring sustainable
              and responsible tourism practices for generations to come.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 3, height: '100%' }}>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              Our Vision
            </Typography>
            <Typography variant="body1" color="text.secondary">
              To be a global leader in personalized travel planning, delivering journeys that enrich
              lives, foster cultural understanding, and support local communities.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Team Section */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Meet Our Team
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {[
          { name: 'Sophie Miller', role: 'Founder & CEO', img: 'https://randomuser.me/api/portraits/women/44.jpg', bio: 'Passionate traveler with over 15 years in the tourism industry, Sophie ensures every trip is magical.' },
          { name: 'Daniel Lee', role: 'Travel Consultant', img: 'https://randomuser.me/api/portraits/men/32.jpg', bio: 'Specializes in creating personalized itineraries for solo travelers and adventure seekers.' },
          { name: 'Emily Chen', role: 'Content Creator', img: 'https://randomuser.me/api/portraits/women/65.jpg', bio: 'Captures the essence of every destination with stunning photography and storytelling.' }
        ].map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardMedia>
                <Avatar
                  src={member.img}
                  alt={member.name}
                  sx={{
                    width: 120,
                    height: 120,
                    mx: 'auto',
                    mt: 3,
                    border: '3px solid white',
                    boxShadow: 2
                  }}
                />
              </CardMedia>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" fontWeight={600}>
                  {member.name}
                </Typography>
                <Typography variant="subtitle2" color="primary" gutterBottom>
                  {member.role}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.bio}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
