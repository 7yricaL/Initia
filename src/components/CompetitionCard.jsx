import DOMPurify from 'dompurify';
import React, { useEffect, useState } from 'react';
import './CompetitionCard.css';

function extractMarkdownLinks(inputString) {
  const markdownLinkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;

  const resultString = inputString.replace(markdownLinkPattern, (match, text, link) => {
    return `<a href="${link}" class="competition-card__link">${text}</a>`;
  });

  return DOMPurify.sanitize(resultString);
}

const CompetitionCard = (props) => {
  const { title, image, description } = props;
  const [isBottomVisible, setIsBottomVisible] = useState(false);

  useEffect(() => {
    setIsBottomVisible(window.innerWidth > 1200);
  }, []);

  const handleCardClick = () => {
    if (window.innerWidth <= 1200) {
      setIsBottomVisible((prev) => !prev);
    }
  };

  return (
    <div className="competition-card" onClick={handleCardClick}>
      <div className={`competition-card__top ${(window.innerWidth <= 1200) ? (isBottomVisible ? 'hidden' : '') : ''}`}>
        <h1 className="competition-card__title">{title}</h1>
        <img src={image} alt="" className="competition-card__image" />
      </div>
      {isBottomVisible && (
        <div className="competition-card__bottom">
          <p className="competition-card__description" dangerouslySetInnerHTML={{ __html: extractMarkdownLinks(description) }} />
        </div>
      )}
    </div>
  );
};

export default CompetitionCard;
