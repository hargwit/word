import { hasDuplicates, checkLength } from './validation'

test('hasDuplicates returns true if there is a duplicate', () => {
  const expected = true
  const actual = hasDuplicates('wood')

  expect(actual).toBe(expected)
})

test('hasDuplicates returns false if there is not a duplicate', () => {
  const expected = false
  const actual = hasDuplicates('word')

  expect(actual).toBe(expected)
})

test('checkLength returns -1 if word too short', () => {
  const expected = -1
  const actual = checkLength('wor')

  expect(actual).toBe(expected)
})

test('checkLength returns 1 if word too long', () => {
  const expected = 1
  const actual = checkLength('wordy')

  expect(actual).toBe(expected)
})

test('checkLength returns 0 if word correct length', () => {
  const expected = 0
  const actual = checkLength('word')

  expect(actual).toBe(expected)
})
