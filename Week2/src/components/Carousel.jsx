// src/components/Carousel.jsx
import React from "react";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const carouselItems = [
  {
    image: "/images/img1.png",
    title: "Discover the World",
    description: "Explore breathtaking destinations across the globe."
  },
  {
    image: "/images/img2.png",
    title: "Adventure Awaits",
    description: "Experience the thrill of adventure like never before."
  },
  {
    image: "/images/img3.png",
    title: "Relax & Unwind",
    description: "Find your perfect getaway to rest and recharge."
  }
];

export default function CarouselComponent() {
  return (
    <Box sx={{ width: "100%", py: 4, mt:3.2 }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        // style={{ borderRadius: "16px" }}
      >
        {carouselItems.map((item, index) => (
          <SwiperSlide key={index}>
            <Card sx={{ maxWidth: "100%", overflow: "hidden" }}>
              <CardMedia
                component="img"
                height="550"
                image={item.image}
                alt={item.title}
              />
              <CardContent sx={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
                <Typography variant="h5" color="white">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="white">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
