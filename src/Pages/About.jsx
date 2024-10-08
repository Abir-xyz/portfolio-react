import SkillsWrapper from '../Components/SkillsWrapper';
import styled from 'styled-components';

const About = () => {
  return (
    <Wrapper className='section'>
      <main className='about-main'>
        <SkillsWrapper />
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .about-main {
    min-height: 100vh;
  }
`;

export default About;
