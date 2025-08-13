import CarouselComponent from './Carousel' ;
import {Box, Typography} from '@mui/material'
import RecentPackages from './RecentPackages';
const Home = () => {

    return(
        <>
        <CarouselComponent />

        <Box sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h4" fontWeight="bold">
          Recent Packages
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: "auto", mt: 1 }}>
          Discover our handpicked travel packages with breathtaking destinations and unforgettable experiences.
        </Typography>
      </Box>
      <RecentPackages />
        </>
    )
} 
export default Home;