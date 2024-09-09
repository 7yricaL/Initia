import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import SolutionCard from '../components/SolutionCard.jsx';
import './Solutions.css';

const Solutions = () => {

  const [solutionCards, setSolutionCards] = useState([]);

  useEffect(() => {
    fetch('/data/solutioncards.json')
    .then(res => res.json())
    .then(data => setSolutionCards(data))
    .catch(error => console.error('Error fetching solution cards:', error))
  },[]);

  return (
      <div className="page solutions-page">
        <header className="page__header">
          <h1 className="page__title">Solutions</h1>
        </header>
        <div className="solutions-container">
        {
          solutionCards.map( solutionSection => (
            <section key={uuidv4()} className="solution-page__solution-section">
              <h1 className="solution-section__title">{solutionSection.title}</h1>
              {
                solutionSection.cards.map( solutionCard => (
                  <SolutionCard 
                  key={uuidv4()}
                  solutionName={solutionCard.name}
                  solutionAuthors={solutionCard.authors}
                  solutionSchool={solutionCard.school} 
                  solutionLink={solutionCard.link}
                />
                ))  
              }    
            </section>
          ))
        }
        </div>
      </div>
  )
}

export default Solutions