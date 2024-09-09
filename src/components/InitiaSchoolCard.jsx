import React from 'react';
import { Link } from 'react-router-dom';

import './InitiaSchoolCard.css';

const InitiaSchoolCard = (props) => {
  const {schoolName, joinLink, presidentName} = props;

  return (
    <div className="school-card">
        <div className="school-card__left">
          <img src={`/school-icons/${schoolName.split(' ').join('')}.png`} alt="school icon" />
        </div>
        <div className="school-card__mid">
          <h2 className="school-card__school-name">{schoolName}</h2>
          <p className="school-card__president-name">President: <span>{presidentName}</span></p>
        </div>
        <div className="school-card__right">
          <Link to={joinLink} className='link-btn'>{(joinLink !== '') ? 'Join' : 'Pending...'}</Link>
        </div>
    </div>
  )
}

export default InitiaSchoolCard