import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import InitiaSchoolCard from '../components/InitiaSchoolCard.jsx';


import './Join.css';

const Join = () => {
  const [intiaSchoolCards, setInitiaSchoolCards] = useState([]);

  useEffect(() => {
    fetch('/data/initiaschoolcards.json')
    .then(res => res.json())
    .then(data => setInitiaSchoolCards(data))
    .catch(error => console.error('Error fetching initia school cards:', error))
  },[]);
  

  return (
    <div className="page join-page">
      {console.log(document.documentElement.clientHeight)}
      <div className="page__header">
        <h1 className="page__title">Join Initia at your school!</h1>
      </div>
      <section className="join-form__section">
        <div className="membership__form">
          <h2 className="membership-form__header">Be a member</h2>
          <p className="membership-form__description">
            This form indicates your interest in the cause and adds you to Initia's 
            member database, allowing participation in upcoming competitions.
          </p>
          <Link to='https://forms.gle/7kVGvCRFb1m623eN7' className="link-btn join-button">Join as a member</Link>
        </div>

        <div className="chapter-lead__form">
          <h2 className="membership-form__header">Be a leader</h2>
          <p className="membership-form__description">
            If your school currently does not have an active chapter of Initia running, 
            you can fill out the application to start a chapter yourself.
          </p>
          <Link to='/request' className="link-btn join-button">Become a chapter lead</Link>
        </div>
      </section>
      <section className="school-cards__container">
        {
          intiaSchoolCards.map(schoolCard => (
            <InitiaSchoolCard 
              key={uuidv4()}
              schoolName={schoolCard.schoolName}
              joinLink={schoolCard.joinLink}
              presidentName={schoolCard.presidentName}
            />
          ))
        }
      </section>
    </div>
  )
}

export default Join;