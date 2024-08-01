import styled from 'styled-components';
import bannerImg from '../assets/theme/banner1.svg';
import 'animate.css';

const Banner = () => {
  return (
    <Wrapper className='section'>
      <section className='banner-container' data-aos='fade-up'>
        <div className='banner-center'>
          <div className='banner-txt'>
            <h1 className='banner-title'>Hi, I'm Abir</h1>
            <div className='typed-out-wrapped'>
              <div className='typed-out'>A front end developer</div>
            </div>
            <p className='banner-subtitle'>
              I love building stuffs that enhance a better service.
            </p>
            <div className='banner-btn-wrapped'>
              <a
                href='../../public/Resume.pdf'
                download
                className='btn banner-btn hvr-radial-in'
              >
                download resume
              </a>
            </div>
          </div>
          <div className='banner-img-wrapped'>
            <img src={bannerImg} className='banner-img' />
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .banner-container {
    max-width: 80vw;
    margin: 0 auto;
  }

  .banner-title {
    font-size: 2.6rem;
  }

  .typed-out-wrapped {
    display: inline-block;
  }

  .typed-out {
    overflow: hidden;
    border-right: 0.15em solid var(--mainColor);
    white-space: nowrap;
    animation: typing 2.5s steps(50, end) forwards, blinking 1.2s infinite;
    font-size: 2.6rem;
    background: linear-gradient(to right, #00a838, #228132, #1d6943, #339171);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-weight: 600;
    padding-right: 10px;
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes blinking {
    from {
      border-color: transparent;
    }
    to {
      border-color: var(--mainColor);
    }
  }

  .banner-subtitle {
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.2;
    width: 100%;
    margin-bottom: 10px;
  }

  .btn {
    display: inline-block;
    color: var(--mainColor);
    font-size: 1.1rem;
    font-weight: 500;
    border: 2px solid var(--mainColor);
    border-radius: 5px;
    padding: 6px 10px;
    transition: background 0.3s ease-in, color 0.3s ease-in;
    text-transform: capitalize;
  }

  .banner-img {
    width: 100%;
  }

  .banner-center {
    height: 80vh;
  }

  @media screen and (min-width: 769px) {
    .banner-center {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .banner-img {
      max-width: 500px;
    }
    .banner-center {
      margin-bottom: 10rem;
    }
  }

  @media screen and (max-width: 768px) {
    .banner-container {
      max-width: 90vw !important;
      margin: 0 auto;
    }
    section .banner-title {
      font-size: 1.7rem !important;
    }
    section .typed-out {
      font-size: 1.7rem !important;
    }
    section .banner-subtitle {
      font-size: 1.1rem !important;
    }
    .banner-container {
      padding-top: 9rem !important;
    }
  }

  @media screen and (max-width: 600px) {
    section .banner-subtitle {
      padding-top: 3px;
      padding-bottom: 5px;
    }
  }

  @media screen and (max-width: 950px) {
    .banner-center {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .banner-img {
      max-width: 420px;
    }
    .banner-container {
      padding-top: 6rem;
    }
  }

  @media screen and (max-width: 1380px) {
    .banner-img {
      max-width: 400px;
    }
    .banner-title {
      font-size: 2rem !important;
    }
    .typed-out {
      font-size: 2rem !important;
    }
  }
`;

export default Banner;
