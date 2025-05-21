import React, { useEffect, useState } from "react";
import LeafletMap from "../components/LeafletMap";
import MusicTriviaGame from "../components/MusicTriviaGame";

const Explore = () => {
  const [stoicQuote, setStoicQuote] = useState(null);

  useEffect(()=> {
    const fetchStoicQuote = async () => {
      try {
        const res = await fetch("https://stoic-quotes.com/api/quote");
        const data = await res.json();
        setStoicQuote(`"${data.text}" — ${data.author}`);
      } catch {
        setStoicQuote(null);
      }
    };

    fetchStoicQuote();
  }, []);

  return (
    <ol id="containers">
      <li>
        <div id="hero-container" className="overflowHidden">
          <h2 id="explore-title">Explore Locations</h2>
         
          <div style={{display: "flex", justifyContent: "center", alignItems: "center" }}>
            <LeafletMap />
          </div>
        </div>
      </li>
      <li id="intro-container">
        <div>
          <h2>Take It Easy!</h2>
          <span>
            <h4>Think Stoic Thoughts:</h4>
            <p>{stoicQuote}</p>
          </span>
        </div>
        <div>
         
          <MusicTriviaGame />
        </div>
      </li>
   
    </ol>
  );
}

export default Explore;
