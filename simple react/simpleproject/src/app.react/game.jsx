import React, { useState } from 'react';

const ROWS = 6;
const COLS = 7;

function App() {
  const [board, setBoard] = useState(Array(ROWS).fill(null).map(() => Array(COLS).fill(null)));
  const [isRedNext, setIsRedNext] = useState(true);
  const [winner, setWinner] = useState(null);

  function handleClick(col) {
    if (winner) return; // Ignore clicks if game is won

    // Find the lowest empty row in the column
    const row = findAvailableRow(col);
    if (row === -1) return; // Column is full

    const newBoard = board.map(row => row.slice());
    newBoard[row][col] = isRedNext ? 'R' : 'Y';
    setBoard(newBoard);
    setIsRedNext(!isRedNext);

    const newWinner = calculateWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    }
  }

  function findAvailableRow(col) {
    for (let row = ROWS - 1; row >= 0; row--) {
      if (!board[row][col]) return row;
    }
    return -1;
  }

  function handleRestart() {
    setBoard(Array(ROWS).fill(null).map(() => Array(COLS).fill(null)));
    setIsRedNext(true);
    setWinner(null);
  }

  const status = winner ? `Winner: ${winner}` : `Next player: ${isRedNext ? 'Red' : 'Yellow'}`;

  const boardStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  };

  const columnStyle = {
    width: '60px',
    height: '30px',
    margin: '2px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  const gridStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const rowStyle = {
    display: 'flex',
  };

  const cellStyle = (color) => ({
    width: '60px',
    height: '60px',
    border: '1px solid #000',
    backgroundColor: color || '#eee',
    borderRadius: '50%',
  });

  const restartButtonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Connect Four</h1>
      <div style={{ fontSize: '24px', marginBottom: '20px' }}>{status}</div>
      <div style={boardStyle}>
        {Array.from({ length: COLS }).map((_, col) => (
          <button
            key={col}
            style={columnStyle}
            onClick={() => handleClick(col)}
          >
            Drop
          </button>
        ))}
      </div>
      <div style={gridStyle}>
        {board.map((row, rowIndex) => (
          <div key={rowIndex} style={rowStyle}>
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                style={cellStyle(cell === 'R' ? 'red' : cell === 'Y' ? 'yellow' : '')}
              />
            ))}
          </div>
        ))}
      </div>
      <button style={restartButtonStyle} onClick={handleRestart}>Restart Game</button>
    </div>
  );
}

function calculateWinner(board) {
  // Check for horizontal, vertical, and diagonal wins
  function checkLine(cells) {
    for (let i = 0; i < cells.length - 3; i++) {
      const [a, b, c, d] = cells.slice(i, i + 4);
      if (a && a === b && a === c && a === d) return a;
    }
    return null;
  }

  for (let r = 0; r < ROWS; r++) {
    if (checkLine(board[r])) return board[r][0];
  }

  for (let c = 0; c < COLS; c++) {
    if (checkLine(board.map(row => row[c]))) return board[0][c];
  }

  for (let r = 0; r <= ROWS - 4; r++) {
    for (let c = 0; c <= COLS - 4; c++) {
      const diagonal1 = [board[r][c], board[r + 1][c + 1], board[r + 2][c + 2], board[r + 3][c + 3]];
      const diagonal2 = [board[r][c + 3], board[r + 1][c + 2], board[r + 2][c + 1], board[r + 3][c]];
      if (checkLine(diagonal1)) return diagonal1[0];
      if (checkLine(diagonal2)) return diagonal2[0];
    }
  }

  return null;
}

export default App;
