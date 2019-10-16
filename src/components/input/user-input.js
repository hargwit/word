import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { hasDuplicates, checkLength } from './validation'

const UserInput = ({ addGuess }) => {
  const [word, setWord] = useState('')
  const [letters, setLetters] = useState(0)
  const [warning, setWarning] = useState('')

  const updateWord = event => {
    const newWord = event.target.value

    setWord(newWord)
    setWarning(getWarning(newWord, letters))
  }

  const updateLetters = event => {
    const newLetters = event.target.value

    setLetters(newLetters)
    setWarning(getWarning(word, newLetters))
  }

  function getWarning(word, letters) {
    if (!word) {
      return ''
    }
    if (checkLength(word) === -1) {
      return WARNINGS.TOO_SHORT
    }
    if (checkLength(word) === 1) {
      return WARNINGS.TOO_LONG
    }
    if (hasDuplicates(word)) {
      return WARNINGS.NO_DUPLICATES
    }
    if (letters < 0 || letters > 4) {
      return WARNINGS.LETTERS_SIZE
    }

    return ''
  }

  function onSubmit() {
    const payload = {
      word: word,
      letters: parseInt(letters),
    }
    addGuess(payload)
  }

  return (
    <div>
      <div>
        <input
          placeholder='Enter word...'
          type='text'
          onChange={updateWord}
          value={word}
        />
        <input
          data-testid='letters_input'
          type='number'
          onChange={updateLetters}
          value={letters}
        />
        <button
          data-testid='submit_button'
          disabled={!word || !!warning}
          onClick={onSubmit}
        >
          ✓
        </button>
      </div>
      {warning && <p>{warning}</p>}
    </div>
  )
}

const WARNINGS = {
  TOO_SHORT: 'Too short',
  TOO_LONG: 'Too long',
  NO_DUPLICATES: 'No duplicates',
  LETTERS_SIZE: 'Must be between 0-4',
}

UserInput.propTypes = {
  addGuess: PropTypes.func.isRequired,
}

export { UserInput }
