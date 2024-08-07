import '../Css/navbar.css';
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const body = document.querySelector('body');

const Navbar = () => {
  const [navEnter, setNavEnter] = useState(false);
  const [navExit, setNavExit] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [darkBtn, setDarkBtn] = useState(true);
  const [lightBtn, setLightBtn] = useState(false);

  // navbar dark/light mode
  const handleDarkBtn = () => {
    setDarkBtn(false);
    setLightBtn(true);
    switchToDark();
  };

  const handleLightBtn = () => {
    setLightBtn(false);
    setDarkBtn(true);
    switchToLight();
  };

  // navbar toggler
  const handleNavEnter = () => {
    setNavEnter(true);
    setNavExit(true);
  };

  const handleNavExit = () => {
    setNavExit(false);
    setNavEnter(false);
  };

  // fixed navbar on smaller screen
  {
    if (navEnter) {
      body.classList.add('unScroll');
    } else {
      body.classList.remove('unScroll');
    }
  }

  // goes on top
  const scrollToTop = (e) => {
    let targetLocation = e.target.href;
    window.targetLocation.reload();
    handleNavExit();
    window.scrollTo(0, 0);
  };

  // fixed nav on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    {
      if (darkMode === 'yes') {
        setLightBtn(true);
        setDarkBtn(false);
      }
    }
  }, [darkMode]);

  return (
    <section className={`navbar-container ${isFixed ? 'fixed-nav' : ''} `}>
      <div className='navbar-center'>
        <div className='navbar-brand'>
          <div className='navbar-logo'>
            <Link to='/' className='navbar-logo' onClick={scrollToTop}>
              abir
            </Link>
          </div>
          <div className='navbar-togglers'>
            <button
              type='button'
              className={`mood-changeBtn dark-btn ${
                darkBtn ? 'show' : 'hide'
              } `}
              onClick={handleDarkBtn}
            >
              <span>
                <i className='fa-solid fa-moon'></i>
              </span>
            </button>
            <button
              type='button'
              className={`mood-changeBtn light-btn ${
                lightBtn ? 'show' : 'hide'
              } `}
              onClick={handleLightBtn}
            >
              <span>
                <i className='fa-solid fa-sun'></i>
              </span>
            </button>
            <button
              type='button'
              className={`toggler-btn nav-enter ${
                navEnter ? 'hideBtn' : 'showBtn'
              } `}
              onClick={handleNavEnter}
            >
              <span>
                <i className='fa-solid fa-bars-staggered'></i>
              </span>
            </button>
            <button
              type='button'
              className={`toggler-btn nav-exit ${
                navExit ? 'showBtn' : 'hideBtn'
              } `}
              onClick={handleNavExit}
            >
              <span>
                <i className='fa-solid fa-xmark'></i>
              </span>
            </button>
          </div>
        </div>
        <div className={`navbar-links  ${navEnter ? 'show-links' : ''} `}>
          <div className='navbar-links-center'>
            <NavLink to='/' className='navbar-link' onClick={scrollToTop}>
              Home
            </NavLink>
            <NavLink to='/about' className='navbar-link' onClick={scrollToTop}>
              About
            </NavLink>
            <NavLink
              to='/projects'
              className='navbar-link'
              onClick={scrollToTop}
            >
              Projects
            </NavLink>
            <NavLink
              to='/contact'
              className='navbar-link'
              onClick={scrollToTop}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

// switch dark / light mode
const content = document.querySelector('body');

const switchToDark = () => {
  content.classList.add('dark-mode');
  localStorage.setItem('nightMode', 'yes');
};

const switchToLight = () => {
  content.classList.remove('dark-mode');
  localStorage.setItem('nightMode', 'no');
};

let darkMode = localStorage.getItem('nightMode');

if (darkMode === 'yes') {
  switchToDark();
} else {
  switchToLight();
}

export default Navbar;
