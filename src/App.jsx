import About from "./components/About"
import AchievementShowcase from "./components/AchievementShowcase"
import Cards from "./components/Cards"
import ContactForm from "./components/ContactForm"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials"
import { SKILLS } from "./constants"

function App() {


  return (
    <main className="overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased">
    <Navbar/>
    <HeroSection/>
    <About/>
    <Projects/>
    <Cards/>
    <Skills/>
    <ContactForm/>
    <Footer/>
    </main>
  )
}

export default App
