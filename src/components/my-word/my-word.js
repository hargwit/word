import React, { useState } from 'react'
import { ValidatedInput } from '../input/validated-input/validated-input'
import { useMyWord } from './my-word-context'
import { Button, Typography } from '@material-ui/core'

const MyWord = () => {
  const { myWord, setMyWord } = useMyWord()
  const [word, setLocalWord] = useState('')
  const [valid, setValid] = useState(false)

  const onSubmit = event => {
    if (!myWord && valid) {
      setMyWord(word)
    }
    event.preventDefault()
  }

  return (
    <div style={styles.root}>
      <Typography variant='h5'>My Word</Typography>
      <form onSubmit={onSubmit} autoComplete='off' style={styles.form}>
        <ValidatedInput
          disabled={!!myWord}
          setWord={setLocalWord}
          setValid={setValid}
        />
        {!myWord && (
          <Button
            type='submit'
            value='✓'
            data-testid='submit_button'
            disabled={!word || !valid}
            aria-label='Submit word'
            color='primary'
            variant='contained'
            style={styles.button}
          >
            ✓
          </Button>
        )}
      </form>
    </div>
  )
}

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justify: 'flex-start',
    alignItems: 'center',
    marginLeft: '1rem',
    marginRight: '1rem',
    marginBottom: '2rem',
    minWidth: '140px',
    maxWidth: '140px',
  },
  button: {
    maxWidth: '40px',
    minWidth: '40px',
    height: '40px',
    marginTop: '8px',
    marginBottom: '4px',
    marginLeft: '0.5rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '5px',
  },
}

export { MyWord }
