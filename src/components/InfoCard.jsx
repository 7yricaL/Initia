import React from 'react';
import { Link } from 'react-router-dom';
import './InfoCard.css';

const InfoCard = (props) => {
  const {title, collaborator, collabLink, image, competitionLink} = props;

  return (
    <div className="info-card">
        <h1 className="info-card__title">{title}</h1>
        <img src={image} alt="" className="info-card__image" />
        <div className="info-card__collaborator">
          In collaboration with: <a href={collabLink} target='_blank' className="info-card__link">{collaborator}</a>
        </div>
        <Link to={competitionLink} className="link-btn">More Information</Link>
    </div>
  )
}

export default InfoCard;