import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { GuessInput } from './guess-input';
import { GuessResult } from './guess-result';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const initialValue = Array.from({ length: 6 }).map((_) => ['', '', '', '', '']);

function Game() {
  const [textArray, setTextArray] = useState(initialValue);

  const handleSubmit = (text: string) => {
    setTextArray((prev) => [...prev, text.split('')]);
  };

  return (
    <div>
      <GuessResult textArray={textArray} />
      <GuessInput onSubmit={handleSubmit} />
    </div>
  );
}

export default Game;
