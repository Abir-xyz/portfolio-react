import { Link } from 'react-router-dom';
import styled from 'styled-components';
import errorImg from '../assets/theme/error.svg';

const Error = () => {
  return (
    <Wrapper className='section'>
      <section className='page-wrapper'>
        <div className='page-center'>
          <div className='page'>
            <div className='img-wrapper'>
              <img src={errorImg} alt='image' className='img' />
            </div>
            <p>your page was not found!</p>
            <Link to='/' className='page-link'>
              go home
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

  .page-center{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  .img-wrapper {
    margin-bottom: 1.6rem;
  }

  .img {
    display: block;
    width: 100%;
  }

  .page p {
    text-transform: capitalize;
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: 1rem;
    text-align: center;
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

export default Error;
