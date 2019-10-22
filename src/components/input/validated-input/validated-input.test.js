import React from 'react'

import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ValidatedInput } from './validated-input'

test('shows placeholder text when no word is entered', () => {
  const { getByPlaceholderText } = render(
    <ValidatedInput setWord={jest.fn()} setValid={jest.fn()} />,
  )

  expect(getByPlaceholderText('Enter word...')).toBeInTheDocument()
})

test('shows warning when word not long enough', () => {
  const { getByPlaceholderText, getByText, queryByText } = render(
    <ValidatedInput setWord={jest.fn()} setValid={jest.fn()} />,
  )

  userEvent.type(getByPlaceholderText('Enter word...'), 'wor')

  expect(getByText('Too short')).toBeInTheDocument()

  userEvent.type(getByPlaceholderText('Enter word...'), 'word')

  expect(queryByText('Too short')).toBeNull()
})

test('shows warning when word too long', () => {
  const { getByPlaceholderText, getByText, queryByText } = render(
    <ValidatedInput setWord={jest.fn()} setValid={jest.fn()} />,
  )

  userEvent.type(getByPlaceholderText('Enter word...'), 'words')

  expect(getByText('Too long')).toBeInTheDocument()

  userEvent.type(getByPlaceholderText('Enter word...'), 'word')

  expect(queryByText('Too long')).toBeNull()
})

test('shows warning when duplicates present', () => {
  const { getByPlaceholderText, getByText, queryByText } = render(
    <ValidatedInput setWord={jest.fn()} setValid={jest.fn()} />,
  )

  userEvent.type(getByPlaceholderText('Enter word...'), 'wood')

  expect(getByText('No duplicates')).toBeInTheDocument()

  userEvent.type(getByPlaceholderText('Enter word...'), 'word')

  expect(queryByText('No duplicates')).toBeNull()
})

test('displays warning passed in as a prop', () => {
  const { getByText, getByPlaceholderText, rerender } = render(
    <ValidatedInput
      setWord={jest.fn()}
      setValid={jest.fn()}
      parentWarning='A parent warning'
    />,
  )

  userEvent.type(getByPlaceholderText('Enter word...'), 'wo')

  expect(getByText('A parent warning')).toBeInTheDocument()
  expect(getByText('Too short')).toBeInTheDocument()

  rerender(
    <ValidatedInput
      setWord={jest.fn()}
      setValid={jest.fn()}
      parentWarning='A different parent warning'
    />,
  )

  expect(getByText('A different parent warning')).toBeInTheDocument()
  expect(getByText('Too short')).toBeInTheDocument()
})

test('calls setWord and setValid when word updated', () => {
  const setWord = jest.fn()
  const setValid = jest.fn()
  const { getByPlaceholderText } = render(
    <ValidatedInput setWord={setWord} setValid={setValid} />,
  )

  userEvent.type(getByPlaceholderText('Enter word...'), 'word')

  expect(setWord).toHaveBeenCalledTimes(4)
  expect(setWord).toHaveBeenNthCalledWith(1, 'w')
  expect(setWord).toHaveBeenNthCalledWith(2, 'wo')
  expect(setWord).toHaveBeenNthCalledWith(3, 'wor')
  expect(setWord).toHaveBeenNthCalledWith(4, 'word')

  expect(setValid).toHaveBeenCalledTimes(4)
  expect(setValid).toHaveBeenNthCalledWith(1, false)
  expect(setValid).toHaveBeenNthCalledWith(2, false)
  expect(setValid).toHaveBeenNthCalledWith(3, false)
  expect(setValid).toHaveBeenNthCalledWith(4, true)
})
