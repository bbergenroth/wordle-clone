import PropTypes, { string } from "prop-types";
import { range } from "./utils.jsx";
import { NUM_OF_GUESSES_ALLOWED } from "./constants.jsx";
import { checkGuess } from "./game-helpers.jsx";

function GameResult({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((guess_num) => (
        <p key={guess_num} className="guess">
          {range(0, 5).map((letter_num) => (
            <span
              key={letter_num}
              className={
                checkGuess(guesses[guess_num], answer)?.[letter_num].status ??
                `cell`
              }
            >
              {guesses[guess_num]?.[letter_num]}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default GameResult;

GameResult.propTypes = {
  guesses: PropTypes.array,
  answer: string,
};
