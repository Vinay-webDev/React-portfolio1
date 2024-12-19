import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import ResumePage from './pages/ResumePage.jsx';
import About from './components/About/About.jsx';
import Projects from './components/Projects/Projects.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== '/vinayhc.pdf' && <Navbar />}
      <Routes>
        <Route path="/vinayhc.pdf" element={<ResumePage />} />
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Projects />
              <Contact />
            </>
          }
        />
      </Routes>
      {location.pathname !== '/vinayhc.pdf' && <Footer />}
    </div>
  );
}

export default App;