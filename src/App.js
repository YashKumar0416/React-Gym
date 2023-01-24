import "./index.css"
import Navbar from './components/Navbar'
import Header from './components/Header';
import Feature from './components/Feature';
import Offer from './components/Offer'
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
        <div className='header'>
        <Navbar />
        <Header />
        <Feature />
        <Offer />
        <About />
        <Contact />
        </div>
  )
}

export default App;