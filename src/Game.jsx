import { sample } from "./utils.jsx";
import { WORDS } from "./data.jsx";
import GameInput from "./GameInput.jsx";
import GameResult from "./GameResult.jsx";

import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "./constants.jsx";
import PropTypes from "prop-types";

// Pick a random word on every page load.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Banner({ status, children }) {
  return <div className={`${status} banner`}>{children}</div>;
}
function WonBanner({ numOfGuesses }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} guesses`}
        </strong>
        .
      </p>
    </Banner>
  );
}
function LostBanner({ answer }) {
  return (
    <Banner status="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running");

  function handleSubmitGuess(guess) {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);

    if (guess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  return (
    <>
      <GameResult guesses={guesses} answer={answer} />
      <GameInput
        gameStatus={gameStatus}
        handleSubmitGuess={handleSubmitGuess}
      />
      {gameStatus === "won" && <WonBanner numOfGuesses={guesses.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;

Banner.propTypes = {
  status: PropTypes.string,
  children: PropTypes.node,
};

LostBanner.propTypes = {
  answer: PropTypes.string,
};

WonBanner.propTypes = {
  numOfGuesses: PropTypes.string,
};
