import React, { useLayoutEffect } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/styles'

import './modal.css'

const useStyles = makeStyles({
  modalContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'fixed',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
  },
})

const Modal = ({ children }) => {
  const classes = useStyles()

  let modalRoot = document.getElementById('modal_root')
  if (!modalRoot) {
    modalRoot = document.createElement('div')
    modalRoot.setAttribute('id', 'modal_root')
    modalRoot.dataset.testid = 'modal_root'
    document.body.appendChild(modalRoot)
  }

  useLayoutEffect(() => {
    return () => {
      document.body.removeChild(modalRoot)
    }
  }, [modalRoot])

  return ReactDOM.createPortal(
    <div className={classes.modalContainer}>{children}</div>,
    modalRoot,
  )
}

Modal.propTypes = {
  children: PropTypes.node,
}

export { Modal }
