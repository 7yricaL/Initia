import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import MemberCard from '../components/MemberCard.jsx';

import './Team.css';
import './Compete.css';

const Team = () => {
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch('/data/members.json')
        .then(res => res.json())
        .then(data => {
            setMembers(data);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching members:', error);
            setLoading(false);
        })
    },[]);

  return (
    <div className="page team-page">
        <header className="page__header">
        <h1 className="page__title">Meet The Team</h1>
        </header>

        <div className="team-page__members">
            {loading ? (
                <div className="loading-placeholder">
                </div>
            ) : (
                    members.map( member => (
                        <MemberCard 
                            key={uuidv4()}
                            memberName={member.name}
                            memberSchool={member.school}
                            memberRole={member.role}
                            memberEmail={member.email}
                            memberAbout={member.about}
                        />
                    ))
                )
            }
        </div>
    </div>
  )
}

export default Team;