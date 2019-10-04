import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { Letter } from './letter'

test('displays letter in props', () => {
  const { getByText } = render(<Letter letter='a' />)

  expect(getByText(/a/)).toBeInTheDocument()
})

test('opens and closes menu on click', () => {
  const { queryByTestId, getByText, getByTestId } = render(
    <Letter letter='a' />,
  )

  expect(queryByTestId('select_button')).toBeNull()
  expect(queryByTestId('reject_button')).toBeNull()

  fireEvent.click(getByText('a'))

  expect(getByTestId('select_button')).toBeInTheDocument()
  expect(getByTestId('reject_button')).toBeInTheDocument()

  fireEvent.click(getByText('a'))

  expect(queryByTestId('select_button')).toBeNull()
  expect(queryByTestId('reject_button')).toBeNull()
})

test('toggles color to red and strike through on reject', () => {
  const { getByText, getByTestId } = render(<Letter letter='a' />)

  expect(getByText('a')).toHaveStyleRule('color', 'black')
  expect(getByText('a')).not.toHaveStyleRule('text-decoration', 'line-through')

  fireEvent.click(getByText('a'))
  fireEvent.click(getByTestId('reject_button'))

  expect(getByText('a')).toHaveStyleRule('color', 'red')
  expect(getByText('a')).toHaveStyleRule('text-decoration', 'line-through')

  fireEvent.click(getByText('a'))
  fireEvent.click(getByTestId('reject_button'))

  expect(getByText('a')).toHaveStyleRule('color', 'black')
  expect(getByText('a')).not.toHaveStyleRule('text-decoration', 'line-through')
})

test('toggles color to green and bold on select', () => {
  const { getByText, getByTestId } = render(<Letter letter='a' />)

  expect(getByText('a')).toHaveStyleRule('color', 'black')
  expect(getByText('a')).not.toHaveStyleRule('font-weight', 'bold')

  fireEvent.click(getByText('a'))
  fireEvent.click(getByTestId('select_button'))

  expect(getByText('a')).toHaveStyleRule('color', 'green')
  expect(getByText('a')).toHaveStyleRule('font-weight', 'bold')

  fireEvent.click(getByText('a'))
  fireEvent.click(getByTestId('select_button'))

  expect(getByText('a')).toHaveStyleRule('color', 'black')
  expect(getByText('a')).not.toHaveStyleRule('font-weight', 'bold')
})
