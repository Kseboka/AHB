import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import '../footer/footer.css'

const Footer = () => {
  return (
    <footer>
      <div className='footer-container align-layout'>
        <div className='footer-socials'>
          <a href='https://www.facebook.com'>
            <FacebookIcon sx={{ fontSize: 30 }} />
          </a>
          <a href='https://www.instagram.com'>
            <InstagramIcon sx={{ fontSize: 30 }} />
          </a>
          <a href='https://www.twitter.com'>
            <TwitterIcon sx={{ fontSize: 30 }} />
          </a>
        </div>
        <div className='footer-contact'>
          <a href='tel:+1 6124990719'>612-499-0719</a>
          <span>|</span>
          <a href='mailto:abayshairbraiding@gmail.com'>abayshairbraiding@gmail.com</a>
          <span>|</span>
          <address>1931 S 5th St, Minneapolis, MN 55454</address>
        </div>
        <p className='copyright'>Copyright 2022</p>
        <p>Made by Kalkidan Seboka</p>
      </div>
    </footer>
  )
}

export default Footer
