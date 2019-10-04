import React, { useState } from 'react'
import PropTypes from 'prop-types'

import styled from '@emotion/styled'

const Letter = ({ letter }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [selected, setSelected] = useState(false)
  const [rejected, setRejected] = useState(false)

  const SubComponent = selected ? SelectedLi : rejected ? RejectedLi : Li

  function toggleMenu() {
    setShowMenu(!showMenu)
  }
  function toggleRejected() {
    setRejected(!rejected)
    setSelected(false)
    setShowMenu(false)
  }
  function toggleSelected() {
    setSelected(!selected)
    setRejected(false)
    setShowMenu(false)
  }

  const Menu = () =>
    showMenu ? (
      <div>
        <button data-testid='select_button' onClick={() => toggleSelected()}>
          ✓
        </button>
        <button data-testid='reject_button' onClick={() => toggleRejected()}>
          ✗
        </button>
      </div>
    ) : null

  return (
    <div>
      <SubComponent onClick={() => toggleMenu()}>{letter}</SubComponent>
      <Menu />
    </div>
  )
}

Letter.propTypes = {
  letter: PropTypes.string.isRequired,
}

export { Letter }

const Li = styled('li')`
  color: black;
`

const RejectedLi = styled('li')`
  color: red;
  text-decoration: line-through;
`

const SelectedLi = styled('li')`
  color: green;
  font-weight: bold;
`
