import React from 'react'

import { Letter } from './letter/letter'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  root: {
    margin: '1rem',
  },
  letter: {
    marginBottom: '-1rem',
  },
})

const Letters = () => {
  const classes = useStyles()

  function getLetters() {
    const letters = []
    for (let i = 0; i < 26; i++) {
      letters.push(
        <Grid item className={classes.letter}>
          <Letter key={i} letter={String.fromCharCode(97 + i)} />
        </Grid>,
      )
    }
    return letters
  }

  return (
    <Grid
      container
      direction='column'
      alignItems='center'
      className={classes.root}
    >
      <Grid item>
        <Typography variant='h5'>Letters</Typography>
      </Grid>
      <Grid item container direction='column' alignItems='center'>
        {getLetters()}
      </Grid>
    </Grid>
  )
}

export { Letters }
