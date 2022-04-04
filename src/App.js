import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import About from './pages/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Link from './shared/Link'
function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='/*' />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
