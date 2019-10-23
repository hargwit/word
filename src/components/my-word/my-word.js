import React, { useState } from 'react'
import { ValidatedInput } from '../input/validated-input/validated-input'
import { useMyWord } from './my-word-context'

const MyWord = () => {
  const { setWord } = useMyWord()
  const [word, setLocalWord] = useState('')
  const [valid, setValid] = useState(false)

  const onSubmit = event => {
    if (valid) {
      setWord(word)
    }
    event.preventDefault()
  }

  return (
    <form onSubmit={onSubmit}>
      <ValidatedInput setWord={setLocalWord} setValid={setValid} />
      <input
        type='submit'
        value='✓'
        data-testid='submit_button'
        disabled={!word || !valid}
        aria-label='Submit guess'
      />
    </form>
  )
}

export { MyWord }
