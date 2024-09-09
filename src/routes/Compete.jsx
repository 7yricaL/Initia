import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InfoCard from '../components/InfoCard.jsx';

import './Compete.css';

const Compete = () => {
  const [challengeInfoCards, setChallengeInfoCards] = useState([]);

  useEffect(() => {
    fetch('/data/challengeinfocards.json')
    .then(res => res.json())
    .then(data => setChallengeInfoCards(data))
    .catch(error => console.error('Error fetching challenge info cards:', error))
  },[]);

  return (
    <div className="page compete-page">
    <header className="page__header">
      <h1 className="page__title">Explore Open Challenges</h1>
      <h3 className="page__description">Our open challenges are in partnership with various non-profits, communities, businesses, and organizations.</h3>
    </header>
    <div className="compete-page__cards">
        {challengeInfoCards.map(challengeInfo => (
          <InfoCard 
            key={uuidv4()}
            title={challengeInfo.title}
            collaborator={challengeInfo.collaborator}
            collabLink={challengeInfo.collabLink}
            image={challengeInfo.image}
            competitionLink={challengeInfo.competitionLink}
          />
        ))}
      </div>
    </div>
  )
}

export default Compete;