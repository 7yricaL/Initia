import React from 'react';

import './MemberCard.css';

const MemberCard = (props) => {
    const name = props.memberName;
    const school = props.memberSchool;
    const role = props.memberRole;
    const email = props.memberEmail;
    const about = props.memberAbout;

    return (
        <div className="member-card">
            <div className="member-card__top">
                <h2 className="member-card__role">{role}</h2>
            </div>
            <div className="member-card__middle">
                <div className="member-card__left">
                    <img className="member-card__image" src={`/members/${name.split(' ').join('')}.png`} alt="" />
                    <h1 className="member-card__name">{name}</h1>
                    <h3 className="member-card__school">{school}</h3>
                </div>
                <div className="member-card__right">
                    <p className="member-card__about">"{about}"</p>
                    <span className='member-card__email-link'>
                        <a href={`mailto:${email}`}>{email}</a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MemberCard;
