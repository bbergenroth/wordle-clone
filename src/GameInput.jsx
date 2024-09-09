import React from "react";
import PropTypes from "prop-types";

function GameInput({ gameStatus, handleSubmitGuess }) {
  const [guess, setGuess] = React.useState("");

  return (
    <div className="guess">
      <form
        className="guess-input-wrapper"
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmitGuess(guess);
          console.log({ guess });
          setGuess("");
        }}
      >
        <label htmlFor="guess-input">
          Enter guess:<p></p>
        </label>
        <input
          id="guess-input"
          required
          disabled={gameStatus !== "running"}
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          value={guess}
          onChange={(event) => {
            setGuess(event.target.value.toUpperCase());
          }}
        />
      </form>
    </div>
  );
}
export default GameInput;

GameInput.propTypes = {
  gameStatus: PropTypes.string,
  handleSubmitGuess: PropTypes.func,
};
