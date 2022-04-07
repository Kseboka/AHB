import '../hero/hero.css'
import heroImg3 from '../../assets/hero-img-3.jpeg'
import Link from '../../shared/Link'
import { Parallax } from 'react-parallax'
const Hero = () => {
  return (
    <Parallax className='parallax' bgImage={heroImg3} strength={300}>
      <section className='hero-container'>
        <div className='hero'>
          <h1>ABAY'S HAIR BRAIDING</h1>
          <p>FINEST QUALITY BRAIDING</p>
          <div className='hero-cta'>
            <Link type='btn-link_alt'>Book Now</Link>
          </div>
        </div>
      </section>
    </Parallax>
  )
}

export default Hero
