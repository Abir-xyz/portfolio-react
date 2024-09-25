import styled from 'styled-components';
import SingleProject from '../Components/SingleProject';

const Projects = () => {
  return (
    <Wrapper className='section'>
      <div className='container'>
        <SingleProject />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  * {
    max-width: 80vw;
    margin: 0 auto;
  }
  .project-page-container {
    min-height: 100vh;
  }
  .container {
    margin-top: 100px;
  }

  @media screen and (max-width: 800px) {
    section .project-btn {
      margin: 0 !important;
    }
  }
`;

export default Projects;
