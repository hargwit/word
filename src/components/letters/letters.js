import React from 'react'

import { Letter } from './letter/letter'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: '1rem',
    marginRight: '1rem',
    minWidth: '100px',
  },
  lettersContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
})

const Letters = () => {
  const classes = useStyles()

  function getLetters() {
    const letters = []
    for (let i = 0; i < 26; i++) {
      letters.push(<Letter key={i} letter={String.fromCharCode(65 + i)} />)
    }
    return letters
  }

  return (
    <div className={classes.root}>
      <Typography variant='h5'>Letters</Typography>
      <div className={classes.lettersContainer}>{getLetters()}</div>
    </div>
  )
}

export { Letters }
