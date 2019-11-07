import React from 'react'

import { AppBar, Toolbar, Typography, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { AboutButton } from '../about/about-button'

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
  },
})

const Header = () => {
  const classes = useStyles()

  return (
    <AppBar position='static'>
      <Container maxWidth='md'>
        <Toolbar>
          <Typography variant='h4' className={classes.title}>
            Word
          </Typography>
          <AboutButton />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export { Header }
