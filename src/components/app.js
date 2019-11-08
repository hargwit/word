import React from 'react'

import { Letters } from './letters/letters'
import { Player } from './player/player'
import { MyWord } from './my-word/my-word'
import { MyWordProvider } from './my-word/my-word-context'
import { Header } from './header/header'
import { makeStyles } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    maxWidth: '800px',
    marginLeft: '1rem',
    marginRight: '1rem',
    marginTop: '2rem',
  },
})

const App = () => {
  const classes = useStyles()

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <Header />
        <div className={classes.content}>
          <Letters />
          <MyWordProvider>
            <Player number={1} />
            <Player number={2} />
            <MyWord />
          </MyWordProvider>
        </div>
      </div>
    </>
  )
}

export { App }
