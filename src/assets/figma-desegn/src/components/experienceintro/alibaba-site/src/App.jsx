import React from "react";
import Header from "./components/header/Header";
import SubHeader from "./components/subheader/SubHeader";
import SearchSection from "./components/searchSection/SearchSection";
import "./App.css";
import CardsSection from "./components/cardSection/CardsSection";

function App() {
  return (
    <div>
      <div className="hero-bg">
        <Header />
        <SubHeader />
        <SearchSection />
      </div>
      <CardsSection />
    </div>
  );
}

export default App;
