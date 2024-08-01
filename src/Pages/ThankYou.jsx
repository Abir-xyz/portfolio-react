import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ThankYou = () => {
  return (
    <Wrapper className='section'>
      <section className='page-wrapper'>
        <div className='page-center'>
          <div className='page'>
            <h1>Success!</h1>
            <p>your form has been submitted. expect updates soon</p>
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
    height: 80vh;
  }
  .page h1 {
    font-size: 2.8rem;
    margin-bottom: 0.5rem;
  }
  .page p {
    text-transform: capitalize;
    font-size: 1.3rem;
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

export default ThankYou;
