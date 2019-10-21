import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { hasDuplicates, checkLength } from './validation'

const UserInput = ({ addGuess, autocomplete, myWord }) => {
  const [word, setWord] = useState('')
  const [letters, setLetters] = useState(0)
  const [warning, setWarning] = useState('')

  const updateWord = event => {
    const newWord = event.target.value

    setWord(newWord)
    setWarning(getWarning(newWord, letters))

    if (autocomplete && myWord) {
      setLetters(lettersInCommon(newWord, myWord))
    }
  }

  const updateLetters = event => {
    const newLetters = event.target.value

    setLetters(newLetters)
    setWarning(getWarning(word, newLetters))
  }

  function lettersInCommon(word1, word2) {
    return [...word1].reduce((total, letter) => {
      if (word2.includes(letter)) {
        total++
      }
      return total
    }, 0)
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

  function onSubmit(event) {
    const payload = {
      word: word,
      letters: parseInt(letters),
    }
    addGuess(payload)

    event.preventDefault()
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          placeholder='Enter word...'
          type='text'
          onChange={updateWord}
          value={word}
          aria-label='Enter guess here'
        />
        <input
          data-testid='letters_input'
          type='number'
          onChange={updateLetters}
          value={letters}
          disabled={autocomplete && myWord}
          aria-label='Number of letters in common'
        />
        <input
          type='submit'
          value='✓'
          data-testid='submit_button'
          disabled={!word || !!warning}
          aria-label='Submit guess'
        />
      </form>
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
  autocomplete: PropTypes.bool,
  myWord: PropTypes.string,
}

export { UserInput }
