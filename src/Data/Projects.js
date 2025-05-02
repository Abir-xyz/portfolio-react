import imgOne from '../assets/projects/spotify-iphone.png';
import imgTwo from '../assets/projects/github-iphone.png';
import imgThree from '../assets/projects/res-iphone.png';
import imgFour from '../assets/projects/movie-phone.png';

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
    href: 'https://github.com/Abir-xyz/spotify-stats-react',
    site: 'https://spotify-wrap.netlify.app',
    background: `linear-gradient(
    120deg,
    rgba(255, 127, 212, 0.1) 0%,
    rgba(255, 127, 212, 0.8) 90%
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
    href: 'https://github.com/Abir-xyz/caeser-s-pizza-store-react',
    site: 'https://caeserpizzastore.netlify.app',
    background: `linear-gradient(
    120deg,
    rgba(14, 174, 87, 0.1) 0%,
    rgba(12, 116, 117, 0.8) 90%
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
    href: 'https://github.com/Abir-xyz/github-users',
    site: 'https://githubstatistics.netlify.app',
    background: `linear-gradient(
    120deg,
    rgba(172, 207, 108, 0.1) 0%,
    rgba(172, 207, 108, 0.8) 90%
  )`,
  },
  {
    id: 4,
    title: `Movie Streaming`,
    desc: `A web-based streaming platform that allows users to watch movies and TV shows directly from their browser.`,
    stacks: [
      'React',
      'React-Router',
      'Axios',
      'Styled-Components',
      'TMDB & Vidsrc API',
      'Auth0',
    ],
    img: imgFour,
    href: 'https://github.com/Abir-xyz/moviedekhbo-frontend',
    site: 'https://moviedekhbo.netlify.app/',
    background: `linear-gradient(
    120deg,
    rgba(68, 143, 184, 0.1) 0%,
    rgba(116, 164, 190, 0.8) 90%
  )`,
  },
];

export default Data;
