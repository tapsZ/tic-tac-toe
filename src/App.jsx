import Player from "./components/player/Player";
import GameBoard from "./components/game_board/GameBoard";
import { useState } from "react";
function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const handleOnSelect = () => {
    setActivePlayer((activePlayer) => (activePlayer === "X" ? "O" : "X"));
  };
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectActivePlayer={handleOnSelect}
          activePlayer={activePlayer}
        />
      </div>
    </main>
  );
}

export default App;
