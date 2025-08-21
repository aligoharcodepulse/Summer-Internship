import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar/> {/* Always visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/policies" element={<Policies />} /> */}
      </Routes>
      {/* <Footer/> */}
    </>
  )
}

export default App
