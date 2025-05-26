import React, { cache, useEffect, useState } from "react";
import LeafletMap from "../components/LeafletMap";
import MusicTriviaGame from "../components/MusicTriviaGame";

const Explore = () => {
  const [stoicQuote, setStoicQuote] = useState(null);
  const [advice, setAdvice] = useState(null);

 
  useEffect(() => {
    const fetchStoicQuote = async () => {
      try {
        const res = await fetch("https://stoic-quotes.com/api/quote");
        const data = await res.json();
        setStoicQuote(`"${data.text}" — ${data.author}`);
      } catch {
        setStoicQuote("Could not load Stoic quote.");
      }
    };

    fetchStoicQuote();
  }, []);


  // rachel's api
  const fetchAdvice = async () => {
    try {
      const res = await fetch("https://api.adviceslip.com/advice", {
      cache: "no-store"
    });
      
      const data = await res.json();
      setAdvice(`"${data.slip.advice}"`);
      
    } catch {
      setAdvice("Could not fetch advice. Try again later.");
    }
  };


  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <ol id="containers">
      <li>
        <div id="hero-container" className="overflowHidden">
          <h2 id="explore-title">Explore Locations</h2>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
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

          <div style={{ marginTop: "2rem" }}>
            <h4>Need Advice?</h4>
            <p>{advice}</p>
            <button onClick={fetchAdvice} style={{ marginTop: "0.5rem" }}>
              Get New Advice
            </button>
          </div>
        </div>

        <div style={{ marginTop: "3rem" }}>
          <MusicTriviaGame />
        </div>
      </li>
    </ol>
  );
};

export default Explore;