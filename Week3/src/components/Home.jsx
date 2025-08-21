import FeaturedProducts from "./Feature";
import HeroSection from "./HeroSection";
import { Box } from "@mui/material";
export default function Home() {

  return (
    <>
    <Box sx={{background: "#f9f9f9", mt:5}}>
        <HeroSection/>
        <FeaturedProducts/>
    </Box>

    </>
  );
}
