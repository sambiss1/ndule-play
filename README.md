<br />
<div align="center">
  <a href="https://github.com/sambiss1/ndule-play">
    <img src="./public/Ndule-play-logo-final.png" alt="Logo">
  </a>

  <p align="center">
    NDULE PLAY
    <br />
    <a href="https://github.com/sambiss1/ndule-play"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <!--
    .
    <a href="https://mentor4job-dev.onrender.com/">View Develop</a>
    ·
    <a href="https://mentor4job.kinshasadigital.academy/">View Production</a>
    ·
    -->
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  
  </ol>
</details>


## About The projet

NDULE PLAY is a web streaming application developed at the [Kadea Academy](https://kadea.academy/) as a learning project for the react framework. The project uses the Spotify API to allow users to connect to their Spotify account and stream from the application, which works like a third-party application.

### Used technologies

- [ReactJS](https://react.dev/)
- [SASS](https://sass-lang.com/)
- [React-Icons](https://react-icons.github.io/react-icons/)

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

To run this project on your computer you will need the following tools

- [NodeJs >14](https://nodejs.org/fr/download/package-manager/)
- [NPM >8](https://www.npmjs.com/package/npm/v/6.14.14)


- Create an .env file for the environment variables with the following parameters: 

    For the development mode, create this variable: 
  - REACT_APP_DEV_MODE_REDIRECT_URI = [your_localhost_redirect_url](http://localhost:3000/)

    For the production mode you need : 
  - REACT_APP_PRO_MODE_REDIRECT_URI = [your_online_redirect_url](https://ndule-play-by-sam.vercel.app/)


### Installation


1. Clone the repo

```sh
git clone https://github.com/sambiss1/ndule-play

```

2. Change directory

```sh
cd ndule-play

```

3. Install packages

```sh
npm install
```

4. Start project

```bash
npm run dev
```

You can start working
