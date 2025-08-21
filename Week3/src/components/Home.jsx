import FeaturedProducts from "./Feature";
import HeroSection from "./HeroSection";
import { Box } from "@mui/material";
export default function Home() {

  return (
    <>
    <Box sx={{ mt:4}}>
        <HeroSection/>
        <FeaturedProducts/>
    </Box>

    </>
  );
}
