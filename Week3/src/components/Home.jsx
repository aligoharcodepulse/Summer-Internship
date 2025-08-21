import FeaturedProducts from "./Feature";
import HeroSection from "./HeroSection";
import { Box } from "@mui/material";
export default function Home() {
//   const products = [
//     {
//       id: 1,
//       name: "Wireless Headphones",
//       price: "$120",
//       image: "https://images.unsplash.com/photo-1585386959984-a41552263a98",
//     },
//     {
//       id: 2,
//       name: "Smart Watch",
//       price: "$199",
//       image: "https://images.unsplash.com/photo-1511732351157-1865efcb7b7b",
//     },
//     {
//       id: 3,
//       name: "DSLR Camera",
//       price: "$899",
//       image: "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac",
//     },
//   ];

  return (
    <>
    <Box sx={{background: "#f5f5f5"}}>
        <HeroSection/>
        <FeaturedProducts/>
    </Box>

    </>
  );
}
