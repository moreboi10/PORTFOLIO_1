import {navLinks} from '../constants/index.js'
import { useEffect , useState } from 'react';
import DepthText from './DepthText';
 
const NavBar = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() =>{
    const handleScroll = () =>{
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    }

    window.addEventListener('scroll',handleScroll);

    return () => window.removeEventListener('scroll',handleScroll);
  },[])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          <DepthText
  text="SANKET.dev"
  layers={34}
  depth={2.4}
  faceColor="#f8fafc"
  depthColor="#7c3aed"
  tilt={7.5}
  pointerTracking
  smoothing={0.14}
  perspective={900}
  autoOrbit
  orbitSpeed={0.35}
  fontSize="clamp(3rem, 3vw, 3rem)"
  fontWeight={900}
  shadow
/>
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({link,name}) =>(
              <li key={name} className='group'>
                <a href={link}>
                  <span>{name}</span>
                  <span className='underline'/>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>

      </div>

    </header>
  )
}

export default NavBar
