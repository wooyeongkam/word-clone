import React, { useRef } from 'react';

interface GuessInputProps {
  onSubmit: (text: string) => void;
}

export const GuessInput = ({ onSubmit }: GuessInputProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    if (!inputRef.current) return;
    const inputElement = inputRef.current;
    inputElement.value = inputElement.value.toUpperCase();

    if (inputElement.validity.patternMismatch) {
      inputElement.setCustomValidity('Please enter 5 letters in English.');
      return;
    }

    inputElement.setCustomValidity('');
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (!inputRef.current) return;
    const inputElement = inputRef.current;

    onSubmit(inputElement.value.toUpperCase());
    inputElement.value = '';
  };

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        ref={inputRef}
        type='text'
        onChange={handleChange}
        pattern='[a-zA-Z]{5}'
        maxLength={5}
        autoComplete='off'
        required
        autoFocus
      />
    </form>
  );
};
