import React from 'react';
import { Link } from 'react-router-dom';

import './SolutionCard.css';

const SolutionCard = (props) => {
    const {solutionName, solutionAuthors, solutionSchool, solutionLink} = props;


  return (
    <div className="solution-card">
        <div className="solution-card__left">
          <img src={`/school-icons/${solutionSchool.split(' ').join('')}.png`} alt="school img" />
        </div>
        <div className="solution-card__mid">
          <h2 className="solution-card__solution-name">{solutionName}</h2>
          <h3 className="solution-card__solution-authors">{solutionAuthors}</h3>
          <p className="solution-card__solution-school">@ {solutionSchool}</p>
        </div>
        <div className="solution-card__right">
          <Link to={solutionLink} className='link-btn'>View Solution</Link>
        </div>
    </div>
  )
}

export default SolutionCard