import styled from 'styled-components';
import { Link } from 'react-router-dom';

// remove
import '../test.css';

const About = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Wrapper className='section'>
      <section className='about-container'>
        <h1 className='about-title' data-aos='fade-down-left'>
          Hello, Hola, Bonjour!
        </h1>
        <div className='about-text-container' data-aos='fade-down-right'>
          <div className='about-text-wrapper'>
            <p className='about-text'>
              Hi, I'm Abir, a front-end web developer based in Bangladesh,
              currently pursuing my high school education. I began my web
              development journey in 2021 during the height of the COVID-19
              pandemic, driven by a strong passion for coding. Over time, coding
              has grown into one of my favorite hobbies. I specialize in
              crafting websites that provide excellent usability and serve a
              meaningful purpose. Recently, I’ve also started expanding my
              knowledge into backend development to further enhance my skills
            </p>
            <div id='abt-btn'>
              <Link to='/about' className='about-btn' onClick={scrollToTop}>
                <span className='about-icon'>
                  <i className='fa-regular fa-circle-right'></i>
                </span>
                <span className='about-link'>learn more</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .about-container {
    background: var(--mainColor);
    min-height: auto;
    padding-bottom: 150px;
    overflow-x: hidden;
  }
  .about-title {
    color: #fff;
    font-size: 3rem;
    font-weight: 600;
    text-align: center;
    padding-top: 20px;
  }
  .about-text {
    color: #fff;
    line-height: 1.7;
    font-size: 1.1rem;
    font-weight: 400;
  }
  .about-text-wrapper {
    max-width: 50vw;
    margin: 0 auto;
    text-align: center;
    padding-top: 16px;
    padding-bottom: 50px;
  }
  .about-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    margin-top: 26px;
    transition: color 0.2s ease-in-out;
  }
  .about-icon {
    font-size: 2rem;
  }
  .about-link {
    text-transform: capitalize;
    padding-left: 8px;
  }
  .about-btn:hover {
    color: rgb(221, 221, 221);
  }
  #abt-btn {
    display: inline-block;
  }

  @media screen and (max-width: 600px) {
    .about-text-wrapper {
      max-width: 95vw !important;
      margin: 0 auto !important;
      padding-bottom: 20px;
      text-align: left;
    }
    .about-title {
      text-align: left;
      font-size: 1.8rem;
      max-width: 90vw;
      margin: 0 auto;
    }
    .about-text {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 800px) {
    .about-text-wrapper {
      max-width: 90vw !important;
      margin: 0 auto !important;
    }
  }

  @media screen and (max-width: 1300px) {
    .about-text-wrapper {
      max-width: 60vw;
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 1000px) {
    .about-text-wrapper {
      max-width: 70vw;
      margin: 0 auto;
    }
  }
`;

export default About;
