import './App.css';
import Header from './components/header/Header';
import Home from './components/home/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Portfolio from './components/portfolio/portfolio';
import Contact from './components/contact/contact';
import Qualification from './components/qualification/Qualification';
function App() {
  return (
    <Router>
        <div className='absolute' >
       
        <div>
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/career" element={<Qualification />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <div class="absolute inset-0 justify-center">
          <div class="bg-shape1 bg-teal opacity-50 bg-blur"></div>
          <div class="bg-shape2 bg-primary opacity-50 bg-blur"></div>
          <div class="bg-shape1 bg-purple opacity-50 bg-blur"></div>
        </div>
        </div>
        
    </Router>
    // <>
    // <Header/>
    // <main className='main'>
    //   <Home/>
    // </main>
    // </>
  );
}

export default App;
