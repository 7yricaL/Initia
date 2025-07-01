import React, { useState } from 'react';
import { FaLightbulb, FaVideo, FaCode, FaRocket, FaBrain, FaTools } from 'react-icons/fa';
import './IntelliHacks.css';

const IntelliHacks = () => {
  const [activeTab, setActiveTab] = useState('figma');

  const figmaSlides = [
    {
      title: "AI as Your Design Partner",
      description: "Learn how to collaborate with AI tools to enhance your design workflow, not replace your creativity.",
      status: "coming-soon"
    },
    {
      title: "Prompt Engineering for Designers",
      description: "Master the art of communicating with AI to get the results you envision.",
      status: "coming-soon"
    },
    {
      title: "AI-Assisted Ideation",
      description: "Use AI to brainstorm and iterate on design concepts while maintaining your unique perspective.",
      status: "coming-soon"
    }
  ];

  const interviewVideos = [
    {
      title: "Industry Leaders on AI Productivity",
      description: "Conversations with professionals who use AI as a tool to amplify their capabilities.",
      status: "coming-soon"
    },
    {
      title: "Student Success Stories",
      description: "Real experiences from students who've learned to work alongside AI effectively.",
      status: "coming-soon"
    },
    {
      title: "Ethics of AI Collaboration",
      description: "Discussions on responsible AI use and maintaining human creativity.",
      status: "coming-soon"
    }
  ];

  const handsonDemos = [
    {
      title: "Code Review with AI",
      description: "Interactive demo showing how AI can help review and improve your code while you learn.",
      status: "coming-soon"
    },
    {
      title: "Research Assistant Training",
      description: "Learn to use AI as a research partner for gathering and analyzing information.",
      status: "coming-soon"
    },
    {
      title: "Writing Enhancement Workshop",
      description: "Discover how AI can help refine your writing while preserving your voice.",
      status: "coming-soon"
    }
  ];

  const renderCards = (items) => {
    const getTabColors = () => {
      switch (activeTab) {
        case 'figma':
          return {
            gradient: 'linear-gradient(135deg, #007AFF 0%, #5856D6 100%)',
            borderColor: '#007AFF',
            shadowColor: 'rgba(0, 122, 255, 0.2)'
          };
        case 'videos':
          return {
            gradient: 'linear-gradient(135deg, #AF52DE 0%, #FF2D92 100%)',
            borderColor: '#AF52DE',
            shadowColor: 'rgba(175, 82, 222, 0.2)'
          };
        case 'demos':
          return {
            gradient: 'linear-gradient(135deg, #FF6B35 0%, #FF2D92 100%)',
            borderColor: '#FF6B35',
            shadowColor: 'rgba(255, 107, 53, 0.2)'
          };
        default:
          return {
            gradient: 'linear-gradient(135deg, #007AFF 0%, #5856D6 100%)',
            borderColor: '#007AFF',
            shadowColor: 'rgba(0, 122, 255, 0.2)'
          };
      }
    };

    const colors = getTabColors();

    return (
      <div className="intelli-hacks__cards-grid">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="intelli-hacks__card"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = `0 12px 40px ${colors.shadowColor}`;
              e.currentTarget.style.borderColor = colors.borderColor;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.06)';
              e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)';
            }}
          >
            <div 
              className="intelli-hacks__card-icon"
              style={{
                background: colors.gradient,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              {activeTab === 'figma' && <FaLightbulb />}
              {activeTab === 'videos' && <FaVideo />}
              {activeTab === 'demos' && <FaCode />}
            </div>
            <h3 className="intelli-hacks__card-title">{item.title}</h3>
            <p className="intelli-hacks__card-description">{item.description}</p>
            {item.status === 'coming-soon' ? (
              <span 
                className="intelli-hacks__coming-soon"
                style={{
                  background: colors.gradient,
                  color: 'white',
                  border: 'none'
                }}
              >
                Coming Soon
              </span>
            ) : (
              <button 
                className="intelli-hacks__card-btn"
                style={{
                  background: colors.gradient,
                  color: 'white',
                  border: 'none'
                }}
              >
                Explore
              </button>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="page intelli-hacks-page">
      <div className="intelli-hacks__hero">
        <h1 className="intelli-hacks__hero-title">IntelliHacks</h1>
        <p className="intelli-hacks__hero-subtitle">
          Master AI as your productivity partner, not your replacement. 
          Learn to amplify your capabilities while keeping creativity and critical thinking at the center.
        </p>
        <a href="#content" className="intelli-hacks__hero-cta">
          Start Learning
        </a>
      </div>

      <div id="content" className="intelli-hacks__content">
        <section className="intelli-hacks__section">
          <h2 className="intelli-hacks__section-title intelli-hacks__section-title--gradient">
            Our Philosophy
          </h2>
          <p className="intelli-hacks__section-description">
            AI should enhance human intelligence, not replace it. We believe in using artificial intelligence 
            as a powerful tool that amplifies your natural abilities, accelerates your learning, and helps you 
            tackle complex problems while maintaining your unique perspective and creativity.
          </p>
          
          <div className="intelli-hacks__cards-grid">
            <div className="intelli-hacks__card">
              <div className="intelli-hacks__card-icon"><FaRocket /></div>
              <h3 className="intelli-hacks__card-title">Amplify, Don't Replace</h3>
              <p className="intelli-hacks__card-description">
                Learn to use AI to boost your productivity and capabilities rather than depending on it to do the work for you.
              </p>
            </div>
            <div className="intelli-hacks__card">
              <div className="intelli-hacks__card-icon"><FaTools /></div>
              <h3 className="intelli-hacks__card-title">Tool Mastery</h3>
              <p className="intelli-hacks__card-description">
                Develop expertise in AI tools while maintaining control over the creative and decision-making process.
              </p>
            </div>
            <div className="intelli-hacks__card">
              <div className="intelli-hacks__card-icon"><FaBrain /></div>
              <h3 className="intelli-hacks__card-title">Critical Thinking</h3>
              <p className="intelli-hacks__card-description">
                Strengthen your ability to evaluate, refine, and improve AI-generated content with human insight.
              </p>
            </div>
          </div>
        </section>

        <section className="intelli-hacks__section">
          <h2 className="intelli-hacks__section-title intelli-hacks__section-title--gradient">
            Learning Resources
          </h2>
          <p className="intelli-hacks__section-description">
            Explore our growing collection of resources designed to help you master AI collaboration across different domains.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <button 
              className={`intelli-hacks__card-btn ${activeTab === 'figma' ? 'active' : ''}`}
              onClick={() => setActiveTab('figma')}
              style={{ 
                background: activeTab === 'figma' ? 'linear-gradient(135deg, #007AFF 0%, #5856D6 100%)' : '#f5f5f7',
                color: activeTab === 'figma' ? 'white' : '#1d1d1f',
                transform: activeTab === 'figma' ? 'translateY(-2px)' : 'none',
                boxShadow: activeTab === 'figma' ? '0 4px 20px rgba(0, 122, 255, 0.3)' : 'none'
              }}
            >
              <FaLightbulb style={{ marginRight: '0.5rem' }} />
              Figma Slides
            </button>
            <button 
              className={`intelli-hacks__card-btn ${activeTab === 'videos' ? 'active' : ''}`}
              onClick={() => setActiveTab('videos')}
              style={{ 
                background: activeTab === 'videos' ? 'linear-gradient(135deg, #AF52DE 0%, #FF2D92 100%)' : '#f5f5f7',
                color: activeTab === 'videos' ? 'white' : '#1d1d1f',
                transform: activeTab === 'videos' ? 'translateY(-2px)' : 'none',
                boxShadow: activeTab === 'videos' ? '0 4px 20px rgba(175, 82, 222, 0.3)' : 'none'
              }}
            >
              <FaVideo style={{ marginRight: '0.5rem' }} />
              Interview Videos
            </button>
            <button 
              className={`intelli-hacks__card-btn ${activeTab === 'demos' ? 'active' : ''}`}
              onClick={() => setActiveTab('demos')}
              style={{ 
                background: activeTab === 'demos' ? 'linear-gradient(135deg, #FF6B35 0%, #FF2D92 100%)' : '#f5f5f7',
                color: activeTab === 'demos' ? 'white' : '#1d1d1f',
                transform: activeTab === 'demos' ? 'translateY(-2px)' : 'none',
                boxShadow: activeTab === 'demos' ? '0 4px 20px rgba(255, 107, 53, 0.3)' : 'none'
              }}
            >
              <FaCode style={{ marginRight: '0.5rem' }} />
              Hands-on Demos
            </button>
          </div>

          {activeTab === 'figma' && (
            <div>
              <h3 style={{ 
                textAlign: 'center', 
                marginBottom: '1.5rem', 
                fontSize: '2rem', 
                fontWeight: '600',
                background: 'linear-gradient(135deg, #007AFF 0%, #5856D6 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Design & Creativity Slides
              </h3>
              {renderCards(figmaSlides)}
            </div>
          )}

          {activeTab === 'videos' && (
            <div>
              <h3 style={{ 
                textAlign: 'center', 
                marginBottom: '1.5rem', 
                fontSize: '2rem', 
                fontWeight: '600',
                background: 'linear-gradient(135deg, #AF52DE 0%, #FF2D92 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Expert Interviews & Discussions
              </h3>
              {renderCards(interviewVideos)}
            </div>
          )}

          {activeTab === 'demos' && (
            <div>
              <h3 style={{ 
                textAlign: 'center', 
                marginBottom: '1.5rem', 
                fontSize: '2rem', 
                fontWeight: '600',
                background: 'linear-gradient(135deg, #FF6B35 0%, #FF2D92 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Interactive Learning Experiences
              </h3>
              {renderCards(handsonDemos)}
            </div>
          )}
        </section>

        <section className="intelli-hacks__section">
          <h2 className="intelli-hacks__section-title intelli-hacks__section-title--gradient">Coming Soon</h2>
          <div className="intelli-hacks__placeholder">
            <p>We're periodically adding new content to help you master productive AI collaboration.</p>
            <p>Check back regularly for new slides, videos, and demos!</p>
            <div style={{ marginTop: '1rem' }}>
              <span className="intelli-hacks__coming-soon">New Content Soon!</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default IntelliHacks;
