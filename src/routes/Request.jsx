import React from 'react';
import './Request.css';

const Request = () => {
  return (
    <div className="page request-page">
      <header className="page__header">
        <h1 className="page__title">Bring Initia to your School</h1>
      </header>
      <div className="request-page__container">
        <img src="/SchoolClipartBG.png" alt="School Icon" />
        <form className='leader-submission__form'>
          <h2 className="request-page__container-title">Send A Request</h2>
          <p className="request-page__container-description">Enter your credentials to request to start an Initia Chapter at your High School. You will receive an email back in 2-5 business days. If you are decided to be a good candidate, you will then interview a member of the Board of Directors.</p>

          <div className="form-group">
            <label htmlFor="fullname" className="styled-label">Full Name</label>
            <input type="text" id="fullname" className="styled-input" placeholder="Full Name" />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="styled-label">Email Address</label>
            <input type="email" id="email" className="styled-input" placeholder="Email Address" />
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="styled-label">Enter your phone number</label>
            <input type="tel" id="phone" className="styled-input" placeholder="Enter your phone number" />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="school" className="styled-label">School Name</label>
              <input type="text" id="school" className="styled-input" placeholder="School Name" />
            </div>
            <div className="form-group half-width">
              <label htmlFor="grade" className="styled-label">Current Grade Level</label>
              <select id="grade" className="styled-select">
                <option>Freshman</option>
                <option>Sophomore</option>
                <option>Junior</option>
                <option>Senior</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="leadership" className="styled-label">What current leadership positions do you hold, both in and out of school? If you do not hold any leadership positions, why do you think you would make a good leader? (Optional, but suggested to answer)</label>
            <textarea id="leadership" className="styled-textarea" rows="3" placeholder="What current leadership positions do you hold, both in and out of school? If you do not hold any leadership positions, why do you think you would make a good leader? (Optional, but suggested to answer)"></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="skills" className="styled-label">What skills do you have?</label>
            <textarea id="skills" className="styled-textarea" rows="2" placeholder="What skills do you have?"></textarea>
          </div>
          
          <div className="form-group">
            <label htmlFor="additional" className="styled-label">Anything else you want to tell us that would benefit your application?</label>
            <textarea id="additional" className="styled-textarea" rows="2" placeholder="Anything else you want to tell us that would benefit your application?"></textarea>
          </div>
          
          <button type="submit" className="link-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Request;
