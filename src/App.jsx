import './App.css'
import Header from "./Header.jsx";
import Game from "./Game.jsx";
import GameInput from "./GameInput.jsx";

function App() {
  return (
      <div className="wrapper">
          <Header />
          <div className="game-wrapper">
              <Game />
          </div>
          <div className="guess">
              <GameInput />
          </div>
      </div>
          );
}

export default App
