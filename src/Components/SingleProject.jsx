import styled from 'styled-components';
import Data from '../Data/Projects';

const SingleProject = () => {
  return (
    <Wrapper className='section'>
      <div className='wrapper'>
        {Data.map((item) => {
          return (
            <div
              className='project-wrapper'
              key={item.id}
              backgroundColor={item.background}
            >
              <div className='center'>
                <div className='img-wrapper'>
                  <img src={item.img} className='img' />
                </div>
                <div className='txt-wrapper'>
                  <h1 className='name'>{item.title}</h1>
                  <p className='desc'>{item.desc}</p>
                  <p className='stacks'>
                    {item.stacks.map((stack) => {
                      return <span className='stack'>{stack} </span>;
                    })}
                  </p>
                  <div className='btn-wrapper'>
                    <button className='project-btn'>View Source</button>
                    <button className='project-btn'>View Site</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .project-wrapper {
    margin: 36px 0;
  }
  .center {
    border: 1px solid grey;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 10px;
  }
  .img-wrapper {
    text-align: center;
  }
  .img {
    width: 280px;
    border-radius: 5px;
    border: 3px solid grey;
    margin-bottom: 16px;
  }
  .name {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 16px;
  }
  .desc {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 16px;
  }
  .btn-wrapper {
    margin-top: 26px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .stack {
    font-size: 0.9rem;
    border: 1px solid;
    border-radius: 10rem;
    padding: 2px 5px;
    margin: 5px 4px;
  }

  .stacks {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .project-btn {
    margin-right: 10px;
    font-size: 1rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    text-transform: capitalize;
    padding: 4px 10px;
    border: 1px solid;
    background: transparent;
    cursor: pointer;
    border-radius: 5px;
    font-weight: 500;
    transition: all 0.2s ease-in-out;
  }

  .project-btn:hover {
    background-color: black;
    color: var(--textWhite);
  }

  @media screen and (min-width: 800px) {
    .center {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      height: 375px;
    }
    .img-wrapper {
      margin-right: 20px;
    }
    .btn-wrapper {
      margin-top: 26px;
      display: block;
    }
    .project-btn {
      margin-right: 30px;
    }
  }
  @media screen and (min-width: 992px) {
    .wrapper {
      max-width: 70vw;
      margin: 0 auto;
    }
  }
  @media screen and (min-width: 1200px) {
    .wrapper {
      max-width: 60vw;
      margin: 0 auto;
    }
  }
  @media screen and (min-width: 1600px) {
    .wrapper {
      width: 830px;
    }
  }
`;

export default SingleProject;
