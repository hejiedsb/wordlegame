interface SquareProps {
  value: string;
}

function Square({ value }: SquareProps) {
  return <button className='square'>{value}</button>;
}

interface BoardProps {
  guesses: string[];
  currentGuess: string;
}

function Board({ guesses, currentGuess }: BoardProps) {
  const rows = 6; // 一共 6 行
  const cols = 5; // 每行 5 个字母

  return (
    <div className="board">
      {Array.from({ length: rows }).map((_, rowIndex) => {
        const guess = guesses[rowIndex] || (rowIndex === guesses.length ? currentGuess : '');
        return (
          <div className="board-row" key={rowIndex}>
            {Array.from({ length: cols }).map((_, colIndex) => (
              <Square key={colIndex} value={guess[colIndex] || ''} />
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default Board;
