import styled from 'styled-components';
import contactImg from '../assets/theme/contact.svg';
import { useState } from 'react';

const Contact = () => {
  return (
    <Wrapper className='section'>
      <section className='contact'>
        <div className='contact-header animate__animated animate__bounceIn'>
          <h1 className='contact-header-title' id='form'>
            Contact
          </h1>
          <p className='contact-header-text' id='contact-top'>
            Write me a message!
          </p>
        </div>

        <div className='contact-center'>
          <div className='contact-gif-wrapper'>
            <img src={contactImg} className='contact-img' />
          </div>
          <div className='contact-form-wrapper'>
            <div className='form-wrapper'>
              <form
                action='https://api.web3forms.com/submit'
                method='POST'
                className='contact_form'
                id='form'
              >
                <input
                  type='hidden'
                  name='access_key'
                  value='3fe1639b-a9af-4450-b865-e75653124c43'
                />
                <input
                  type='hidden'
                  name='redirect'
                  value='https://abirr.netlify.app/thankyou'
                />
                <input
                  type='hidden'
                  name='from_name'
                  value='abirr.netlify.app'
                />
                <input
                  type='text'
                  name='name'
                  placeholder='Name'
                  className='form-control form-name'
                  required
                />
                <input
                  type='email'
                  name='email'
                  placeholder='Email'
                  className='form-control form-mail'
                  required
                />
                <textarea
                  name='message'
                  cols='15'
                  rows='5'
                  placeholder='Your Message'
                  className='form-control form-text'
                  required
                ></textarea>
                <button type='submit' className='form-btn hvr-radial-in'>
                  submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <article id='contact-links-container'>
        <div id='contact-header'>
          <h1>Find me here</h1>
        </div>
        <div id='contact-mail-wrapper'>
          <p className='contact-title'>{`> send an email`}</p>
          <p className='contact-main'>management.abir@gmail.com</p>
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-img {
    display: block;
    width: 100%;
    max-height: 420px;
  }
  .nav-contact {
    color: var(--mainColor) !important;
  }
  .contact {
    max-width: 90vw;
    margin: 0 auto;
    padding-top: 50px;
  }
  .contact-header {
    text-align: center;
    padding-bottom: 50px;
  }
  .contact-header-title {
    font-size: 2.2rem;
    font-weight: 600;
    color: var(--mainColor);
  }
  .contact-header-text {
    padding-top: 4px;
    font-weight: 400;
  }
  .contact-gif-wrapper img {
    border-radius: 0px;
  }
  .form-control {
    display: block;
    width: 100%;
    padding: 10px 8px;
    margin: 20px 0;
    border: 1px solid #eeee;
    border-radius: 5px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    font-size: 1rem;
    background: transparent;
  }
  .form-control:focus {
    border: 1px solid var(--mainColor);
    outline: none;
  }
  ::placeholder {
    font-size: 1rem;
  }
  .form-btn {
    background: transparent;
    border: none;
    text-transform: capitalize;
    font-family: 'Montserrat', sans-serif !important;
    font-weight: 500 !important;
    font-size: 1rem;
    border: 2px solid var(--mainColor);
    padding: 10px 16px;
    border-radius: 10rem;
    color: var(--mainColor);
    cursor: pointer;
    transition: var(--hoverTime);
    width: 100%;
    margin-top: 10px;
  }
  .form-btn:hover {
    background-color: var(--mainColor);
    color: #fff;
  }

  /* contact social */

  #contact-header h1 {
    font-size: 1.4rem;
    font-weight: 500;
    padding-bottom: 20px;
  }
  #contact-links-container {
    max-width: 80vw;
    margin: 0 auto;
    padding-top: 50px;
  }
  .contact-main {
    color: var(--mainColor);
    padding-top: 4px;
  }
  .contact-more-wrapper h6 {
    padding: 10px 0;
    font-size: 1rem;
    font-weight: 400;
  }
  .fb-ink,
  .ig-ink {
    color: var(--mainColor);
    font-size: 1rem;
  }
  #fb-ink {
    padding-bottom: 10px;
  }

  @media screen and (min-width: 768px) {
    .contact-center {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .contact-gif-wrapper,
    .contact-form-wrapper {
      flex: 0 0 calc(50% - 20px);
    }
  }

  @media screen and (max-width: 650px) {
    #contact-mail {
      font-size: 1.5rem !important;
    }
  }

  @media screen and (max-width: 576px) {
    #contact-mail {
      font-size: 1.2rem !important;
    }
  }
`;

export default Contact;
