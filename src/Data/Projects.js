import spotifyStats from '../assets/projects/spotifyProfile.png';
import store from '../assets/projects/caesers.png';
import github from '../assets/projects/github2.png';

const Data = [
  {
    id: 1,
    title: 'Spotify Profile Stats',
    desc: `visualize the data of user's spotify activity. View Top Artist, Top Tracks, Playlists, Recently Played Tracks and more`,
    stacks: [
      'React',
      'React-Router',
      'Axios',
      'Netlify Functions',
      'Styled-Components',
      'Spotify REST Api',
    ],
    img: spotifyStats,
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
      'Stripe for payment',
      'Auth0 for authentication',
    ],
    img: store,
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
    img: github,
    background: `linear-gradient(
    120deg,
    rgba(172, 207, 108, 0.25) 0%,
    rgba(172, 207, 108, 0.25) 90%
  )`,
  },
];
