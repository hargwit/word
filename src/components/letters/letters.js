import React from 'react'

import { Letter } from './letter/letter'
import { Typography } from '@material-ui/core'

const Letters = () => {
  function getLetters() {
    const letters = []
    for (let i = 0; i < 26; i++) {
      const letter = String.fromCharCode(65 + i)
      letters.push(<Letter key={letter} letter={letter} />)
    }
    return letters
  }

  return (
    <div style={styles.root}>
      <Typography variant='h5'>Letters</Typography>
      <div style={styles.lettersContainer}>{getLetters()}</div>
    </div>
  )
}

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: '1rem',
    marginRight: '1rem',
    minWidth: '100px',
    maxWidth: '100px',
  },
  lettersContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '5px',
  },
}

export { Letters }
