import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

const Home = () => {
  return (
    <div className="page home-page">
      <h1 className="home-page__title">
        Inspiring Next-Generation Innovators Through Ingenious Advancements
      </h1>

      <div className="home-page__banner">
      <div className="overlay" />
      <div className="home-page__banner-container">
        <h2 className="home-page__banner-title">Who Are We?</h2>
          <p className="home-page__banner-text">
            Initia is a non-profit organization striving to make change in our community. 
            We host recurring competitions that aim to solve problems around us, 
            which are catered towards various fields from engineering, to medical, 
            to business. We ensure that each person is given the opportunity to contribute 
            their skill sets to Initia's movement. 
          </p>
          <Link to='/join' className="link-btn">Explore Open Competitions</Link>
      </div>
      </div>

    </div>
  )
}

export default Home;