import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Projects_Home = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Wrapper className='section'>
      <section className='projects-container'>
        <div className='project-header'>
          <h1 className='project-header-title'>Featured</h1>
          <p className='project-header-text'>
            Here is some of my featured projects
          </p>
        </div>
        {/* mappin here  */}
        <div className='project-next-container'>
          <Link
            to='/projects'
            className='pn-btn hvr-radial-in'
            onClick={scrollToTop}
          >
            Show all projects
          </Link>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .projects-container {
    max-width: 90vw;
    margin: 0 auto;
    padding: 50px 20px;
    min-height: 100vh;
  }
  .project-header {
    padding: 50px 0;
    text-align: center;
  }
  .project-header-title {
    font-size: 8rem;
    font-weight: 600;
    background: linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #eedd44);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
  .project-header-text {
    font-size: 1rem;
  }

  .project-next-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
  }
  .pn-btn {
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--mainColor);
    background-color: transparent;
    padding: 8px 20px;
    border-radius: 5px;
    border: 2px solid var(--mainColor);
    transition: all 0.3s ease-in-out;
  }
  .pn-btn:hover {
    background-color: var(--mainColor);
    color: var(--textWhite);
  }

  @media screen and (max-width: 768px) {
    .project-header-title {
      font-size: 4.4rem;
    }
  }

  @media screen and (max-width: 600px) {
    .project-header-title {
      font-size: 3rem;
    }
  }
`;

export default Projects_Home;
