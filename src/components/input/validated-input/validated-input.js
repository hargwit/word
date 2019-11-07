import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {
  hasDuplicates,
  checkLength,
  addWarning,
  anyWarning,
} from './validation'

import { WARNINGS } from '../constants'
import { TextField } from '@material-ui/core'

const ValidatedInput = ({
  word,
  setWord,
  setValid,
  parentWarning,
  disabled,
}) => {
  const [warnings, setWarnings] = useState([])

  const onUpdate = event => {
    const newWord = event.target.value

    const warnings = getWarnings(newWord)

    setValid(!anyWarning(warnings))
    setWarnings(warnings)
    setWord(newWord)
  }

  function getWarnings(word) {
    let newWarnings = []

    if (checkLength(word) === -1) {
      newWarnings = addWarning(newWarnings, WARNINGS.TOO_SHORT)
    }

    if (checkLength(word) === 1) {
      newWarnings = addWarning(newWarnings, WARNINGS.TOO_LONG)
    }

    if (hasDuplicates(word)) {
      newWarnings = addWarning(newWarnings, WARNINGS.NO_DUPLICATES)
    }

    return newWarnings
  }

  return (
    <TextField
      id='validated_input'
      label='Enter word...'
      type='text'
      onChange={onUpdate}
      disabled={disabled}
      aria-label='Enter word here'
      value={word}
      variant='outlined'
      error={anyWarning(addWarning(warnings, parentWarning))}
      helperText={
        anyWarning(addWarning(warnings, parentWarning)) &&
        addWarning(warnings, parentWarning)[0]
      }
    />
  )
}

ValidatedInput.propTypes = {
  setWord: PropTypes.func.isRequired,
  setValid: PropTypes.func.isRequired,
  parentWarning: PropTypes.string,
  disabled: PropTypes.bool,
  word: PropTypes.string,
}

export { ValidatedInput }
