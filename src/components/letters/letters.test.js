import React from 'react'
import { render } from '@testing-library/react'

import { Letters } from './letters'

test('contains the whole alphabet', () => {
  const { getByText } = render(<Letters />)

  expect(getByText('A')).toBeInTheDocument()
  expect(getByText('B')).toBeInTheDocument()
  expect(getByText('C')).toBeInTheDocument()
  expect(getByText('D')).toBeInTheDocument()
  expect(getByText('E')).toBeInTheDocument()
  expect(getByText('F')).toBeInTheDocument()
  expect(getByText('G')).toBeInTheDocument()
  expect(getByText('H')).toBeInTheDocument()
  expect(getByText('I')).toBeInTheDocument()
  expect(getByText('J')).toBeInTheDocument()
  expect(getByText('K')).toBeInTheDocument()
  expect(getByText('L')).toBeInTheDocument()
  expect(getByText('M')).toBeInTheDocument()
  expect(getByText('N')).toBeInTheDocument()
  expect(getByText('O')).toBeInTheDocument()
  expect(getByText('P')).toBeInTheDocument()
  expect(getByText('Q')).toBeInTheDocument()
  expect(getByText('R')).toBeInTheDocument()
  expect(getByText('S')).toBeInTheDocument()
  expect(getByText('T')).toBeInTheDocument()
  expect(getByText('U')).toBeInTheDocument()
  expect(getByText('V')).toBeInTheDocument()
  expect(getByText('W')).toBeInTheDocument()
  expect(getByText('X')).toBeInTheDocument()
  expect(getByText('Y')).toBeInTheDocument()
  expect(getByText('Z')).toBeInTheDocument()
})
