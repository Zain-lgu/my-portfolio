import React from 'react'
import SubHeader from './components/subheader/SubHeader'
import Header from './components/header/Header'
import HeroSection from './components/herosection/HeroSection'
import './App.css'
import MainContent from './components/maincontent/MainContent'

const App = () => {
  return (
    <>
      <div className="app-wrapper">
        <div className="overlay"></div> {/* Main background dark layer */}

        <div className="header-wrapper">
          <div className="header-overlay"></div> {/* Stronger overlay for header */}
          <SubHeader />
          <Header />
        </div>
        <HeroSection />
      </div>
      <MainContent />
    </>
  )
}

export default App
