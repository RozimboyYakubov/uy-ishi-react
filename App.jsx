import React from 'react';
import './App.css';

function App() {
  const contentSections = [
    {
      id: "01",
      tag: "GET STARTED",
      title: "What level of hiker are you?",
      description: "Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like AllTrails and Western Hikes. What type of hiker are you – novice, intermediate, advanced, expert, or expert backpacker?",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1000&auto=format&fit=crop",
      reverse: false
    },
    {
      id: "02",
      tag: "HIKING ESSENTIALS",
      title: "Picking the right Hiking Gear!",
      description: "The nice thing about beginning hiking is that you don't really need any special gear, you can probably get away with things you already have. Let's start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and uncomfortable if they get sweaty or wet.",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop",
      reverse: true
    },
    {
      id: "03",
      tag: "WHERE YOU GO IS THE KEY",
      title: "Understand Your Map & Timing",
      description: "To start, print out the hiking guide and map. If it's raining, throw them in a Zip-loc bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is, like 'At 1.5 miles, I'll reach the guide-post and know that at 2 miles, I make a right turn at the junction.'",
      image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=1000&auto=format&fit=crop",
      reverse: false
    }
  ];

  return (
    <div className="mntn-app">
      {/* Background Hero Image with Overlay */}
      <div className="hero-section">
        {/* Navigation Bar */}
        <header className="navbar">
          <div className="logo">MNTN</div>
          <nav className="nav-links">
            <a href="#equipment">Equipment</a>
            <a href="#about">About us</a>
            <a href="#blog">Blog</a>
          </nav>
          <div className="account-link">
            <span>Account</span>
          </div>
        </header>

        {/* Hero Main Content */}
        <div className="hero-content">
          <div className="subtitle-tag">
            <span className="line"></span> A HIKING GUIDE
          </div>
          <h1 className="hero-title">Be Prepared For The Mountains And Beyond!</h1>
          <div className="scroll-down">
            scroll down &darr;
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <main className="content-container">
        {contentSections.map((item) => (
          <section key={item.id} className={`card-section ${item.reverse ? 'reverse' : ''}`}>
            <div className="card-text">
              <span className="bg-number">{item.id}</span>
              <div className="subtitle-tag orange">
                <span className="line orange-line"></span> {item.tag}
              </div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <a href="#readmore" className="read-more">read more &rarr;</a>
            </div>
            <div className="card-image">
              <img src={item.image} alt={item.title} />
            </div>
          </section>
        ))}
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-brand">
          <div className="logo">MNTN</div>
          <p>Get out there & discover your next slope, mountain & destination!</p>
          <p className="copyright">Copyright 2026 MNTN, Inc. Terms & Privacy</p>
        </div>
        <div className="footer-links">
          <div>
            <h4>More on The Blog</h4>
            <ul>
              <li><a href="#about">About MNTN</a></li>
              <li><a href="#team">Contributors & Writers</a></li>
              <li><a href="#write">Write For Us</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4>More on MNTN</h4>
            <ul>
              <li><a href="#team">The Team</a></li>
              <li><a href="#jobs">Jobs</a></li>
              <li><a href="#press">Press</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;