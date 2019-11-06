import React from 'react'

import { Letters } from './letters/letters'
import { Player } from './player/player'
import { MyWord } from './my-word/my-word'
import { MyWordProvider } from './my-word/my-word-context'
import { Header } from './header/header'
import { makeStyles } from '@material-ui/styles'
import { Container } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
})

const App = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Header />
      <Container maxWidth='md'>
        <Letters />
        <MyWordProvider>
          <Player number={1} />
          <Player number={2} />
          <MyWord />
        </MyWordProvider>
      </Container>
    </div>
  )
}

export { App }
