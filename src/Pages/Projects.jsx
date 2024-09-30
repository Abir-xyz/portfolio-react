import styled from 'styled-components';
import SingleProject from '../Components/SingleProject';

const Projects = () => {
  return (
    <Wrapper className='section'>
      <div className='container'>
        <div
          className='project-header animate__animated animate__bounceIn'
          id='header-title'
        >
          <h1>Featured Works</h1>
        </div>
        <SingleProject />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    max-width: 80vw;
    margin: 0 auto;
    overflow: hidden !important;
  }
  .project-header {
    margin-top: 3rem;
    text-align: center;
    h1 {
      font-size: 2.2rem;
      font-weight: 600;
      color: var(--mainColor);
      margin-bottom: 3rem;
    }
  }

  @media screen and (max-width: 800px) {
    section .project-btn {
      margin: 0 !important;
    }
  }
`;

export default Projects;
