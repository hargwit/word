import React from 'react'

import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { InputWithValidation } from './input-with-validation'

test('shows placeholder text', () => {
  const { getByPlaceholderText } = render(<InputWithValidation />)

  expect(getByPlaceholderText('Enter word...')).toBeInTheDocument()
})

test('shows warning when word not long enough', () => {
  const { getByPlaceholderText, getByText, queryByText } = render(
    <InputWithValidation />,
  )

  userEvent.type(getByPlaceholderText('Enter word...'), 'wor')

  expect(getByText('Too short')).toBeInTheDocument()

  userEvent.type(getByPlaceholderText('Enter word...'), 'word')

  expect(queryByText('Too short')).toBeNull()
})

test('shows warning when word too long', () => {
  const { getByPlaceholderText, getByText, queryByText } = render(
    <InputWithValidation />,
  )

  userEvent.type(getByPlaceholderText('Enter word...'), 'words')

  expect(getByText('Too long')).toBeInTheDocument()

  userEvent.type(getByPlaceholderText('Enter word...'), 'word')

  expect(queryByText('Too long')).toBeNull()
})
