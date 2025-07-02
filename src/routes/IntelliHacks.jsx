import React, { useState } from 'react';
import { FaLightbulb, FaVideo, FaCode, FaRocket, FaBrain, FaTools } from 'react-icons/fa';
import './IntelliHacks.css';

const IntelliHacks = () => {
  const [activeTab, setActiveTab] = useState('figma');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const figmaSlides = [
    {
      title: "IntelliHacks Introduction",
      description: "Learn about collaborating with AI tools to enhance your design workflow, not replace your creativity.",
      status: "available",
      type: "figma",
      url: "https://embed.figma.com/deck/pilPOY5hc9LmWHHb0XGGRQ/Intelli-Hacks?node-id=1-42&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&embed-host=share",
      image: "/cards/intelli-hack-intro.png" // Add your image path here
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
      title: "Effects of AI in Research",
      description: "Dr. Joshi discusses how AI affects the research industry productively and destructively  in research proposals.",
      status: "available",
      type: "video",
      url: "https://drive.google.com/file/d/183RQalQACPx0_HrSbMWXw0vVloKBRZuG/preview",
      //image: "/public/cards/ai-research-effects.png"
    },
    {
      title: "Effects of AI in Universities",
      description: "Discussing AI in a university setting through the lens of computational mathematics and physics.",
      status: "available",
      type: "video",
      url: "https://drive.google.com/file/d/1GHjn_GLGU3Jc4yWTSzwPaG3MuiRh5JA5/preview",
      //image: "/public/cards/ai-research-effects.png"
    },
    {
      title: "AI in High Performance Computing",
      description: "Riyaz, a computational scientist at Lawrence Livermore National Laboratory, discusses the applications, benefits, and concerns of AI in his field.",
      status: "available",
      type: "video",
      url: "https://drive.google.com/file/d/1S4uTGPdq69_NI-hgE8UvuifLwjGFhS6d/preview",
      //image: "/public/cards/ai-research-effects.png"
    }
  ];

  const handsonDemos = [
    {
      title: "Composing Scenes with AI",
      description: "Learn how you can use AI along side your creativity in Blender 3D to jumpstart your projects.",
      status: "available",
      type: "video", // Ready for when you have video content
      url: "https://drive.google.com/file/d/1s6rQv9R_1rH_ZFCHfwft8IN5xLmqPaeR/preview"
    },
    {
      title: "Brainstorm with AI",
      description: "Lay out ideas in a workspace, and let an AI assistant help you organize your ideas. Good for studying and planning activities!",
      status: "available",
      type: "video", // Ready for when you have video content
      url: "https://drive.google.com/file/d/15qsQbzZduVocIrbzaMKpyvG3yRVAkwgz/preview"
    },
    {
      title: "Task Automation with AI",
      description: "Set up AI agents to perform actions based on triggers from external tools.",
      status: "available",
      type: "video", // Ready for when you have video content
      url: "https://drive.google.com/file/d/1A3MXK7W4kuiPnosE_B_cYqMVv6CTBzrD/preview"
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
            onClick={() => {
              if (item.status === 'available' && item.url) {
                setModalContent(item);
                setModalOpen(true);
              }
            }}
            style={{ cursor: item.status === 'available' ? 'pointer' : 'default' }}
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
            {item.status === 'available' && item.image ? (
              <div className="intelli-hacks__card-image-container">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="intelli-hacks__card-image"
                />
              </div>
            ) : (
              <h3 className="intelli-hacks__card-title">{item.title}</h3>
            )}
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
                onClick={(e) => {
                  e.stopPropagation(); // Prevent card click event
                  if (item.url) {
                    setModalContent(item);
                    setModalOpen(true);
                  }
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
        {/* Pilot Video Section */}
        <section className="intelli-hacks__pilot-section">
          <div className="intelli-hacks__pilot-container">
            <div className="intelli-hacks__pilot-content">
              <h2 className="intelli-hacks__pilot-title">
                Watch Our Introduction
              </h2>
              <p className="intelli-hacks__pilot-description">
                Get an overview of everything IntelliHacks has to offer. This pilot video walks through 
                our initial content and shows you what we stand for.
              </p>
            </div>
            <div className="intelli-hacks__pilot-video">
              <div className="intelli-hacks__video-container">
                <iframe
                  src="https://www.canva.com/design/DAGr-AVkAAU/Fb8U8hZfXD9VB7XN2CYs3Q/watch"
                  title="IntelliHacks Pilot Introduction"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
                <div className="intelli-hacks__video-overlay">
                  <div className="intelli-hacks__play-button">
                    <FaVideo />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
            <div 
              className="intelli-hacks__card"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 122, 255, 0.15)';
                e.currentTarget.style.borderColor = '#007AFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.06)';
                e.currentTarget.style.borderColor = '#f5f5f7';
              }}
            >
              <div 
                className="intelli-hacks__card-icon"
                style={{
                  background: 'linear-gradient(135deg, #007AFF 0%, #5856D6 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                <FaRocket />
              </div>
              <h3 className="intelli-hacks__card-title">Amplify, Don't Replace</h3>
              <p className="intelli-hacks__card-description">
                Learn to use AI to boost your productivity and capabilities rather than depending on it to do the work for you.
              </p>
            </div>
            <div 
              className="intelli-hacks__card"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(175, 82, 222, 0.15)';
                e.currentTarget.style.borderColor = '#AF52DE';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.06)';
                e.currentTarget.style.borderColor = '#f5f5f7';
              }}
            >
              <div 
                className="intelli-hacks__card-icon"
                style={{
                  background: 'linear-gradient(135deg, #AF52DE 0%, #FF2D92 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                <FaTools />
              </div>
              <h3 className="intelli-hacks__card-title">Tool Mastery</h3>
              <p className="intelli-hacks__card-description">
                Develop expertise in AI tools while maintaining control over the creative and decision-making process.
              </p>
            </div>
            <div 
              className="intelli-hacks__card"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(255, 107, 53, 0.15)';
                e.currentTarget.style.borderColor = '#FF6B35';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.06)';
                e.currentTarget.style.borderColor = '#f5f5f7';
              }}
            >
              <div 
                className="intelli-hacks__card-icon"
                style={{
                  background: 'linear-gradient(135deg, #FF6B35 0%, #FF2D92 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                <FaBrain />
              </div>
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

      {/* Modal for Figma embeds */}
      {modalOpen && modalContent && (
        <div 
          className="intelli-hacks__modal-overlay"
          onClick={() => setModalOpen(false)}
        >
          <div 
            className="intelli-hacks__modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="intelli-hacks__modal-header">
              <h3 style={{
                background: activeTab === 'figma' 
                  ? 'linear-gradient(135deg, #007AFF 0%, #5856D6 100%)'
                  : activeTab === 'videos'
                  ? 'linear-gradient(135deg, #AF52DE 0%, #FF2D92 100%)'
                  : 'linear-gradient(135deg, #FF6B35 0%, #FF2D92 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                margin: 0,
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#1d1d1f'
              }}>
                {modalContent.title}
              </h3>
              <button 
                className="intelli-hacks__modal-close"
                onClick={() => setModalOpen(false)}
              >
                ×
              </button>
            </div>
            <div className="intelli-hacks__modal-body">
              {modalContent.type === 'figma' && modalContent.url && (
                <iframe
                  style={{
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    borderRadius: '12px'
                  }}
                  width="100%"
                  height="600"
                  src={modalContent.url}
                  allowFullScreen
                  title={modalContent.title}
                />
              )}
              {modalContent.type === 'video' && modalContent.url && (
                <iframe
                  style={{
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    borderRadius: '12px'
                  }}
                  width="100%"
                  height="600"
                  src={modalContent.url}
                  allowFullScreen
                  title={modalContent.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IntelliHacks;
