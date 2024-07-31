import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SkillsDivider = () => {
  return (
    <Wrapper className='section'>
      <section className='skills'>
        <div class='skills-center'>
          <div class='skills-title-wrapper'>
            <h1 class='skills-title'>Tech Stacks</h1>
          </div>
          <div class='skills-main-wrapper'>
            <div class='skill-child'>
              <p class='skills-img-title'>Html5</p>
            </div>
            <div class='skill-child'>
              <p class='skills-img-title'>Css3</p>
            </div>
            <div class='skill-child'>
              <p class='skills-img-title'>Javascript</p>
            </div>
            <div class='skill-child'>
              <p class='skills-img-title'>TypeScript</p>
            </div>
            <div class='skill-child'>
              <p class='skills-img-title'>React.Js</p>
            </div>
            <div class='skill-child'>
              <p class='skills-img-title'>More...</p>
            </div>
          </div>
          <div class='skills-btn-wrapper'>
            <Link to='/about' class='skill-btn'>
              Here's All
            </Link>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .skills {
    max-width: 90vw;
    margin: 0 auto;
    padding: 30px;
    border: 1px solid #ebebee;
    text-align: center;
    margin-top: -120px;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    background: #fff;
  }
  .skills-title {
    text-transform: capitalize;
    font-size: 1.5rem;
    color: var(--mainColor);
    font-weight: 600;
  }
  .skills-title-wrapper {
    padding-bottom: 20px;
  }

  .skill-child {
    flex: 0 0 calc(33.3%);
    padding: 7.5px 0;
  }
  .skills-img-title {
    /* text-transform: capitalize; */
    font-weight: 500;
    font-size: 1rem;
    padding: 0 1.1rem;
  }
  .skill-btn {
    text-transform: capitalize;
    color: var(--mainColor);
    font-weight: 500;
    border: 2px solid var(--mainColor);
    padding: 6px 30px;
    border-radius: 5px;
    transition: var(--hoverTime);
  }
  .skill-btn:hover {
    background: var(--mainColor);
    color: var(--textWhite);
  }
  .skill-more-text {
    color: var(--mainColor);
  }
  .skill-more-icon {
    padding: 0 !important;
    margin-top: 5px;
    color: var(--mainColor);
  }

  @media screen and (max-width: 768px) {
    .skills-btn-wrapper {
      margin-top: 20px;
    }
  }

  @media screen and (min-width: 768px) {
    .skills-center {
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-wrap: wrap;
    }
    .skills-title-wrapper {
      padding: 0 !important;
    }
    .skills {
      padding: 50px 0;
    }
    .skills-img-title {
      font-size: 1.1rem;
      padding: 10px !important;
    }
    .skill-child {
      flex: 0 0 calc(0);
    }
    .skills-main-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-wrap: wrap;
    }
  }
`;

export default SkillsDivider;
