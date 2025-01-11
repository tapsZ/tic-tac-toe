import { useState } from "react";

export default function GameBoard({onSelectActivePlayer, activePlayer}) {
  const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  const [gameBoard, setGameBoard] = useState(initialBoard);

  const handlePlayClick = (rowIndex, columnIndex) => {
    setGameBoard((updatedGameBoard) => {
      let newGameBoard = [
        ...updatedGameBoard.map((innerArray) => [...innerArray]),
      ];
      newGameBoard[rowIndex][columnIndex] = activePlayer;
      return newGameBoard;
    });
      onSelectActivePlayer();
  };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, playerSymbolIndex) => (
              <li key={playerSymbolIndex}>
                <button
                  onClick={() => handlePlayClick(rowIndex, playerSymbolIndex)}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
