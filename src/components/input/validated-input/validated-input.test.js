import React from 'react'

import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ValidatedInput } from './validated-input'

test('calls setGuess with the word when valid', () => {
  const props = {
    setGuess: jest.fn(),
    setWarning: jest.fn(),
  }
  const { getByPlaceholderText } = render(<ValidatedInput {...props} />)

  userEvent.type(getByPlaceholderText('Enter word...'), 'wood')

  expect(props.setGuess).not.toHaveBeenCalled()

  userEvent.type(getByPlaceholderText('Enter word...'), 'word')

  expect(props.setGuess).toHaveBeenCalled()
  expect(props.setGuess).toHaveBeenCalledWith('word')
})

test('calls setWarning with warning when word not long enough', () => {
  const props = {
    setGuess: jest.fn(),
    setWarning: jest.fn(),
  }
  const { getByPlaceholderText } = render(<ValidatedInput {...props} />)

  userEvent.type(getByPlaceholderText('Enter word...'), 'wor')

  expect(props.setWarning).toHaveBeenLastCalledWith('Too short')

  userEvent.type(getByPlaceholderText('Enter word...'), 'word')

  expect(props.setWarning).toHaveBeenLastCalledWith('')
})

test('calls setWarning with warning when word too long', () => {
  const props = {
    setGuess: jest.fn(),
    setWarning: jest.fn(),
  }
  const { getByPlaceholderText } = render(<ValidatedInput {...props} />)

  userEvent.type(getByPlaceholderText('Enter word...'), 'words')

  expect(props.setWarning).toHaveBeenLastCalledWith('Too long')

  userEvent.type(getByPlaceholderText('Enter word...'), 'word')

  expect(props.setWarning).toHaveBeenLastCalledWith('')
})

test('calls setWarning with warning when duplicates present', () => {
  const props = {
    setGuess: jest.fn(),
    setWarning: jest.fn(),
  }
  const { getByPlaceholderText } = render(<ValidatedInput {...props} />)

  userEvent.type(getByPlaceholderText('Enter word...'), 'wood')

  expect(props.setWarning).toHaveBeenLastCalledWith('No duplicates')

  userEvent.type(getByPlaceholderText('Enter word...'), 'word')

  expect(props.setWarning).toHaveBeenLastCalledWith('')
})
