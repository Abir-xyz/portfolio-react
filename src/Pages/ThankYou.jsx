import { Link } from 'react-router-dom';
import styled from 'styled-components';
import successImg from '../assets/theme/success.svg';

const ThankYou = () => {
  return (
    <Wrapper className='section'>
      <section className='page-wrapper'>
        <div className='page-center'>
          <div className='page'>
            <div className='img-wrapper'>
              <img src={successImg} alt='image' className='img' />
            </div>
            <div className='txt-wrapper'>
              <p>your form has been submitted. expect updates soon!</p>
            </div>
            <Link to='/contact' className='page-link'>
              go back
            </Link>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .page-wrapper {
    min-height: 100vh;
    max-width: 90vw;
    margin: 0 auto;
  }
  .page {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  .txt-wrapper {
    text-transform: capitalize;
    font-size: 1.1rem;
    margin: 2rem 0;
  }

  .page-center {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  .img {
    display: block;
    width: 100%;
    height: 500px;
  }

  .page-link {
    text-transform: capitalize;
    font-size: 1.2rem;
    color: var(--textWhite);
    font-weight: 600;
    background-color: var(--mainColor);
    padding: 8px 16px;
    border: 2px solid var(--mainColor);
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
  }
  .page-link:hover {
    background-color: transparent;
    color: var(--mainColor);
  }
`;

export default ThankYou;
