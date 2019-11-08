import React from 'react'

import { Letter } from './letter/letter'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  root: {
    marginLeft: '1rem',
    marginRight: '1rem',
  },
})

const Letters = () => {
  const classes = useStyles()

  function getLetters() {
    const letters = []
    for (let i = 0; i < 26; i++) {
      letters.push(<Letter key={i} letter={String.fromCharCode(97 + i)} />)
    }
    return letters
  }

  return (
    <div className={classes.root}>
      <Typography variant='h5'>Letters</Typography>
      {getLetters()}
    </div>
  )
}

export { Letters }
