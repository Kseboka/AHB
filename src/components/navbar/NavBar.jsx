import { useState, useEffect } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import Link from '../../shared/Link'
import './navbar.css'

const NavBar = () => {
  const [hideNav, setHideNav] = useState(true)
  const [scrollNav, setScrollNav] = useState(false)

  useEffect(() => {
    if (hideNav === false) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'scroll'
    }
  }, [hideNav])

  window.addEventListener('scroll', () => {
    if (window.scrollY >= 20) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  })

  return (
    <nav>
      <div className={`navbar align-layout ${scrollNav && 'active'}`} id={!hideNav ? 'navbar-alt' : ''}>
        <div className='nav-links' id={hideNav ? 'hidden' : ''}>
          <Link type='text-link' link='/services'>
            SERVICES
          </Link>
          <Link type='text-link' link='/about'>
            ABOUT
          </Link>
          <Link type='text-link' link='/contact'>
            CONTACT
          </Link>
        </div>
        <div className='nav-logo-container nav-logo_toggle-container align-layout'>
          <h1 className='nav-logo'>
            <a href='/'>AHB</a>
          </h1>
          <button
            className='nav-toggle'
            onClick={() => {
              setHideNav(!hideNav)
            }}
          >
            <MenuIcon fontSize='large' />
          </button>
        </div>
        <div className='nav-btn' id={hideNav ? 'hidden' : ''}>
          <Link type='btn-link'>Book Now</Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
