import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { TextField, Button } from '@material-ui/core'

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
    return [...word1.toLowerCase()].reduce((total, letter) => {
      if (word2.toLowerCase().includes(letter)) {
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
    setWord('')
    setLetters(0)

    event.preventDefault()
  }

  return (
    <form onSubmit={onSubmit} autoComplete='off' style={styles.form}>
      <ValidatedInput
        word={word}
        setWord={updateWord}
        setValid={setValid}
        parentWarning={warning}
        disabled={!myWord}
      />
      <TextField
        type='number'
        onChange={event => updateLetters(event.target.value)}
        value={letters}
        disabled={autocomplete || !myWord}
        margin='dense'
        variant='outlined'
        inputProps={{
          max: 4,
          min: 0,
          'data-testid': 'letters_input',
        }}
        aria-label='Number of letters in common'
        style={styles.input}
      />
      <Button
        type='submit'
        value='✓'
        data-testid='submit_button'
        disabled={!word || !valid || !!warning || !myWord}
        aria-label='Submit guess'
        color='primary'
        variant='contained'
        style={styles.button}
      >
        ✓
      </Button>
    </form>
  )
}

Guesser.propTypes = {
  addGuess: PropTypes.func.isRequired,
  autocomplete: PropTypes.bool,
}
const styles = {
  form: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  button: {
    maxWidth: '40px',
    minWidth: '40px',
    height: '40px',
    marginTop: '8px',
    marginBottom: '4px',
  },
  input: {
    marginLeft: '0.5rem',
    marginRight: '0.5rem',
    minWidth: '40px',
    maxWidth: '40px',
  },
}

export { Guesser }
