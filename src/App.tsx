import './App.css'
import AboutSection from './components/AboutSection'
import Navbar from './components/Navbar'
import Divider from './components/Divider';

function App() {
  return (
    <div className="app">
      <Navbar />
      <AboutSection />
      <Divider />
    </div>
  )
}

export default App
