export default function GameBoard() {
  const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  return (
    <ol id="game-board">
      {initialBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, playerSymbolIndex) => (
              <li key={playerSymbolIndex}>
                <button>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
