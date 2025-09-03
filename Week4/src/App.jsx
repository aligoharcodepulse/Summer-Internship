import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Contact from "./components/Contact"
import { Routes, Route } from 'react-router-dom'
import UpcomingEvents from "./components/UpcomingEvents"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <Navbar/> {/* Always visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upcoming-events" element={<UpcomingEvents />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
