import { Navbar } from "./components/Navbar"

import { 
  Hero, 
  About, 
  Experience, 
  Projects, 
  Skills, 
  Philosophy, 
  Experiments, 
  Contact, 
  Footer } from '@/pages/index';

const App = () => {
  
  return (
    
     <div className="relative min-h-screen bg-background text-foreground"> 
         <Navbar />
         <main>
            <Hero />
            <About />
            <Projects />
            <Experiments />
            <Skills />
            <Philosophy />
            <Experience />
            <Contact />
         </main>
         <Footer />
     </div>
  )
}

export default App
