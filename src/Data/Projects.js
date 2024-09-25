import imgOne from '../assets/projects/project-spotify.png';
import imgTwo from '../assets/projects/project-github-2.png';
import imgThree from '../assets/projects/project-store.png';

const Data = [
  {
    id: 1,
    title: 'Spotify Profile Insights',
    desc: `Visualize the data of user's spotify activity. View Top Artist, Top Tracks, Playlists, Recently Played Tracks and more`,
    stacks: [
      'React',
      'React-Router',
      'Axios',
      'Netlify Functions',
      'Styled-Components',
      'Spotify REST Api',
    ],
    img: imgOne,
    background: `linear-gradient(
    120deg,
    rgba(255, 127, 212, 0.25) 0%,
    rgba(255, 127, 212, 0.25) 90%
  )`,
  },
  {
    id: 2,
    title: `Caeser's Pizza Store`,
    desc: `A modern web-based platform built with React. It offers users a sleek, fast, and responsive interface to browse a variety of pizzas, place orders, and manage their carts.`,
    stacks: [
      'React',
      'React-Router',
      'Axios',
      'Netlify Functions',
      'Styled-Components',
      'Stripe',
      'Auth0',
    ],
    img: imgThree,
    background: `linear-gradient(
    120deg,
    rgba(14, 174, 87, 0.25) 0%,
    rgba(12, 116, 117, 0.25) 90%
  )
  )`,
  },
  {
    id: 3,
    title: `Github User's Info`,
    desc: `Provides users with insights and analytics on their GitHub repositories and activity.`,
    stacks: [
      'React',
      'React-Router',
      'Axios',
      'Netlify Functions',
      'Styled-Components',
      'Github REST Api',
      'Auth0',
    ],
    img: imgTwo,
    background: `linear-gradient(
    120deg,
    rgba(172, 207, 108, 0.25) 0%,
    rgba(172, 207, 108, 0.25) 90%
  )`,
  },
];

export default Data;
