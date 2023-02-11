import React from "react";

function GameResult({isFinished, isWon, answer, guessAttempts}) {
  return (
    isFinished && (
      isWon 
      ? (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in 
            <strong> {guessAttempts.length} guesses</strong>.
          </p>
        </div>
        
      )
      : (
        <div className="sad banner">
          <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        </div>
      )
    )
  )
}

export default GameResult;
