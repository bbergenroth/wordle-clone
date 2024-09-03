import React from 'react';

import { sample } from './utils.jsx';
import { WORDS } from './data.jsx';

// Pick a random word on every page load.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  return <>Put a game here!</>;
}

export default Game;
