import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { WARNINGS } from '../constants'
import { ValidatedInput } from '../validated-input/validated-input'
import { useMyWord } from '../../my-word/my-word-context'

const Guesser = ({ addGuess, autocomplete }) => {
  const { myWord } = useMyWord()
  const [word, setWord] = useState('')
  const [valid, setValid] = useState(false)
  const [letters, setLetters] = useState(0)
  const [warning, setWarning] = useState('')

  const updateWord = newWord => {
    setWord(newWord)

    if (autocomplete && myWord) {
      updateLetters(lettersInCommon(newWord, myWord))
    }
  }

  const updateLetters = newLetters => {
    setLetters(newLetters)
    setWarning(getWarning(newLetters))
  }

  const getWarning = letters => {
    if (letters < 0 || letters > 4) {
      return WARNINGS.LETTERS_SIZE
    }
    return ''
  }

  function lettersInCommon(word1, word2) {
    return [...word1].reduce((total, letter) => {
      if (word2.includes(letter)) {
        total++
      }
      return total
    }, 0)
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
    <form onSubmit={onSubmit}>
      <ValidatedInput
        setWord={updateWord}
        setValid={setValid}
        parentWarning={warning}
      />
      <input
        data-testid='letters_input'
        type='number'
        onChange={event => updateLetters(event.target.value)}
        value={letters}
        disabled={autocomplete}
        aria-label='Number of letters in common'
      />
      <input
        type='submit'
        value='✓'
        data-testid='submit_button'
        disabled={!word || !valid || !!warning}
        aria-label='Submit guess'
      />
    </form>
  )
}

Guesser.propTypes = {
  addGuess: PropTypes.func.isRequired,
  autocomplete: PropTypes.bool,
}

export { Guesser }
