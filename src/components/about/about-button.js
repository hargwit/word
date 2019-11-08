import React, { useState } from 'react'
import { Modal } from './modal'
import {
  Button,
  Card,
  CardContent,
  Typography,
  CardActions,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  card: {
    padding: '0.5rem',
  },
  button: {
    marginLeft: 'auto',
    marginBottom: '0.5rem',
  },
})

const AboutButton = () => {
  const classes = useStyles()

  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <>
      <Button color='inherit' onClick={() => openModal()}>
        About
      </Button>
      {showModal && (
        <Modal>
          <Card className={classes.card}>
            <CardContent>
              <Typography gutterBottom variant='h4'>
                About Word
              </Typography>
              <Typography gutterBottom color='textSecondary'>
                The aim of the game is to guess the other persons word first
              </Typography>
              <Typography variant='h5'>How to play</Typography>
              <ol>
                <Typography component='li' color='textSecondary'>
                  Each player chooses a 4 letter word - this word may not
                  contain any duplicates (eg. &apos;word&apos; is valid,
                  &apos;wood&apos; is not)
                </Typography>
                <Typography component='li' color='textSecondary'>
                  Players then take it in turn to guess more 4 letter words
                </Typography>
                <Typography component='li' color='textSecondary'>
                  For each guess the other player must say how many letters the
                  guess and their word have in common
                </Typography>
                <Typography gutterBottom component='li' color='textSecondary'>
                  The winner is the first person to guess the correct word
                </Typography>
              </ol>
              <Typography gutterBottom variant='h5'>
                The Project
              </Typography>
              <Typography gutterBottom color='textSecondary'>
                This game was built using React and Test driven development. For
                more information head to{' '}
                <a href='https://hargwit.com'>hargwit.com</a>
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant='contained'
                color='primary'
                data-testid='close_button'
                onClick={() => closeModal()}
                className={classes.button}
              >
                Close
              </Button>
            </CardActions>
          </Card>
        </Modal>
      )}
    </>
  )
}

export { AboutButton }
