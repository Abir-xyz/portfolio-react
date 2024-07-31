import styled from 'styled-components';
import Banner from '../Components/Banner';
import About from '../Components/About';
import SkillsDivider from '../Components/SkillsDivider';
const Home = () => {
  return (
    <main>
      <Wrapper className='section'>
        <Banner />
        <About />
        <SkillsDivider />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section``;

export default Home;
