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
  .project-page-container {
    min-height: 100vh;
  }
  .container{
    margin-top: 100px;
  }
`;

export default Projects;
