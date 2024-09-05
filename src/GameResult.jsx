import PropTypes from "prop-types";
import { range } from "./utils.jsx";
import { NUM_OF_GUESSES_ALLOWED } from "./constants.jsx";

function GameResult({ guesses }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((guess_num) => (
        <p key={guess_num} className="guess">
          {range(0, 5).map((letter_num) => (
            <span key={letter_num} className="cell">
              {guesses[guess_num] ? guesses[guess_num][letter_num] : undefined}
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
};
