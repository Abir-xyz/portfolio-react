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
              style={{ background: item.background }}
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
                      return (
                        <span className='stack' key={stack}>
                          {stack}{' '}
                        </span>
                      );
                    })}
                  </p>
                  <div className='btn-wrapper'>
                    <a className='project-btn' href={item.href} target='_0'>
                      View Source
                    </a>
                    <a className='project-btn' href={item.site} target='_0'>
                      View Site
                    </a>
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
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
  .center {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
  .img-wrapper {
    text-align: center;
  }
  .img {
    width: 280px;
    border-radius: 5px;
    margin-bottom: 16px;
    /* box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px; */
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
    justify-content: space-around;
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
    border: 1px solid #000;
    color: #000;
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
