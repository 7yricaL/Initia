import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer.jsx';
import MobileNavbar from './components/MobileNavbar.jsx';
import Navbar from './components/Navbar.jsx';
import Compete from './routes/Compete.jsx';
import RossWebsiteComp from './routes/rossleaders-website-competition.jsx';
import RossLiteratureComp from './routes/rossleaders-literature-competition.jsx';
import Home from './routes/Home.jsx';
import Join from './routes/Join.jsx';
import Solutions from './routes/Solutions.jsx';
import Team from './routes/Team.jsx';

import './App.css';
import Request from './routes/Request.jsx';

const App = () => {
  return (
    <>
      <Navbar />
      <MobileNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/join' element={<Join />} />
        <Route path='/request' element={<Request />} />
        <Route path='/compete' element={<Compete />} />
        <Route path='/rossleaders-website-competition' element={<RossWebsiteComp />} />
        <Route path='/rossleaders-literature-competition' element={<RossLiteratureComp />} />
        <Route path='/solutions' element={<Solutions />} />
        <Route path='/team' element={<Team />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App