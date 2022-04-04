import AboutUs from '../components/AboutUs/AboutUs'
import Hours from '../components/hours/Hours'
import FindUs from '../components/address/FindUs'
import '../styles/AboutPage.css'

const About = () => {
  return (
    <div id='AboutPage' className='align-layout align-y'>
      <AboutUs />
      <div className='about-flex-container'>
        <FindUs />
        <Hours />
      </div>
    </div>
  )
}

export default About
