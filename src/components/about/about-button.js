import React, { useState } from 'react'
import { Modal } from './modal'
import { Button } from '@material-ui/core'

const AboutButton = () => {
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
          <div>
            <h2>About Word</h2>
            <p>The aim of the game is to guess the other persons word first</p>
            <h3>How to play</h3>
            <ol>
              <li>
                Each player chooses a 4 letter word - this word may not contain
                any duplicates (eg. &apos;word&apos; is valid, &apos;wood&apos;
                is not)
              </li>
              <li>Players then take it in turn to guess more 4 letter words</li>
              <li>
                For each guess the other player must say how many letters the
                guess and their word have in common
              </li>
              <li>The winner is the first person to guess the correct word</li>
            </ol>
            <h3>The Project</h3>
            <p>
              This game was built using React and Test driven development. For
              more information head to{' '}
              <a href='https://hargwit.com'>hargwit.com</a>
            </p>
            <button data-testid='close_button' onClick={() => closeModal()}>
              ✗
            </button>
          </div>
        </Modal>
      )}
    </>
  )
}

export { AboutButton }
