import About from "./components/About"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navber"
import Prizes from "./components/Prizes"
import Register from "./components/Register"
import Schedule from "./components/Schedule"
import ContactSection from "./components/ContactSection"

export default function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />

      <Hero />
      <About />
      <Prizes />
      <Schedule />
      <Register />
      <ContactSection />
      <Footer />
    </div>
  )
}
2