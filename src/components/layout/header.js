import React from 'react'
import PropTypes from 'prop-types'

import { FlexBox } from './flex-box'
import { Spacing } from './spacing'
import { Colour } from './colour'

const Header = ({ children }) => (
  <Colour backgroundColour='#3748AC' colour='white'>
    <Spacing marginLeft={10} marginRight={10}>
      <FlexBox justifyContent='space-between'>{children}</FlexBox>
    </Spacing>
  </Colour>
)

Header.propTypes = {
  children: PropTypes.node,
}

export { Header }
