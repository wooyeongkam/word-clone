interface GuessResultPops {
  textArray: string[][];
}

interface RowProps {
  charArray: string[];
}

export const GuessResult = ({ textArray }: GuessResultPops) => {
  return (
    <div className='guess-results'>
      {textArray.map((text) => (
        <Row charArray={text} />
      ))}
    </div>
  );
};

const Row = ({ charArray }: RowProps) => {
  return (
    <p className='guess'>
      {charArray.map((char) => (
        <span className='cell'>{char}</span>
      ))}
    </p>
  );
};
