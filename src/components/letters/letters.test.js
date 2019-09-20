import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { Letters } from './letters'

test('Tapping a letter toggles it to crossed', () => {
  const { getByText } = render(<Letters />)

  const a = getByText('a')
})
