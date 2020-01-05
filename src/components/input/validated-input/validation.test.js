import {
  hasDuplicates,
  checkLength,
  addWarning,
  anyWarning,
} from './validation'

import { WARNINGS } from '../constants'

test('add warning returns the passed list plus the warning', () => {
  let expected = [WARNINGS.TOO_LONG, WARNINGS.TOO_SHORT]
  let actual = addWarning([WARNINGS.TOO_LONG], WARNINGS.TOO_SHORT)

  expect(actual).toEqual(expected)

  expected = [WARNINGS.TOO_SHORT]
  actual = addWarning([WARNINGS.TOO_SHORT], WARNINGS.TOO_SHORT)

  expect(actual).toEqual(expected)
})

test('any warning returns true if there is a warning, false if not', () => {
  let expected = true
  let actual = anyWarning([WARNINGS.TOO_SHORT])

  expect(actual).toBe(expected)

  expected = false
  actual = anyWarning([])

  expect(actual).toBe(expected)
})

test('hasDuplicates returns true if there is a duplicate including across capitals', () => {
  const expected = true

  var actual = hasDuplicates('wood')
  expect(actual).toBe(expected)

  actual = hasDuplicates('wOod')
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
