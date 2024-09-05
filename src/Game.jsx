import { sample } from "./utils.jsx";
import { WORDS } from "./data.jsx";
import GameInput from "./GameInput.jsx";
import GameResult from "./GameResult.jsx";

import React from "react";

// Pick a random word on every page load.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(guess) {
    setGuesses([...guesses, guess]);
  }

  return (
    <>
      <GameResult guesses={guesses} />
      <GameInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
