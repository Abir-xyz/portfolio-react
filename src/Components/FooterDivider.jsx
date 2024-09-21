import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterDivider = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Wrapper className='section'>
      <section className='footer-divider-container'>
        <div className='section-contact-center' data-aos='fade-down'>
          <div className='section-contact-wrapper'>
            <h1 className='section-contact-title'>Hey let's talk!</h1>
          </div>
          <div className='section-contact-wrapper'>
            <p className='section-contact-text'>
              Every great project starts with a vision. Let’s work together to
              turn that vision into reality
            </p>
          </div>
          <div className='section-contact-wrapper'>
            <div className='footer-btn-wrapper'>
              <Link to='/contact' className='footer-btn' onClick={scrollToTop}>
                Let's do it
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .footer-divider-container {
    max-width: 90vw;
    margin: 0 auto;
    transform: translateY(70px);
  }

  .section-contact-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--mainColor);
  }
  .section-contact-text {
    line-height: 1.3;
    padding-bottom: 16px;
    text-align: center;
    font-weight: 500;
  }
  .footer-btn {
    color: var(--mainColor);
    font-weight: 500;
    padding: 6px 14px;
    border-radius: 5px;
    border: 2px solid var(--mainColor);
    transition: all 0.3s ease-in-out;
  }
  .footer-btn:hover {
    color: #fff;
    background: var(--mainColor);
  }
  .section-contact-center {
    text-align: center;
    background: #fff;
    border: 1px solid #ebebee;
    padding: 40px 20px;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  @media screen and (min-width: 768px) {
    .section-contact-center {
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-wrap: wrap;
    }
    .section-contact-text {
      width: 75%;
      padding-bottom: 0px;
      margin: 12px auto;
      font-size: 1.1rem;
    }
    .section-contact-title {
      padding-bottom: 0px;
    }
  }
  @media screen and (max-width: 600px) {
    .section-contact-text {
      margin-top: 10px;
      margin-bottom: 5px;
      text-align: center;
      font-size: 1rem;
    }
    .section-contact-center {
      padding: 26px 16px;
      text-align: center;
    }
    .footer-btn {
      padding: 4px 10px;
      border-radius: 5px;
    }
    .section-contact-title {
      font-size: 1.3rem;
    }
  }
`;

export default FooterDivider;
