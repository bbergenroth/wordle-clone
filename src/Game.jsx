import { sample } from './utils.jsx';
import { WORDS } from './data.jsx';
import GameInput from "./GameInput.jsx";

// Pick a random word on every page load.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  return GameInput();
}

export default Game;
