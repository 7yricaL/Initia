import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import CompetitionCard from '../components/CompetitionCard';

const EconTireComp = () => {
  const [rossLiteratureCards, setRossLiteratureCards] = useState([]);
  const [competitionInfo, setCompetitionInfo] = useState([]);

  useEffect(() => {
    fetch('/data/challengeinfocards.json')
    .then(res => res.json())
    .then (data => { 
      data[data.length-1].forEach(info => {
        if (info.competitionLink == '/economytire-market-research-competition') {
          setCompetitionInfo(info); 
        }
      });
    })
    .catch(error => console.error("Error fetching competition info:", error))
  },[]);

  useEffect(() => {
    fetch('/data/economyTireCards.json')
    .then(res => res.json())
    .then(data => setRossLiteratureCards(data))
    .catch(error => console.error(`Error fetching ${competitionInfo.title} cards:`, error))
  },[]);

  return (
    <div className="page compete-page__challenge">
      <header className="page__header">
        <h1 className="page__title">{competitionInfo.title}</h1>
        <div className="compete-page__collaborator">
          In collaboration with: <a href={`${competitionInfo.collabLink}`} target='_blank' className="compete-page__link">{competitionInfo.collaborator}</a>
        </div>
      </header>
      <div className="competition__cards">
        {rossLiteratureCards.map( meducationCard => (
          <CompetitionCard 
            key={uuidv4()} 
            title={meducationCard.title}
            image={meducationCard.image}
            description={meducationCard.description}
          />
        ))}
      </div>
      <h2 className="competition__deadline">Deadline is <span>{competitionInfo.deadline}</span></h2>
      {competitionInfo.submissionLink == "" ? (
          <div></div>
        ) : (
          <Link to={competitionInfo.submissionLink} className='compete-page__submit-btn link-btn'>Submit Solution</Link>
        )
      }
    </div>
  )
}

export default EconTireComp