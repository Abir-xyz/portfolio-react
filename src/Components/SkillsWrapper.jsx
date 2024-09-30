import styled from 'styled-components';
import skillsData from '../Data/Skills';
import certificateOne from '../assets/skillsPng/certificate.png';
import certificateTwo from '../assets/skillsPng/certificate2.png';

const SkillsWrapper = () => {
  return (
    <Wrapper className='section'>
      <section className='aboutPage-container'>
        <article className='abt-header'>
          <div
            className='abt-header-title-wrapper animate__animated animate__bounceIn'
            id='header-title'
          >
            <h1 className='abt-header-title' id='about'>
              About
            </h1>
            {/* <p className='abt-header-text'>front end developer</p> */}
          </div>
        </article>
        <section className='abt-skills'>
          <div className='abt-skills-header'>
            <h1 className='abt-skills-title'>Skills</h1>
            <p className='abt-skills-text'>
              Here's all the things i learned so far
            </p>
          </div>
          <article className='abt-skill-center'>
            {skillsData.map((item) => {
              return (
                <div key={item.id} className='skills-wrapper'>
                  <div>
                    <img src={item.img} className='skill-img' />
                  </div>
                  <div>
                    <p className='skill-title'>{item.title}</p>
                  </div>
                </div>
              );
            })}
          </article>

          <article className='cSection'>
            <div className='cSection-title'>
              <h1>Online Certificates</h1>
            </div>
            <article className='cSection-center'>
              <div className='c-container'>
                <div className='cSection-wrapper'>
                  <a
                    href='https://www.freecodecamp.org/certification/fccc434ccd8-0264-49f0-ac84-f9dd404642cf/responsive-web-design'
                    target='_blank'
                  >
                    <img src={certificateOne} className='c-img' />
                  </a>
                </div>
                <div className='cSection-wrapper'>
                  <a
                    href='https://www.freecodecamp.org/certification/fccc434ccd8-0264-49f0-ac84-f9dd404642cf/javascript-algorithms-and-data-structures-v8'
                    target='_blank'
                  >
                    <img src={certificateTwo} className='c-img' />
                  </a>
                </div>
              </div>
            </article>
          </article>
        </section>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .abt-header {
    overflow: hidden !important;
  }
  .abt-header-title-wrapper {
    text-align: center;
    margin: 3rem 0;
  }
  .abt-header-title {
    color: var(--mainColor);
    font-size: 2.2rem;
    font-weight: 600;
  }
  .abt-header-text {
    font-size: 1rem;
    font-weight: 500;
  }

  .abt-skills {
    max-width: 80vw;
    margin: 0 auto;
  }
  .abt-skills-title {
    color: var(--mainColor);
    font-size: 1.7rem;
    font-weight: 500;
  }
  .abt-skills-text {
    font-weight: 400;
  }
  .skill-img {
    width: 40px;
    height: 40px;
  }
  .abt-skill-center {
    margin: 40px 0;
  }
  .skill-title {
    text-transform: capitalize;
  }

  .cSection {
    max-width: 80vw;
    margin: 0 auto;
  }

  .cSection-title h1 {
    color: var(--mainColor);
    font-weight: 500;
    font-size: 1.5rem;
  }

  .c-img {
    width: 100%;
  }

  .cSection-center {
    margin-top: 50px;
  }

  .cSection-wrapper {
    margin: 10px 0;
  }

  @media screen and (min-width: 768px) {
    .abt-skill-center {
      display: grid;
      gap: 2rem 1rem;
      grid-template-columns: repeat(6, 1fr);
    }
    .skills-wrapper {
      text-align: center;
    }
    .c-container {
      display: flex;
      align-items: center;
      justify-content: space-around;
      max-width: 80vw;
      margin: 0 auto;
      flex-wrap: wrap;
    }
    .cSection-wrapper img {
      max-width: 400px !important;
    }
  }

  @media screen and (max-width: 767px) {
    .skills-wrapper {
      text-align: center;
      padding: 1rem;
    }
    .abt-skill-center {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
    .cSection-wrapper img {
      width: 100%;
      max-width: 350px;
    }
    .cSection-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .cSection-wrapper img {
    width: 100%;
    padding: 1rem;
  }
`;

export default SkillsWrapper;
