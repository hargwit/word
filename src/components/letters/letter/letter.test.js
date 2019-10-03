import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { Letter } from './letter'

test('displays letter in props', () => {
  const { getByText } = render(<Letter letter='a' />)

  expect(getByText(/a/)).toBeInTheDocument()
})

test('toggles color to red and strike through on click', () => {
  const { getByText } = render(<Letter letter='a' />)

  expect(getByText(/a/)).toHaveStyleRule('color', 'black')
  expect(getByText(/a/)).not.toHaveStyleRule('text-decoration', 'line-through')

  fireEvent.click(getByText(/a/))

  expect(getByText(/a/)).toHaveStyleRule('color', 'red')
  expect(getByText(/a/)).toHaveStyleRule('text-decoration', 'line-through')

  fireEvent.click(getByText(/a/))

  expect(getByText(/a/)).toHaveStyleRule('color', 'black')
  expect(getByText(/a/)).not.toHaveStyleRule('text-decoration', 'line-through')
})
