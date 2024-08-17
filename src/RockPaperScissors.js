import React, { useState } from 'react';
import './RockPaperScissors.css';

// Use emojis for the choices
const choices = [
  { name: 'rock', symbol: '✊' },
  { name: 'paper', symbol: '✋' },
  { name: 'scissors', symbol: '✌️' }
];

const RockPaperScissors = () => {
  const [userChoice, setUserChoice] = useState('');
  const [opponentChoice, setOpponentChoice] = useState('');
  const [result, setResult] = useState('');

  const getResult = (user, opponent) => {
    if (user === opponent) return "It's a draw!";
    if (
      (user === 'rock' && opponent === 'scissors') ||
      (user === 'paper' && opponent === 'rock') ||
      (user === 'scissors' && opponent === 'paper')
    ) {
      return 'You win!';
    } else {
      return 'You lose!';
    }
  };

  const handleUserChoice = (choice) => {
    setUserChoice(choice.name);
    setResult('');
  };

  const handleOpponentChoice = (choice) => {
    setOpponentChoice(choice.name);
    if (userChoice) {
      setResult(getResult(userChoice, choice.name));
    }
  };

  return (
    <div className="game-container">
      <h1>Rock, Paper, Scissors</h1>
      <div className="choices">
        <h2>Choose for You:</h2>
        {choices.map((choice) => (
          <button key={choice.name} onClick={() => handleUserChoice(choice)}>
            {choice.symbol}
          </button>
        ))}
      </div>
      <div className="choices">
        <h2>Choose for Opponent:</h2>
        {choices.map((choice) => (
          <button key={choice.name} onClick={() => handleOpponentChoice(choice)}>
            {choice.symbol}
          </button>
        ))}
      </div>
      {userChoice && opponentChoice && (
        <div className="result">
          <p>Your choice: {choices.find(c => c.name === userChoice).symbol}</p>
          <p>Opponent's choice: {choices.find(c => c.name === opponentChoice).symbol}</p>
          <h2>{result}</h2>
        </div>
      )}
    </div>
  );
};

export default RockPaperScissors;
