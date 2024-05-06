import React, { useState } from "react";
import "./Game.css";
import useTicTacToe from "../hooks/useTicTacToe";

const Game = () => {
  const { board, handleClick, resetGame, getStatusMessage } = useTicTacToe();

  return (
    <div className="game">
      <div className="status">
        <div className="statusMsg">{getStatusMessage()}</div>
      </div>
      <div className="board">
        {board.map((b, idx) => {
          return (
            <button
              className="cell"
              key={idx}
              onClick={() => handleClick(idx)}
              disabled={b !== null}
            >
              {b}
            </button>
          );
        })}
      </div>
      <button className="reset-button" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
};

export default Game;
