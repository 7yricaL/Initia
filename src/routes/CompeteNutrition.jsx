import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import CompetitionCard from '../components/CompetitionCard';


const CompeteNutrition = () => {
  const [nutritionCards, setNutritionCards] = useState([]);
  const [competitionInfo, setCompetitionInfo] = useState([]);

  useEffect(() => {
    fetch('/data/competitioninfo.json')
    .then(res => res.json())
    .then (data => { 
      data.forEach(info => {
        if (info.competitionName == 'Nutrition Challenge') {
          setCompetitionInfo(info); 
        }
      });
    })
    .catch(error => console.error("Error fetching competition info:", error))
  },[]);

  useEffect(() => {
    fetch('/data/nutritioncards.json')
    .then(res => res.json())
    .then(data => setNutritionCards(data))
    .catch(error => console.error('Error fetching nutrition cards:', error))
  },[]);

  return (
    <div className="page compete-page__challenge">
      <header className="page__header">
        <h1 className="page__title">Nutrition Competition</h1>
        {/* <h3 className="page__description">
          <span className='compete-page__description'>
            In today’s society, the biggest dietary challenge has been to consume nutrient-dense foods, aka healthy foods. Of course, maintaining this lifestyle has become increasingly challenging with the rise of high-fat, glucose-rich, and processed fast foods that tend to be less expensive and more convenient than healthier alternatives.
            {'\n\n'}
            To counter this challenge, Initia is partnering with Niti Shah, a master's degree holder who also serves as the CEO of Back2Basics. Should your competition entry demonstrate expertise and exceed our expectations, there is a chance your piece could be featured on her reputed nutrition website. We challenge you to enhance the public’s general awareness of nutritional advantages through an innovative program, either in the form of a written blog or video.
          </span>
        </h3> */}
        <div className="compete-page__collaborator">
          In collaboration with: <a href='https://back2basicsfxn.com/' target='_blank' className="compete-page__link">Back2Basics Nutrition</a>
        </div>
      </header>
      <div className="competition__cards">
        {nutritionCards.map( nutritionCard => (
          <CompetitionCard 
            key={uuidv4()} 
            title={nutritionCard.title}
            image={nutritionCard.image}
            description={nutritionCard.description}
          />
        ))}
      </div>
      <h2 className="competition__deadline">Deadline is <span>{competitionInfo.competitionDeadline}</span></h2>
      <Link to={competitionInfo.submissionLink} target="_blank" className='compete-page__submit-btn link-btn'>Submit Solution</Link>
    </div>
  )
}

export default CompeteNutrition