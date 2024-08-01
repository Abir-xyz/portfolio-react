import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FooterDivider from './FooterDivider';

const Footer = () => {
  return (
    <Wrapper className='section'>
      <FooterDivider />
      <section className='footer-container'>
        <div className='footer-main-center'>
          <div className='footer-main-container'>
            <div className='footer-social-container'>
              <ul className='footer-ul'>
                <li className='footer-li'>
                  <a href='https://github.com/Abir-xyz' target='_blank'>
                    <i className='fa-brands fa-github'></i>
                  </a>
                </li>
                <li className='footer-li'>
                  <a href='#' className='footer-linkedin'>
                    <i className='fa-brands fa-linkedin-in'></i>
                  </a>
                </li>
                <li className='footer-li'>
                  <a href='mailto: management.abir@gmail.com'>
                    <i className='fa-solid fa-envelope'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='footer-main-container'>
            <div className='footer-text-container'>
              <p className='footer-end'>
                &copy; copyright 2024; all rights reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  ul li {
    list-style: none;
  }
  .footer-container {
    background: var(--mainColor);
    padding-top: 200px;
    padding-bottom: 10px;
  }
  .footer-main-center {
    max-width: 90vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .footer-ul {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .footer-li {
    margin: 0 0.7rem;
  }
  .footer-li a {
    font-size: 1.5rem;
    color: #fff;
    border: 2px solid #fff;
    /* padding: 7.4px 10px; */
    padding: 7px 10px;
    border-radius: 50%;
    transition: all 0.2s ease-in;
  }
  .footer-li a:hover {
    color: var(--mainColor);
    background-color: #fff;
  }
  .footer-text-container {
    padding-top: 30px;
    color: rgb(226, 226, 226);
  }
  .footer-email {
    line-height: 1.5;
    padding-top: 8px;
  }
  .footer-email span {
    text-decoration: underline;
    color: #fff;
  }
  .footer-end {
    font-size: 0.8rem;
    margin-top: 10px;
  }
  .footer-linkedin:hover {
    cursor: not-allowed !important;
  }
`;

export default Footer;
