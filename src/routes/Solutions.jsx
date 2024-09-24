import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import SolutionCard from '../components/SolutionCard.jsx';
import './Solutions.css';
import './Compete.css';

const Solutions = () => {

  const [solutionCards, setSolutionCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/solutioncards.json')
    .then(res => res.json())
    .then(data => {
      setSolutionCards(data);
      setLoading(false);
    })
    .catch(error => {
      console.error('Error fetching challenge info cards:', error);
      setLoading(false);
    })
  },[]);

  return (
      <div className="page solutions-page">
        <header className="page__header">
          <h1 className="page__title">Solutions</h1>
        </header>
        <div className="solutions-container">
          {loading ? (
            <div className="loading-placeholder">
            </div>
          ) : (
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
            )
          }
        </div>
      </div>
  )
}

export default Solutions