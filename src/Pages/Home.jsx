import styled from 'styled-components';
import Banner from '../Components/Banner';
import About from '../Components/About';

const Home = () => {
  return (
    <main>
      <Wrapper className='section'>
        <Banner />
        <About />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section``;

export default Home;
