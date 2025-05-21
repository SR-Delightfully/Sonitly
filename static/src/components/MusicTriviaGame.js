import React, { useState, useEffect } from "react";

const MusicTriviaGame = () => {
  const [musicFact, setMusicFact] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const [resultMessage, setResultMessage] = useState("");

 const decodeHtml = (html) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

const fetchMusicTrivia = async () => {
  try {
    const res = await fetch("https://opentdb.com/api.php?amount=1&category=12&type=multiple");
    const data = await res.json();
    const trivia = data.results[0];
    setMusicFact(decodeHtml(trivia.question));
    setCorrectAnswer(decodeHtml(trivia.correct_answer));
  } catch {
    setMusicFact("Trivia is taking a nap right now.");
  }
};

  useEffect(() => {
    fetchMusicTrivia();
  }, []);

  const handleInputChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const handleSubmit = () => {
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      setResultMessage("Correct! 🎉");
    } else {
      setResultMessage(`Oops! The correct answer was: ${correctAnswer}`);
    }
    setUserAnswer("");
    fetchMusicTrivia();
};

  return (
    <div>
      <h2>Music Trivia Game</h2>
      <p>{musicFact}</p>
      <input
        type="text"
        value={userAnswer}
        onChange={handleInputChange}
        placeholder="Enter your answer"
      />
      <button onClick={handleSubmit}>Submit Answer</button>
      {resultMessage && <p>{resultMessage}</p>}
    </div>
  );
};

export default MusicTriviaGame;
