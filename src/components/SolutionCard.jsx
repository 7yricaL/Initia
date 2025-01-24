import React from 'react';
import { Link } from 'react-router-dom';

import './SolutionCard.css';

const SolutionCard = (props) => {
    const {solutionName, solutionAuthors, solutionSchool, solutionLink} = props;

    const place = solutionName.includes('1st Place') ? '1st' : solutionName.includes('2nd Place') ? '2nd' : solutionName.includes('3rd Place') ? '3rd' : '';


  return (
    <div className="solution-card">
        <div className="solution-card__left">
          { solutionSchool && <img src={`/school-icons/${solutionSchool.split(' ').join('')}.png`} alt="school img" /> }
          { place && <img src={`/school-icons/${place}.webp`} alt="school img" /> }
        </div>
        <div className="solution-card__mid">
          <h2 className="solution-card__solution-name">{solutionName}</h2>
          <h3 className="solution-card__solution-authors">{solutionAuthors}</h3>
          {solutionSchool && <p className="solution-card__solution-school">@ {solutionSchool}</p>}
        </div>
        { solutionLink != "#" && <div className="solution-card__right">
          <Link to={solutionLink} className='link-btn'>View Solution</Link>
        </div>
        }
    </div>
  )
}

export default SolutionCard