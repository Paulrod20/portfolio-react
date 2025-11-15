import './App.css'
import AboutSection from './components/AboutSection'
import Navbar from './components/Navbar'
import Divider from './components/Divider';
import ProjectsSection from './components/ProjectSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="app">
      <Navbar />
      <AboutSection />
      <Divider />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  )
}

export default App
